const fs = require('fs'),
      // clipboardy = require('clipboardy'),
      data = require('./data.json'),
      print = console.log;

const emojiList = `🦑 1 Tesalonika 3-5, 2 Tesalonika 1-3 & 1 Timotius 1\n🐙 Filipi 4, Kolose 1-4 & 1 Tesalonika 1 - 2\n🦕 Efesus 3-6 dan Filipi 1-3`,
newEmoji = `🦐 1 Timotius 2-6 & 2 Timotius 1-2`,
emojiLimit = `Filipi 3`,
time = `23:38 WIB`,
date = `Rabu, 8 Agustus 2018`,
status = `FINAl`;

let middleStr = "";
for (var i = 0; i < data.length; i++) {
  middleStr += `${data[i].num}. ${data[i].name} ${data[i].emoji}\n`;
}

switch (process.argv[2]) {
  case '-r':
    let finalStr = `
"""REKAP ${status}"""

⏰: ${time}

🗓: ${date}
📖: ${newEmoji}

Gerakan BAPA Putaran Ke-2
Baca Alkitab (bersama) Pak Ahok

Semangat mengejar pembacaan bagi Sobat BAPA yang masih berstiker :
${emojiList}*

Sobat BAPA yang sudah membaca: 

${middleStr}
Setelah membaca Firman Tuhan, biasakan berdoa, mengucap syukur dan memohon perlindungan Tuhan untuk
1. Bangsa dan NKRI
2. Keluarga dan orang terkasih kita
3. Pak Ahok dan keluarga.

NOTE:
Tolong diperiksa.
Bagi rekan yg belum berganti stiker kami tunggu laporan pembacaannya ya. 
*Bagi yang belum mencapai pembacaan ${emojiLimit}, tidak akan admin absen semoga bisa cepat mengejar.


Terima kasih bagi Sobat-Sobat yang semangat dalam gerakan moral ini.

Tuhan memberkati😇`
    
    print(finalStr);

    // clipboardy.writeSync(final);
    // clipboardy.readSync();
    break;
  case '-w':
    const id = process.argv[3].split(','),
    replace = process.argv[4];

    for (var i = 0; i < id.length; i++) {
      searchAndReplace(id[i], replace)
    }

    fs.writeFileSync('./data.json', JSON.stringify(data))
    print('Succesfully written.')
    break;
  default:
    print('give me an option smh')
}

function searchAndReplace(num, string) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].num == num) {
      data[i].emoji = string;
    }
  }
}
