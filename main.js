window.jumlahPembaca = 0

let daftarPengikut = [{nomorUrut: 1,
  pembaca: 'Mercy Sihombing - 54 - Jakarta',
  apakahSudahMembaca: '✅'},
  {nomorUrut: 2,
  pembaca: 'Christie Kirana - 23 - Jakarta',
  apakahSudahMembaca: '✅'},
  {nomorUrut: 3,
  pembaca: 'Andre Pramaditya - 18 - Jakarta',
  apakahSudahMembaca: '✅'},
  {nomorUrut: 4,
  pembaca: 'Maria Sie - 58 - Sidoarjo',
  apakahSudahMembaca: ''},
  {nomorUrut: 5,
  pembaca: 'Ronny Wisnhurendra - 47 - Jakarta',
  apakahSudahMembaca: ''},
  {nomorUrut: 6,
  pembaca: 'Tina Silitonga - 57 - Cijantung',
  apakahSudahMembaca: ''},
  {nomorUrut: 7,
  pembaca: 'Jenny Tambunan - 61 - Jakarta',
  apakahSudahMembaca: ''},
  {nomorUrut: 8,
  pembaca: 'Calleshia Yohanes - 48 - Semarang',
  apakahSudahMembaca: ''},
  {nomorUrut: 9,
  pembaca: 'Sorta Gultom - 53 - Bekasi',
  apakahSudahMembaca: ''},
  {nomorUrut: 10,
  pembaca: 'Irene F Mongkar - 60 - Tangerang',
  apakahSudahMembaca: ''},
  {nomorUrut: 11,
  pembaca: 'Jenny Marianty - 48 - Yogyakarta',
  apakahSudahMembaca: ''},
  {nomorUrut: 12,
  pembaca: 'Yunita Suyanto - 56 - Banjarnegara',
  apakahSudahMembaca: ''},
  {nomorUrut: 13,
  pembaca: 'Ming Kolasa - 43 - Jakarta',
  apakahSudahMembaca: ''},
  {nomorUrut: 14,
  pembaca: 'Teguh Wibowo - 54 - Jepara',
  apakahSudahMembaca: ''},
  {nomorUrut: 15,
  pembaca: 'Lungguk Limbong - 65 - Florida',
  apakahSudahMembaca: ''},
  {nomorUrut: 16,
  pembaca: 'Ivony Wisanto - 59 - Yogyakarta',
  apakahSudahMembaca: ''},
  {nomorUrut: 17,
  pembaca: 'Lisana Halim - 51 - Kediri',
  apakahSudahMembaca: ''},
  {nomorUrut: 18,
  pembaca: 'Martha Tan - 62- Banjarnegara',
  apakahSudahMembaca: ''},
  {nomorUrut: 19,
  pembaca: 'Olwin Lepiana Silalahi - 52 - Depok',
  apakahSudahMembaca: ''},
  {nomorUrut: 20,
  pembaca: 'Hotmaria Simanjuntak - 43 - Jakarta',
  apakahSudahMembaca: ''},
  {nomorUrut: 21,
  pembaca: 'Hermanto R. - 59 - Tangerang',
  apakahSudahMembaca: ''},
  {nomorUrut: 22,
  pembaca: 'Maria Siagian - 62 - Tangerang Selatan',
  apakahSudahMembaca: ''},
  {nomorUrut: 23,
  pembaca: 'Fransiska - 59 - Jakarta',
  apakahSudahMembaca: ''},
  {nomorUrut: 24,
  pembaca: 'Dedi L. Sihite - 37 - Tanjung Priok',
  apakahSudahMembaca: ''},
  {nomorUrut: 25,
  pembaca: 'Eva Pangau - 51 - Bekasi',
  apakahSudahMembaca: ''},
  {nomorUrut: 26,
  pembaca: 'Olyvia - 60 - Yogyakarta',
  apakahSudahMembaca: ''},
  {nomorUrut: 27,
  pembaca: 'Ellen Jacob.S - 62 - Ambon',
  apakahSudahMembaca: ''},
  {nomorUrut: 28,
  pembaca: 'Ais Natalis - 57 - Jakarta',
  apakahSudahMembaca: ''},
  {nomorUrut: 29,
  pembaca: 'Veebe - 55 - Jakarta',
  apakahSudahMembaca: ''},
  {nomorUrut: 30,
  pembaca: 'Nurma Sianturi - 31 - Bekasi',
  apakahSudahMembaca: ''},
  {nomorUrut: 31,
  pembaca: 'Ribka Ginting - 49 - Medan',
  apakahSudahMembaca: ''}]

