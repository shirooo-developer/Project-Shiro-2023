import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
    let res = await fetch('https://candaan-api-h590oa540-ardhptr21.vercel.app/api/image/random')
    if (!res.ok) throw await res.text()
    let json = await res.json()        
    conn.sendFile(m.chat, json.data.url, 'meme.png', 'mim indo :v') 
}

handler.command = /^(meme)$/i
handler.tags = ['internet']
handler.help = ['meme']

export default handler