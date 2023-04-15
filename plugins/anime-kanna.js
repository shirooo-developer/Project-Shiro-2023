import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/kanna?apikey=ed78c137a46873c5b8e5fe3b'
/*    let kataanimesad = pickRandom(global.kataanine)
    let cap = `🐦Kataanimesad: ${kataanimesad}\n ${wm}`*/
	conn.sendFile(m.chat, await(await fetch(url)).buffer(), null, 'Nih kanna', m)
}
handler.command = /^(kanna)$/i
handler.tags = ['anime']
handler.help = ['kanna']
handler.limit = true
export default handler