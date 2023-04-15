let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender];
  let pasangan = global.db.data.users[user.pasangan];

  if (!pasangan) {
    return conn.reply(m.chat, `Anda tidak memiliki pasangan.`, m);
  }

  conn.reply(m.chat, `Berhasil putus hubungan dengan @${pasangan.name}`, m, {
    contextInfo: { mentionedJid: [pasangan.jid] }
  });

  user.pasangan = "";
  pasangan.pasangan = "";
}

handler.help = ['putus']
handler.tags = ['fun']
handler.command = /^(putus)$/i
handler.group = true
handler.limit = true

export default handler
