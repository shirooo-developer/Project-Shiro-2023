import { createHash } from 'crypto'
import qrcode from 'qrcode'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { conn, text, usedPrefix }) {
  let sn = createHash('md5').update(m.sender).digest('hex')
  let caption = `*📮 SN:* ${sn}`

  let qrcodeDataUrl = await qrcode.toDataURL(sn)
  conn.sendFile(m.chat, qrcodeDataUrl, 'qrcode.png', caption, m)
}

handler.help = ['ceksn']
handler.tags = ['xp']
handler.command = /^(ceksn)$/i
handler.register = true
export default handler
