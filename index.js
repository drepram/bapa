const fs = require('fs'),
      clipboardy = require('clipboardy'),
      data = require('./data.json'),
      print = console.log;

// MODIFY THIS STRINGS
const emoji = `✅ Matius 21-25`,
time = `21:15 WIB`,
date = `Senin, 27 Agustus 2018`,
status = `FINAL`,
reminderText = `Matius 26-28 & Markus 1-2`;

// Rewrite data from JSON properties into strings
let middleStr = "";
for (var i = 0; i < data.length; i++) {
  middleStr += `${data[i].num}. ${data[i].name} ${data[i].emoji}\n`;
}

// Decide whether to read or to write
switch (process.argv[2]) {
  case '-r':
    let rekapStr = `"""REKAP ${status}"""

⏰: ${time}

🗓: ${date}
📖: ${emoji}

*Gerakan BAPA Putaran Ke-3*
*Baca Alkitab (bersama) Pak Ahok*

Sobat BAPA yang sudah membaca 5 pasal hari ini: 

${middleStr}
*Pasal yang BESOK akan kita baca:*
📖 *${reminderText}*

Cara melapor pembacaan: 
(Nomor) (Nama) (Pasal yang telah selesai dibaca) 
Contoh:
2. Christie, Matius 1-5 

Setelah membaca Firman Tuhan, biasakan berdoa, mengucap syukur dan memohon perlindungan Tuhan untuk
1. Bangsa dan NKRI
2. Keluarga dan orang terkasih kita
3. Pak Ahok dan keluarga.

NOTE:
Tolong diperiksa.
Bagi rekan yg belum berganti stiker kami tunggu laporan pembacaannya ya. .

Terima kasih bagi Sobat-Sobat yang semangat dalam gerakan moral ini.

Tuhan memberkati😇`

    // Copy the string
    clipboardy.writeSync(rekapStr);
    clipboardy.readSync();
    break;
  case '-w':
    // Listing all the person's emoji's that needs to be changed
    const id = process.argv[3].split(','),
    replace = '✅';

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
