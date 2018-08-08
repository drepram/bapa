const fs = require('fs'),
      data = require('./data.json'),
      print = console.log,
      id = process.argv[2].split(','),
      replace = process.argv[3];

let emojiList = `🐙 Filipi 4, Kolose 1-4 & 1 Tesalonika 1 - 2\n🦕 Efesus 3-6 dan Filipi 1-3`
newEmoji = `🦑 1 Tesalonika 3-5, 2 Tesalonika 1-3 & 1 Timotius 1`,
emojiLimit = `Filipi 3`,
time = `23:38 WIB`,
date = `Selasa, 7 Agustus 2018`,
status = `FINAl`;

function searchAndReplace(num, string) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].num == num) {
      data[i].emoji = string;
    }
  }
}

for (var i = 0; i < id.length; i++) {
  searchAndReplace(id[i], replace)
  // print(id[i])
}

// print(data)
let middleStr = "";
for (var i = 0; i < data.length; i++) {
  middleStr += `${data[i].num}. ${data[i].name} ${data[i].emoji}\n`;
}

fs.writeFileSync('./data.json', JSON.stringify(data))

print(`
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

Tuhan memberkati😇`)