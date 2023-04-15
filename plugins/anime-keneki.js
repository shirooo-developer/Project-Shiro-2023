import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.ibeng.tech/api/wallpaper/keneki?apikey=tamvan'
	try {
		let response = await fetch(url)
		let buffer = await response.buffer()
		conn.sendFile(m.chat, buffer, null, `${command}`, m)
	} catch (err) {
		console.log(err)
		throw `Gagal mengambil gambar dari ${url}`
	}
}
handler.command = /^(keneki)$/i
handler.tags = ['anime']
handler.help = ['keneki']
handler.premium = false
handler.limit = true

export default handler