let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
🐦 Sama gw juga males om
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'iya nih males om', 'status@broadcast')
}
handler.customPrefix = /^(males|malesgw|males gw|)$/i
handler.command = new RegExp

export default handler

 