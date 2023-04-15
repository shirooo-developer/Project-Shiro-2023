let handler = async (m, { conn, args, usedPrefix }) => {
  if (args.length > 0) {
    let mention = args[0].replace(/[@.+-]/g, '').replace(' ', '')
    let ban = m.mentionedJid[0] || m.quoted.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    let warning = global.db.data.users[ban]?.warning ?? 0
    if (warning < 3) {
      global.db.data.users[ban].warning += 1
      m.reply(`*Berhasil Warn!*`)
      m.reply(`Kamu diwarn oleh moderator, dan sekarang kamu punya ${warning + 1} warn. Ingat, jika kamu mendapatkan warn 4 kali kamu akan otomatis dibanned.`)
    } else if (warning == 3) {
      global.db.data.users[ban].banned = true
      global.db.data.users[ban].warning = 0
      m.reply(`*Dia sudah kebanned, karena mendapatkan 4 warn*`)
    }
  } else {
    conn.reply(m.chat, '*Siapa yang mau diwarn?*', m)
  }
}

handler.help = ['warn @tag']
handler.tags = ['owner', 'moderator']
handler.command = /^warn$/i
handler.mods = true

export default handler