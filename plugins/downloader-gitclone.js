import fs from 'fs'
import fetch from 'node-fetch'

const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i

let handler = async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `Example use: ${usedPrefix}gitclone https://github.com/Hyuura-Official/YushinoMdV2`
    if (!regex.test(args[0])) throw 'Invalid link!'
    let [_, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    
    await conn.sendFile(m.chat, url, filename, `Repository is being processed...`, m)
}

handler.help = ['gitclone'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /gitclone/i
handler.limit = true
export default handler
