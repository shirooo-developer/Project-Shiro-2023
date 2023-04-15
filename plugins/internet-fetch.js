import fetch from 'node-fetch';
import { format } from 'util';

let handler = async (m, { text, conn }) => {
  if (!/^https?:\/\//.test(text)) throw 'Awali *URL* dengan http:// atau https://';
  let _url = new URL(text);
  let url = global.API(_url.origin, _url.pathname, Object.fromEntries(_url.searchParams.entries()), 'APIKEY');
  let res = await fetch(url);
  if (res.headers.get('content-length') > 100 * 1024 * 1024) {
    throw `Content-Length terlalu besar: ${res.headers.get('content-length')}`;
  }
  let contentType = res.headers.get('content-type');
  if (!/^text\/|application\/json/.test(contentType)) {
    throw `Tipe konten tidak didukung: ${contentType}`;
  }
  let txt = await res.buffer();
  try {
    txt = format(JSON.parse(txt + ''));
  } catch (e) {
    txt = txt + '';
  }
  if (txt.length > 65536) {
    throw 'Hasil terlalu panjang';
  }
  conn.sendFile(m.chat, url, 'file', text, m);
};
handler.help = ['fetch', 'get'].map(v => v + ' <url>');
handler.tags = ['internet'];
handler.command = /^(fetch|get)$/i;

export default handler;
