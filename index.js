const fs = require('fs'),
      clipboardy = require('clipboardy'),
      data = require('./data.json'),
      print = console.log;

// MODIFY THIS STRINGS
const emojiList = `🦐 1 Timotius 2-6 & 2 Timotius 1-2\n🦑 1 Tesalonika 3-5, 2 Tesalonika 1-3 & 1 Timotius 1\n🐙 Filipi 4, Kolose 1-4 & 1 Tesalonika 1 - 2\n🦕 Efesus 3-6 dan Filipi 1-3`,
newEmoji = `🦀 2 Timotius 3-4 & Titus 1-3 & Filemon 1 & Ibrani 1`,
emojiLimit = `Filipi 3`,
time = `10:11 WIB`,
date = `Kamis, 9 Agustus 2018`,
status = `SEMENTARA`;

// Rewrite data from JSON properties into strings
let middleStr = "";
for (var i = 0; i < data.length; i++) {
  middleStr += `${data[i].num}. ${data[i].name} ${data[i].emoji}\n`;
}

// Decide whether to read or to write
switch (process.argv[2]) {
  case '-r':
    let finalStr = `"""REKAP ${status}"""

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

    // Copy the string
    clipboardy.writeSync(finalStr);
    clipboardy.readSync();

    fs.writeFileSync('./texts/REKAP', finalStr)
    break;
  case '-w':
    // Listing all the person's emoji's that needs to be changed
    const id = process.argv[3].split(','),
    // Getting the replacement string
    replace = process.argv[4];

    // Replacing the emojis one-by-one
    for (var i = 0; i < id.length; i++) {
      searchAndReplace(id[i], replace)
    }

    // Updates the json files
    fs.writeFileSync('./data.json', JSON.stringify(data))
    print('Succesfully written.')
    break;
  default:
    print('give me an option smh')
    // #nocommentsneeded
    // yes, i'm that lame.
}

function searchAndReplace(personId, replacement) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].num == personId) {
      data[i].emoji = replacement;
    }
  }
}