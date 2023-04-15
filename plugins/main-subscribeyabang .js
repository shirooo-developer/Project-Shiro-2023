import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
    let url = 'https://telegra.ph/file/c78b2ae0ccc5e2b355623.jpg'
    let caption = '*S U B S C R I B E* 😁\n\nHalo, saya Zyko MD! Jangan lupa subscribe ke channel YouTube ZykoBotz MD ya.\n\nKlik link di bawah ini untuk menuju channel: https://www.youtube.com/@zykobotz'

    conn.sendFile(m.chat, url, 'pp.jpg', caption, m)
}

handler.command = /^(zykomd|zy)$/i
handler.premium = false
handler.limit = true

export default handler
