let handler = async (m, { conn, usedPrefix: _p }) => {
  let name = conn.getName(m.sender)
  let message = `
Halo ${name}! Terima kasih telah menggunakan layanan bot ini.

Berikut ini adalah daftar perintah yang dapat Anda gunakan:

1. *.menu* - Menampilkan daftar menu
2. *.info* - Menampilkan informasi tentang bot ini
3. *.help* - Menampilkan bantuan tentang cara menggunakan bot ini

Silakan gunakan perintah di atas untuk berinteraksi dengan bot ini. Terima kasih!
  `
  conn.reply(m.chat, message, m)
}

handler.customPrefix = /^(pp|p|bot|zy)$/i
handler.command = new RegExp

export default handler
