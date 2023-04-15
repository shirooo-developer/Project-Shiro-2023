let handler = async (m, { conn, command }) => {
  // daftar jadwal pertandingan
  let jadwal = [
    {
      kickoff: 'Real Madrid vs Barcelona',
      waktu: '04/04/2023 20:00',
      channel: 'beIN Sports'
    },
    {
      kickoff: 'Manchester City vs Liverpool',
      waktu: '05/04/2023 19:30',
      channel: 'Mola TV'
    },
    {
      kickoff: 'Paris Saint-Germain vs Bayern Munchen',
      waktu: '06/04/2023 20:00',
      channel: 'Star Sports'
    },
    {
      kickoff: 'Chelsea vs Manchester United',
      waktu: '07/04/2023 20:00',
      channel: 'Super Soccer'
    },
    {
      kickoff: 'Juventus vs AC Milan',
      waktu: '08/04/2023 19:30',
      channel: 'RCTI'
    }
  ];

  let jadwalStr = `*JADWAL BOLA*\n\n`;
  for (let i = 0; i < jadwal.length; i++) {
    let j = jadwal[i];
    jadwalStr += `_${j.kickoff}_\n`;
    jadwalStr += `Waktu: ${j.waktu}\n`;
    jadwalStr += `Channel tv: ${j.channel}\n\n`;
  }

  m.reply(jadwalStr);
}
handler.help = ['jadwalbola']
handler.tags = ['internet']
handler.command = /^jadwalbola$/i

export default handler;
