let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Subscribe Channel Ku Ya Kak nih link nya
https://www.youtube.com/@zykobotz
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*YANG SUBSCRIBE ANAK TUHAN*', 'status@broadcast') 
}
handler.help = ['ytadmin']
handler.tags = ['info']
handler.command = /^(ytadmin)$/i
handler.owner = false
handler.exp = 25

export default handler 
