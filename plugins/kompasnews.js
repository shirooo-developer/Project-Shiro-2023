import fetch from 'node-fetch';
import bo from 'dhn-api';

let handler = async (m, { conn }) => {
  try {
    const news = await bo.KompasNews();
    const selectedNews = news[Math.floor(Math.random() * news.length)];
    const { berita, berita_url, berita_thumb, berita_jenis, berita_diupload } = selectedNews;

    let caption = `📺 *Kompas News*
📢 *Berita:* ${berita}
📁 *Type News:* ${berita_jenis}
⌚ *Uploded:* ${berita_diupload}
🛰 *Source Url:* ${berita_url}`;

    let thumbnail = await (await fetch(berita_thumb)).buffer();
    conn.sendFile(m.chat, berita_thumb, 'thumbnail.jpg', caption, m, false, { thumbnail });
  } catch (err) {
    console.log(err);
    conn.reply(m.chat, 'Error!', m);
  }
};

handler.help = ['kompasnews'];
handler.tags = ['berita'];
handler.command = /^kompas(news)?$/i;
handler.limit = true;

export default handler;
