let handler = async (m, { conn }) => {
   let text = `*FITUR BOTZ:*
- *Sticker Maker* : ketik *'.sticker'* untuk membuat sticker.
- *Facebook Downloader* : ketik *'.facebook'* untuk download video dari Facebook.
- *TikTok Downloader* : ketik *'.tiktok'* untuk download video dari TikTok.
- *All Commands* : ketik *'.all'* untuk melihat semua command Botz.
- *Owner* : ketik *'.owner'* bila ada keperluan/dan tidak paham cara memakai Botz.

*CARA MENGGUNAKAN:*
Ketik command yang sesuai pada chat dengan Botz.

*CATATAN:*
- Pastikan untuk mengirimkan pesan ke Botz dalam bentuk teks atau caption.
- Beberapa fitur memerlukan tautan untuk diunduh, sehingga pastikan Anda mengirim tautan dengan benar.

Jangan ragu untuk bertanya pada Owner Botz jika Anda mengalami kesulitan atau memiliki pertanyaan lebih lanjut.

Terima kasih telah menggunakan Botz!`
  
  return conn.reply(m.chat, text, m)
}

handler.help = ['help']
handler.tags = ['info', 'main']
handler.command = /^help$/i

export default handler
