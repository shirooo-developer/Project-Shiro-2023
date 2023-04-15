import fs from 'fs';
const handler = async (m, { conn, args, command }) => {
  const totalFeatures = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
  const randomImage = hwaifu.getRandom();  
  const caption = `Total Fitur Bot Saat ini: ${totalFeatures}\n`;

  conn.sendFile(m.chat, randomImage, null, caption);
};

handler.help = ['totalfitur'];
handler.tags = ['info'];
handler.command = ['totalfitur'];
export default handler;