const pasalHarian = {
  '17-03-2022': 'Matius 1-5',
  '18-03-2022': 'Matius 6-10',
  '19-03-2022': 'Matius 11-15',
  '20-03-2022': 'Matius 16-20',
  '21-03-2022': 'Matius 21-25',
  '22-03-2022': 'Matius 26-28, Markus 1-2',
  '23-03-2022': 'Markus 3-7',
  '24-03-2022': 'Markus 8-12',
  '25-03-2022': 'Markus 13-16, Lukas 1',
  '26-03-2022': 'Lukas 2-6',
  '27-03-2022': 'Lukas 7-11',
  '28-03-2022': 'Lukas 12-16',
  '29-03-2022': 'Lukas 17-21',
  '30-03-2022': 'Lukas 22-24, Yohanes 1-2',
  '31-03-2022': 'Yohanes 3-7',
  '01-04-2022': 'Yohanes 8-12',
  '02-04-2022': 'Yohanes 13-17',
  '03-04-2022': 'Yohanes 18-21, Kisah Para Rasul 1',
  '04-04-2022': 'Kisah Para Rasul 2-6',
  '05-04-2022': 'Kisah Para Rasul 7-11',
  '06-04-2022': 'Kisah Para Rasul 12-16',
  '07-04-2022': 'Kisah Para Rasul 17-21',
  '08-04-2022': 'Kisah Para Rasul 22-26',
  '09-04-2022': 'Kisah Para Rasul 27-28, Roma 1-3',
  '10-04-2022': 'Roma 4-8',
  '11-04-2022': 'Roma 9-13',
  '12-04-2022': 'Roma 14-16, 1 Korintus 1-2',
  '13-04-2022': '1 Korintus 3-7',
  '14-04-2022': '1 Korintus 8-12',
  '15-04-2022': '1 Korintus 13-16, 2 Korintus 1',
  '16-04-2022': '2 Korintus 2-6',
  '17-04-2022': '2 Korintus 7-11',
  '18-04-2022': '2 Korintus 12-13, Galatia 1-3',
  '19-04-2022': 'Galatia 4-6, Efesus 1-2',
  '20-04-2022': 'Efesus 3-6, Filipi 1',
  '21-04-2022': 'Filipi 2-4, Kolose 1-2',
  '22-04-2022': 'Kolose 3-4, 1 Tesalonika 1-3',
  '23-04-2022': '1 Tesalonika 4-5, 2 Tesalonika 1-3',
  '24-04-2022': '1 Timotius 1-5',
  '25-04-2022': '1 Timotius 6-6, 2 Timotius 1-4',
  '26-04-2022': 'Titus 1-3, Filemon 1, Ibrani 1',
  '27-04-2022': 'Ibrani 2-6',
  '28-04-2022': 'Ibrani 7-11',
  '29-04-2022': 'Ibrani 12-13, Yakobus 1-3',
  '30-04-2022': 'Yakobus 4-5, 1 Petrus 1-3',
  '01-05-2022': '1 Petrus 4-5, 2 Petrus 1-3',
  '02-05-2022': '1 Yohanes 1-5',
  '03-05-2022': '2 Yohanes 1, 3 Yohanes 1, Yudas 1, Wahyu 1-2',
  '04-05-2022': 'Wahyu 3-7',
  '05-05-2022': 'Wahyu 8-12',
  '06-05-2022': 'Wahyu 13-17',
  '07-05-2022': 'Wahyu 18-22',
  '08-05-2022': 'Kejadian 1-5',
  '09-05-2022': 'Kejadian 6-10',
  '10-05-2022': 'Kejadian 11-15',
  '11-05-2022': 'Kejadian 16-20',
  '12-05-2022': 'Kejadian 21-25',
  '13-05-2022': 'Kejadian 26-30',
  '14-05-2022': 'Kejadian 31-35',
  '15-05-2022': 'Kejadian 36-40',
  '16-05-2022': 'Kejadian 41-45',
  '17-05-2022': 'Kejadian 46-50',
  '18-05-2022': 'Keluaran 1-5',
  '19-05-2022': 'Keluaran 6-10',
  '20-05-2022': 'Keluaran 11-15',
  '21-05-2022': 'Keluaran 16-20',
  '22-05-2022': 'Keluaran 21-25',
  '23-05-2022': 'Keluaran 26-30',
  '24-05-2022': 'Keluaran 31-35',
  '25-05-2022': 'Keluaran 36-40',
  '26-05-2022': 'Imamat 1-5',
  '27-05-2022': 'Imamat 6-10',
  '28-05-2022': 'Imamat 11-15',
  '29-05-2022': 'Imamat 16-20',
  '30-05-2022': 'Imamat 21-25',
  '31-05-2022': 'Imamat 26-27, Bilangan 1-3',
  '01-06-2022': 'Bilangan 4-8',
  '02-06-2022': 'Bilangan 9-13',
  '03-06-2022': 'Bilangan 14-18',
  '04-06-2022': 'Bilangan 19-23',
  '05-06-2022': 'Bilangan 24-28',
  '06-06-2022': 'Bilangan 29-33',
  '07-06-2022': 'Bilangan 34-36, Ulangan 1-2',
  '08-06-2022': 'Ulangan 3-7',
  '09-06-2022': 'Ulangan 8-12',
  '10-06-2022': 'Ulangan 13-17',
  '11-06-2022': 'Ulangan 18-22',
  '12-06-2022': 'Ulangan 23-27',
  '13-06-2022': 'Ulangan 28-32',
  '14-06-2022': 'Ulangan 33-34, Yosua 1-3',
  '15-06-2022': 'Yosua 4-8',
  '16-06-2022': 'Yosua 9-13',
  '17-06-2022': 'Yosua 14-18',
  '18-06-2022': 'Yosua 19-23',
  '19-06-2022': 'Yosua 24-24, Hakim-hakim 1-4',
  '20-06-2022': 'Hakim-hakim 5-9',
  '21-06-2022': 'Hakim-hakim 10-14',
  '22-06-2022': 'Hakim-hakim 15-19',
  '23-06-2022': 'Hakim-hakim 20-21, Rut 1-3',
  '24-06-2022': 'Rut 4-4, 1 Samuel 1-4',
  '25-06-2022': '1 Samuel 5-9',
  '26-06-2022': '1 Samuel 10-14',
  '27-06-2022': '1 Samuel 15-19',
  '28-06-2022': '1 Samuel 20-24',
  '29-06-2022': '1 Samuel 25-29',
  '30-06-2022': '1 Samuel 30-31, 2 Samuel 1-3',
  '01-07-2022': '2 Samuel 4-8',
  '02-07-2022': '2 Samuel 9-13',
  '03-07-2022': '2 Samuel 14-18',
  '04-07-2022': '2 Samuel 19-23',
  '05-07-2022': '2 Samuel 24-24, 1 Raja-raja 1-4',
  '06-07-2022': '1 Raja-raja 5-9',
  '07-07-2022': '1 Raja-raja 10-14',
  '08-07-2022': '1 Raja-raja 15-19',
  '09-07-2022': '1 Raja-raja 20-22, 2 Raja-raja 1-2',
  '10-07-2022': '2 Raja-raja 3-7',
  '11-07-2022': '2 Raja-raja 8-12',
  '12-07-2022': '2 Raja-raja 13-17',
  '13-07-2022': '2 Raja-raja 18-22',
  '14-07-2022': '2 Raja-raja 23-25, 1 Tawarikh 1-2',
  '15-07-2022': '1 Tawarikh 3-7',
  '16-07-2022': '1 Tawarikh 8-12',
  '17-07-2022': '1 Tawarikh 13-17',
  '18-07-2022': '1 Tawarikh 18-22',
  '19-07-2022': '1 Tawarikh 23-27',
  '20-07-2022': '1 Tawarikh 28-29, 2 Tawarikh 1-3',
  '21-07-2022': '2 Tawarikh 4-8',
  '22-07-2022': '2 Tawarikh 9-13',
  '23-07-2022': '2 Tawarikh 14-18',
  '24-07-2022': '2 Tawarikh 19-23',
  '25-07-2022': '2 Tawarikh 24-28',
  '26-07-2022': '2 Tawarikh 29-33',
  '27-07-2022': '2 Tawarikh 34-36, Ezra 1-2',
  '28-07-2022': 'Ezra 3-7',
  '29-07-2022': 'Ezra 8-10, Nehemia 1-2',
  '30-07-2022': 'Nehemia 3-7',
  '31-07-2022': 'Nehemia 8-12',
  '01-08-2022': 'Nehemia 13-13, Ester 1-4',
  '02-08-2022': 'Ester 5-9',
  '03-08-2022': 'Ester 10-10, Ayub 1-4',
  '04-08-2022': 'Ayub 5-9',
  '05-08-2022': 'Ayub 10-14',
  '06-08-2022': 'Ayub 15-19',
  '07-08-2022': 'Ayub 20-24',
  '08-08-2022': 'Ayub 25-29',
  '09-08-2022': 'Ayub 30-34',
  '10-08-2022': 'Ayub 35-39',
  '11-08-2022': 'Ayub 40-42, Mazmur 1-2',
  '12-08-2022': 'Mazmur 3-7',
  '13-08-2022': 'Mazmur 8-12',
  '14-08-2022': 'Mazmur 13-17',
  '15-08-2022': 'Mazmur 18-22',
  '16-08-2022': 'Mazmur 23-27',
  '17-08-2022': 'Mazmur 28-32',
  '18-08-2022': 'Mazmur 33-37',
  '19-08-2022': 'Mazmur 38-42',
  '20-08-2022': 'Mazmur 43-47',
  '21-08-2022': 'Mazmur 48-52',
  '22-08-2022': 'Mazmur 53-57',
  '23-08-2022': 'Mazmur 58-62',
  '24-08-2022': 'Mazmur 63-67',
  '25-08-2022': 'Mazmur 68-72',
  '26-08-2022': 'Mazmur 73-77',
  '27-08-2022': 'Mazmur 78-82',
  '28-08-2022': 'Mazmur 83-87',
  '29-08-2022': 'Mazmur 88-92',
  '30-08-2022': 'Mazmur 93-97',
  '31-08-2022': 'Mazmur 98-102',
  '01-09-2022': 'Mazmur 103-107',
  '02-09-2022': 'Mazmur 108-112',
  '03-09-2022': 'Mazmur 113-117',
  '04-09-2022': 'Mazmur 118-122',
  '05-09-2022': 'Mazmur 123-127',
  '06-09-2022': 'Mazmur 128-132',
  '07-09-2022': 'Mazmur 133-137',
  '08-09-2022': 'Mazmur 138-142',
  '09-09-2022': 'Mazmur 143-147',
  '10-09-2022': 'Mazmur 148-150, Amsal 1-2',
  '11-09-2022': 'Amsal 3-7',
  '12-09-2022': 'Amsal 8-12',
  '13-09-2022': 'Amsal 13-17',
  '14-09-2022': 'Amsal 18-22',
  '15-09-2022': 'Amsal 23-27',
  '16-09-2022': 'Amsal 28-31, Pengkhotbah 1',
  '17-09-2022': 'Pengkhotbah 2-6',
  '18-09-2022': 'Pengkhotbah 7-11',
  '19-09-2022': 'Pengkhotbah 12-12, Kidung Agung 1-4',
  '20-09-2022': 'Kidung Agung 5-8, Yesaya 1',
  '21-09-2022': 'Yesaya 2-6',
  '22-09-2022': 'Yesaya 7-11',
  '23-09-2022': 'Yesaya 12-16',
  '24-09-2022': 'Yesaya 17-21',
  '25-09-2022': 'Yesaya 22-26',
  '26-09-2022': 'Yesaya 27-31',
  '27-09-2022': 'Yesaya 32-36',
  '28-09-2022': 'Yesaya 37-41',
  '29-09-2022': 'Yesaya 42-46',
  '30-09-2022': 'Yesaya 47-51',
  '01-10-2022': 'Yesaya 52-56',
  '02-10-2022': 'Yesaya 57-61',
  '03-10-2022': 'Yesaya 62-66',
  '04-10-2022': 'Yeremia 1-5',
  '05-10-2022': 'Yeremia 6-10',
  '06-10-2022': 'Yeremia 11-15',
  '07-10-2022': 'Yeremia 16-20',
  '08-10-2022': 'Yeremia 21-25',
  '09-10-2022': 'Yeremia 26-30',
  '10-10-2022': 'Yeremia 31-35',
  '11-10-2022': 'Yeremia 36-40',
  '12-10-2022': 'Yeremia 41-45',
  '13-10-2022': 'Yeremia 46-50',
  '14-10-2022': 'Yeremia 51-52, Ratapan 1-3',
  '15-10-2022': 'Ratapan 4-5, Yehezkiel 1-3',
  '16-10-2022': 'Yehezkiel 4-8',
  '17-10-2022': 'Yehezkiel 9-13',
  '18-10-2022': 'Yehezkiel 14-18',
  '19-10-2022': 'Yehezkiel 19-23',
  '20-10-2022': 'Yehezkiel 24-28',
  '21-10-2022': 'Yehezkiel 29-33',
  '22-10-2022': 'Yehezkiel 34-38',
  '23-10-2022': 'Yehezkiel 39-43',
  '24-10-2022': 'Yehezkiel 44-48',
  '25-10-2022': 'Daniel 1-5',
  '26-10-2022': 'Daniel 6-10',
  '27-10-2022': 'Daniel 11-12, Hosea 1-3',
  '28-10-2022': 'Hosea 4-8',
  '29-10-2022': 'Hosea 9-13',
  '30-10-2022': 'Hosea 14-14, Yoel 1-3, Amos 1',
  '31-10-2022': 'Amos 2-6',
  '01-11-2022': 'Amos 7-9, Obaja 1, Yunus 1',
  '02-11-2022': 'Yunus 2-4, Mikha 1-2',
  '03-11-2022': 'Mikha 3-7',
  '04-11-2022': 'Nahum 1-3, Habakuk 1-2',
  '05-11-2022': 'Habakuk 3-3, Zefanya 1-3, Hagai 1',
  '06-11-2022': 'Hagai 2-2, Zakharia 1-4',
  '07-11-2022': 'Zakharia 5-9',
  '08-11-2022': 'Zakharia 10-14',
  '09-11-2022': 'Maleakhi 1-4'
}

window.addEventListener('load', function () {
  UpUp.start({
    'content': '🌐🚫'
  });
})

function pelaksanaanPenyortiran () {
  let pelaporHariIni = document.querySelector('#daftar-pembaca').value.split(',')
  let banyakPembacaHariIni = document.querySelector('#daftar-pembaca').value.split(',').length

  document.querySelector('#pelapor').innerHTML = `Banyak Pelapor Hari Ini - ${banyakPembacaHariIni}`

  tandaiPembaca(pelaporHariIni)
  hasilkanParagrafRekap()
}

function tandaiPembaca (nomorNomorUrut, tandaPembacaan = '✅') {
  for (var i = 0; i < nomorNomorUrut.length; i++) {
    cariProfilPelapor(nomorNomorUrut[i], tandaPembacaan) // Memutasikan properti apakahSudahMembacas dengan tanda ✅
  }
}

function cariProfilPelapor (nomorUrut, tandaPembacaan) {
  for (var i = 0; i < daftarPengikut.length; i++) {
    if (daftarPengikut[i].nomorUrut == nomorUrut) {
      daftarPengikut[i].apakahSudahMembaca = tandaPembacaan
    }
  }
}

function hasilkanParagrafRekap () {
  let paragrafTengah = ''
  let ayat = document.querySelector('#pasal-hari-ini').value
  let waktu = document.querySelector('#waktu-jam-menit').value
  let tanggal = document.querySelector('#waktu-hari-tanggal').value
  let besok = document.querySelector('#pasal-untuk-besok').value
  let status = document.querySelector('#status-rekap').value

  for (var i = 0; i < daftarPengikut.length; i++) {
    paragrafTengah += ((i+1) !== daftarPengikut.length) ? `${("0" + daftarPengikut[i].nomorUrut).slice(-2)}. ${daftarPengikut[i].pembaca} ${daftarPengikut[i].apakahSudahMembaca}\n` : `${daftarPengikut[i].nomorUrut}. ${daftarPengikut[i].pembaca} ${daftarPengikut[i].apakahSudahMembaca}`
  }

  let rekapStr = `"""REKAP ${status}"""

⏰: ${waktu} WIB

🗓: ${tanggal}
📖: ✅ ${ayat}

*Gerakan BAPA cq BATYK Putaran Ke-8*
*Baca Alkitab (bersama) Tuhan Yesus Kristus*

Sobat BAPA yang sudah membaca 5 pasal hari ini: 
${'```'}
${paragrafTengah}
${'```'}
*Pasal yang BESOK akan kita baca:*
📖 *${besok}*

Cara melapor pembacaan: 
Nomor absen
Nama (nama depan dan nama keluarga, bila ada)
Kota (domisili, tempat tinggal)
Pasal yang dibaca (lengkapi tanda centang ✅)

Contoh:
2. Christie, Jakarta, Matius 1-5 ✅

Setelah membaca Firman Tuhan, biasakan berdoa, mengucap syukur dan memohon perlindungan Tuhan untuk
1. Bangsa dan NKRI
2. Keluarga dan orang terkasih kita
3. Kota tempat kita tinggal

NOTE:
Tolong diperiksa.
Bagi rekan yang belum diabsen, kami tunggu laporan  pembacaannya ya.

Terima kasih bagi Sobat-Sobat yang terus semangat dalam gerakan moral ini.

Tuhan memberkati😇`

  document.querySelector('#hasil-rekap').innerHTML = rekapStr
}

function regexKalimat () {
  let kalimat = document.querySelector('#teks-rekap-sekarang').value
  let setiapKalimat = kalimat.split(': ')
  let regex = /^\d+/
  let kalimatKalimat = []
  let pembacaHariIni = []

  setiapKalimat.forEach(element => {
    kalimatKalimat.push(element)
  })

  kalimatKalimat.shift()

  kalimatKalimat.forEach(element => {
    let string = element.toString().split('\n')
    let res = string[0].match(regex)
    if (res === null) {
      document.querySelector('#teks-rekap-yang-tidak-terdeteksi').value += `${string}\n`
      if (string.length > 2) {
        if (string[1].split('.')[0] == 46) {
          pembacaHariIni.push(parseInt(string[1].split('.')[0]))
        }
        if (string[1].split('.')[0] == 42) {
          pembacaHariIni.push(parseInt(string[1].split('.')[0]))
        }
      }
      return false
    } else {
      switch (res) {
        case '01':
          res[0] = parseInt('1')
          pembacaHariIni.push(res[0])
          break
        case '02':
          res[0] = parseInt('2')
          pembacaHariIni.push(res[0])
          break
        case '03':
          res[0] = parseInt('3')
          pembacaHariIni.push(res[0])
          break
        case '04':
          res[0] = parseInt('4')
          pembacaHariIni.push(res[0])
          break
        case '05':
          res[0] = parseInt('5')
          pembacaHariIni.push(res[0])
          break
        case '06':
          res[0] = parseInt('6')
          pembacaHariIni.push(res[0])
          break
        case '07':
          res[0] = parseInt('7')
          pembacaHariIni.push(res[0])
          break
        case '08':
          res[0] = parseInt('8')
          pembacaHariIni.push(res[0])
          break
        case '09':
          res[0] = parseInt('9')
          pembacaHariIni.push(res[0])
          break
        default:
          res[0] = parseInt(res[0])
          pembacaHariIni.push(res[0])
      }
    }
  })

  window.jumlahPembaca += pembacaHariIni.length

  document.querySelector('#daftar-pembaca').value += `${pembacaHariIni},`
  document.querySelector('#pelapor').innerHTML = `Banyak Pelapor Hari Ini - ${window.jumlahPembaca}`

  // Jika zona waktu di Jakarta masih subuh (kurang dari jam 9 pagi)
  // akan secara otomatis mengambil hari kemarin sebagai waktu
  if (moment().tz('Asia/Jakarta').format('H') < 9) dapatkanPasalKemarin()
  else dapatkanPasal()

  pelaksanaanPenyortiran()
}

function ekstrakTeksSebelumnya () {
  let teksSebelumnya = document.querySelector('#teks-rekap-sebelumnya').value
  let pembacaHariIni = []

  teksSebelumnya = teksSebelumnya.split('\n') // String diubah menjadi array, setiap ada baris baru, menjadi elemen baru di array
  teksSebelumnya = teksSebelumnya.slice(12, 77) // Memotong teks sehingga hanya bagian Sobat Pembaca yang tersisa

  teksSebelumnya.forEach((item, index) => {
    if (item.split('✅').length == 2) {
      pembacaHariIni.push(item.split('. ')[0])
    }
  })

  pembacaHariIni.join(',') // Mengubah array menjadi string dengan tanda koma sebagai pemisah
  window.jumlahPembaca += pembacaHariIni.length

  document.querySelector('#daftar-pembaca').value += `${pembacaHariIni},`
  document.querySelector('#pelapor').innerHTML = `Banyak Pelapor Hari Ini - ${window.jumlahPembaca}`

  // Jika zona waktu di Jakarta masih subuh (kurang dari jam 9 pagi)
  // akan secara otomatis mengambil hari kemarin sebagai waktu
  if (moment().tz('Asia/Jakarta').format('H') < 9) dapatkanPasalKemarin()
  else dapatkanPasal()

  pelaksanaanPenyortiran()
}

function dapatkanWaktu () {
  let waktu = new Date()
  let hariHari = new Array(7)
  let bulanBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  let jamDanMenit = moment().tz('Asia/Jakarta').add(1, 'minute').format('HH:mm')

  hariHari[0] = 'Minggu'
  hariHari[1] = 'Senin'
  hariHari[2] = 'Selasa'
  hariHari[3] = 'Rabu'
  hariHari[4] = 'Kamis'
  hariHari[5] = 'Jumat'
  hariHari[6] = 'Sabtu'

  let hari = hariHari[waktu.getDay()] // Mengambil satu hari dari hari-hari
  let tanggal = String(waktu.getDate())
  let bulan = bulanBulan[waktu.getMonth()] // Mengambil satu bulan dari bulan-bulan
  let tahun = waktu.getFullYear()

  document.querySelector('#waktu-hari-tanggal').value = `${hari}, ${tanggal} ${bulan} ${tahun}`
  document.querySelector('#waktu-jam-menit').value = `${jamDanMenit}`
}

function dapatkanPasal () {
  let hariIni = moment().tz('Asia/Jakarta').format('DD-MM-YYYY')
  let hariBesok = moment().tz('Asia/Jakarta').add(1, 'day').format('DD-MM-YYYY')

  let pasalPadaHariIni = pasalHarian[hariIni]
  let pasalPadaHariBesok = pasalHarian[hariBesok]

  dapatkanWaktu()
  document.querySelector('#pasal-hari-ini').value = `${pasalPadaHariIni}`
  document.querySelector('#pasal-untuk-besok').value = `${pasalPadaHariBesok}`
}

function dapatkanHariKemarin () {
  let waktu = new Date()
  let hariHari = new Array(7)
  let bulanBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  let jamDanMenit = '23:59';

  hariHari[0] = 'Minggu'
  hariHari[1] = 'Senin'
  hariHari[2] = 'Selasa'
  hariHari[3] = 'Rabu'
  hariHari[4] = 'Kamis'
  hariHari[5] = 'Jumat'
  hariHari[6] = 'Sabtu'

  let hari = hariHari[waktu.getDay() == 0 ? 6 : waktu.getDay() - 1] // Mengambil satu hari dari hari-hari, jika index di array hariHari adalah 0, kembalikan ke index 6 karena 0-1 = undefined
  let tanggal = moment().tz('Asia/Jakarta').subtract(1, 'day').format('D')
  let bulan = bulanBulan[parseInt(moment().tz('Asia/Jakarta').subtract(1, 'day').format('M')) - 1] // Mengambil satu bulan dari bulan-bulan. Di array Januari = 0, tapi di Moment.js Januari = 1, maka data Moment.js harus kita kurangi 1 angka
  let tahun = moment().tz('Asia/Jakarta').subtract(1, 'day').format('YYYY')

  document.querySelector('#waktu-hari-tanggal').value = `${hari}, ${tanggal} ${bulan} ${tahun}`
  document.querySelector('#waktu-jam-menit').value = `${jamDanMenit}`
}

function dapatkanPasalKemarin () {
  let hariIni = moment().tz('Asia/Jakarta').subtract(1, 'day').format('DD-MM-YYYY')
  let hariBesok = moment().tz('Asia/Jakarta').format('DD-MM-YYYY')

  let pasalPadaHariIni = pasalHarian[hariIni]
  let pasalPadaHariBesok = pasalHarian[hariBesok]

  dapatkanHariKemarin()
  document.querySelector('#pasal-hari-ini').value = `${pasalPadaHariIni}`
  document.querySelector('#pasal-untuk-besok').value = `${pasalPadaHariBesok}`
}

(function () {
  function menambahkanAngkaKosong (i) {
    return (i < 10) ? `0${i}` : i
  }

  function waktuMulai () {
    let waktu = new Date()
    let jam = menambahkanAngkaKosong(waktu.getHours())
    let menit = menambahkanAngkaKosong(waktu.getMinutes())
    let detik = menambahkanAngkaKosong(waktu.getSeconds())

    document.querySelector('#waktu-pada-saat-ini').innerHTML = `${jam}:${menit}:${detik}`
    let timer = setTimeout(function () {
      waktuMulai()
    }, 500)
  }
  waktuMulai()
})()
