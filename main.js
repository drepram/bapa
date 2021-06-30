window.jumlahPembaca = 0

let daftarPengikut = [
  {
    'nomorUrut': 1,
    'pembaca': 'Mercy Sihombing - Jakarta',
    'apakahSudahMembaca': '✅'
  },
  {
    'nomorUrut': 2,
    'pembaca': 'Christie Kirana - Jakarta',
    'apakahSudahMembaca': '✅'
  },
  {
    'nomorUrut': 3,
    'pembaca': 'Andre Pramaditya - Jakarta',
    'apakahSudahMembaca': '✅'
  },
  {
    'nomorUrut': 4,
    'pembaca': 'Jenny Tambunan - Jakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 5,
    'pembaca': 'Ronny - Jakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 6,
    'pembaca': 'Ais Natali - Jakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 7,
    'pembaca': 'Hermanto - Jakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 8,
    'pembaca': 'Yohan - Mojokerto',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 9,
    'pembaca': 'Calleshia Yohanes - Semarang',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 10,
    'pembaca': 'Martha Tan - Banjarnegara',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 11,
    'pembaca': 'Endang Pardede - Jakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 12,
    'pembaca': 'Lisana Halim - Kediri',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 13,
    'pembaca': 'Renova Siahaan - Jakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 14,
    'pembaca': 'Ming Kolasa - Jakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 15,
    'pembaca': 'Yunita Suyanto - Banjamegara',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 16,
    'pembaca': 'Nessy Napitupulu - Jakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 17,
    'pembaca': 'Olyvia - Yogyakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 18,
    'pembaca': 'Rosdina Sipayung - Bekasi',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 19,
    'pembaca': 'Maria Siagian - Tangerang Selatan',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 20,
    'pembaca': 'Maria Sie - Sidoarjo',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 21,
    'pembaca': 'Ellen Jacobs - Ambon',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 22,
    'pembaca': 'Irene F Mongkar - Tangerang',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 23,
    'pembaca': 'Fransiska - Jakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 24,
    'pembaca': 'Heppy Simbolon - Jakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 25,
    'pembaca': 'Pariyah Martin - Jakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 26,
    'pembaca': 'Hotmaria Simanjuntak - Jakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 27,
    'pembaca': 'Ida Lubis - Jakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 28,
    'pembaca': 'Dedi L Sihite - Jakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 29,
    'pembaca': 'Ivony - Yogyakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 30,
    'pembaca': 'Lucia EA Mogot - Jakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 31,
    'pembaca': 'Olwin Silalahi - Depok',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 32,
    'pembaca': 'Teguh Wibowo - Jepara',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 33,
    'pembaca': 'Tina Silitonga - Jakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 34,
    'pembaca': 'Sorta Gultom - Bekasi',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 35,
    'pembaca': 'Wiwiek Santoso - Semarang',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 36,
    'pembaca': 'Jenny - Yogyakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 37,
    'pembaca': 'Lungguk Nainggolan - USA',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 38,
    'pembaca': 'Endang Suteki - Depok',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 39,
    'pembaca': 'Livia - Tangerang',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 40,
    'pembaca': 'Dian Entoh - Jakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 41,
    'pembaca': 'Yohanes Kapoh - Jakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 42,
    'pembaca': 'Jevon Christian - Jakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 43,
    'pembaca': 'Eva Pangau - Bekasi',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 44,
    'pembaca': 'Vebe - Jakarta',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 45,
    'pembaca': 'Ika - Cileungsi',
    'apakahSudahMembaca': ''
  },
  {
    'nomorUrut': 46,
    'pembaca': 'Risna Sipahutar - P Siantar',
    'apakahSudahMembaca': ''
  }
]

const pasalHarian = {
  '30-06-2021': 'Matius 1-5',
  '01-07-2021': 'Matius 6-10',
  '02-07-2021': 'Matius 11-15',
  '03-07-2021': 'Matius 16-20',
  '04-07-2021': 'Matius 21-25',
  '05-07-2021': 'Matius 26-28, Markus 1-2',
  '06-07-2021': 'Markus 3-7',
  '07-07-2021': 'Markus 8-12',
  '08-07-2021': 'Markus 13-16, Lukas 1',
  '09-07-2021': 'Lukas 2-6',
  '10-07-2021': 'Lukas 7-11',
  '11-07-2021': 'Lukas 12-16',
  '12-07-2021': 'Lukas 17-21',
  '13-07-2021': 'Lukas 22-24, Yohanes 1-2',
  '14-07-2021': 'Yohanes 3-7',
  '15-07-2021': 'Yohanes 8-12',
  '16-07-2021': 'Yohanes 13-17',
  '17-07-2021': 'Yohanes 18-21, Kisah Para Rasul 1',
  '18-07-2021': 'Kisah Para Rasul 2-6',
  '19-07-2021': 'Kisah Para Rasul 7-11',
  '20-07-2021': 'Kisah Para Rasul 12-16',
  '21-07-2021': 'Kisah Para Rasul 17-21',
  '22-07-2021': 'Kisah Para Rasul 22-26',
  '23-07-2021': 'Kisah Para Rasul 27-28, Roma 1-3',
  '24-07-2021': 'Roma 4-8',
  '25-07-2021': 'Roma 9-13',
  '26-07-2021': 'Roma 14-16, 1 Korintus 1-2',
  '27-07-2021': '1 Korintus 3-7',
  '28-07-2021': '1 Korintus 8-12',
  '29-07-2021': '1 Korintus 13-16, 2 Korintus 1',
  '30-07-2021': '2 Korintus 2-6',
  '31-07-2021': '2 Korintus 7-11',
  '01-08-2021': '2 Korintus 12-13, Galatia 1-3',
  '02-08-2021': 'Galatia 4-6, Efesus 1-2',
  '03-08-2021': 'Efesus 3-6, Filipi 1',
  '04-08-2021': 'Filipi 2-4, Kolose 1-2',
  '05-08-2021': 'Kolose 3-4, 1 Tesalonika 1-3',
  '06-08-2021': '1 Tesalonika 4-5, 2 Tesalonika 1-3',
  '07-08-2021': '1 Timotius 1-5',
  '08-08-2021': '1 Timotius 6-6, 2 Timotius 1-4',
  '09-08-2021': 'Titus 1-3, Filemon 1, Ibrani 1',
  '10-08-2021': 'Ibrani 2-6',
  '11-08-2021': 'Ibrani 7-11',
  '12-08-2021': 'Ibrani 12-13, Yakobus 1-3',
  '13-08-2021': 'Yakobus 4-5, 1 Petrus 1-3',
  '14-08-2021': '1 Petrus 4-5, 2 Petrus 1-3',
  '15-08-2021': '1 Yohanes 1-5',
  '16-08-2021': '2 Yohanes 1, 3 Yohanes 1, Yudas 1, Wahyu 1-2',
  '17-08-2021': 'Wahyu 3-7',
  '18-08-2021': 'Wahyu 8-12',
  '19-08-2021': 'Wahyu 13-17',
  '20-08-2021': 'Wahyu 18-22',
  '21-08-2021': 'Kejadian 1-5',
  '22-08-2021': 'Kejadian 6-10',
  '23-08-2021': 'Kejadian 11-15',
  '24-08-2021': 'Kejadian 16-20',
  '25-08-2021': 'Kejadian 21-25',
  '26-08-2021': 'Kejadian 26-30',
  '27-08-2021': 'Kejadian 31-35',
  '28-08-2021': 'Kejadian 36-40',
  '29-08-2021': 'Kejadian 41-45',
  '30-08-2021': 'Kejadian 46-50',
  '31-08-2021': 'Keluaran 1-5',
  '01-09-2021': 'Keluaran 6-10',
  '02-09-2021': 'Keluaran 11-15',
  '03-09-2021': 'Keluaran 16-20',
  '04-09-2021': 'Keluaran 21-25',
  '05-09-2021': 'Keluaran 26-30',
  '06-09-2021': 'Keluaran 31-35',
  '07-09-2021': 'Keluaran 36-40',
  '08-09-2021': 'Imamat 1-5',
  '09-09-2021': 'Imamat 6-10',
  '10-09-2021': 'Imamat 11-15',
  '11-09-2021': 'Imamat 16-20',
  '12-09-2021': 'Imamat 21-25',
  '13-09-2021': 'Imamat 26-27, Bilangan 1-3',
  '14-09-2021': 'Bilangan 4-8',
  '15-09-2021': 'Bilangan 9-13',
  '16-09-2021': 'Bilangan 14-18',
  '17-09-2021': 'Bilangan 19-23',
  '18-09-2021': 'Bilangan 24-28',
  '19-09-2021': 'Bilangan 29-33',
  '20-09-2021': 'Bilangan 34-36, Ulangan 1-2',
  '21-09-2021': 'Ulangan 3-7',
  '22-09-2021': 'Ulangan 8-12',
  '23-09-2021': 'Ulangan 13-17',
  '24-09-2021': 'Ulangan 18-22',
  '25-09-2021': 'Ulangan 23-27',
  '26-09-2021': 'Ulangan 28-32',
  '27-09-2021': 'Ulangan 33-34, Yosua 1-3',
  '28-09-2021': 'Yosua 4-8',
  '29-09-2021': 'Yosua 9-13',
  '30-09-2021': 'Yosua 14-18',
  '01-10-2021': 'Yosua 19-23',
  '02-10-2021': 'Yosua 24-24, Hakim-hakim 1-4',
  '03-10-2021': 'Hakim-hakim 5-9',
  '04-10-2021': 'Hakim-hakim 10-14',
  '05-10-2021': 'Hakim-hakim 15-19',
  '06-10-2021': 'Hakim-hakim 20-21, Rut 1-3',
  '07-10-2021': 'Rut 4-4, 1 Samuel 1-4',
  '08-10-2021': '1 Samuel 5-9',
  '09-10-2021': '1 Samuel 10-14',
  '10-10-2021': '1 Samuel 15-19',
  '11-10-2021': '1 Samuel 20-24',
  '12-10-2021': '1 Samuel 25-29',
  '13-10-2021': '1 Samuel 30-31, 2 Samuel 1-3',
  '14-10-2021': '2 Samuel 4-8',
  '15-10-2021': '2 Samuel 9-13',
  '16-10-2021': '2 Samuel 14-18',
  '17-10-2021': '2 Samuel 19-23',
  '18-10-2021': '2 Samuel 24-24, 1 Raja-raja 1-4',
  '19-10-2021': '1 Raja-raja 5-9',
  '20-10-2021': '1 Raja-raja 10-14',
  '21-10-2021': '1 Raja-raja 15-19',
  '22-10-2021': '1 Raja-raja 20-22, 2 Raja-raja 1-2',
  '23-10-2021': '2 Raja-raja 3-7',
  '24-10-2021': '2 Raja-raja 8-12',
  '25-10-2021': '2 Raja-raja 13-17',
  '26-10-2021': '2 Raja-raja 18-22',
  '27-10-2021': '2 Raja-raja 23-25, 1 Tawarikh 1-2',
  '28-10-2021': '1 Tawarikh 3-7',
  '29-10-2021': '1 Tawarikh 8-12',
  '30-10-2021': '1 Tawarikh 13-17',
  '31-10-2021': '1 Tawarikh 18-22',
  '01-11-2021': '1 Tawarikh 23-27',
  '02-11-2021': '1 Tawarikh 28-29, 2 Tawarikh 1-3',
  '03-11-2021': '2 Tawarikh 4-8',
  '04-11-2021': '2 Tawarikh 9-13',
  '05-11-2021': '2 Tawarikh 14-18',
  '06-11-2021': '2 Tawarikh 19-23',
  '07-11-2021': '2 Tawarikh 24-28',
  '08-11-2021': '2 Tawarikh 29-33',
  '09-11-2021': '2 Tawarikh 34-36, Ezra 1-2',
  '10-11-2021': 'Ezra 3-7',
  '11-11-2021': 'Ezra 8-10, Nehemia 1-2',
  '12-11-2021': 'Nehemia 3-7',
  '13-11-2021': 'Nehemia 8-12',
  '14-11-2021': 'Nehemia 13-13, Ester 1-4',
  '15-11-2021': 'Ester 5-9',
  '16-11-2021': 'Ester 10-10, Ayub 1-4',
  '17-11-2021': 'Ayub 5-9',
  '18-11-2021': 'Ayub 10-14',
  '19-11-2021': 'Ayub 15-19',
  '20-11-2021': 'Ayub 20-24',
  '21-11-2021': 'Ayub 25-29',
  '22-11-2021': 'Ayub 30-34',
  '23-11-2021': 'Ayub 35-39',
  '24-11-2021': 'Ayub 40-42, Mazmur 1-2',
  '25-11-2021': 'Mazmur 3-7',
  '26-11-2021': 'Mazmur 8-12',
  '27-11-2021': 'Mazmur 13-17',
  '28-11-2021': 'Mazmur 18-22',
  '29-11-2021': 'Mazmur 23-27',
  '30-11-2021': 'Mazmur 28-32',
  '01-12-2021': 'Mazmur 33-37',
  '02-12-2021': 'Mazmur 38-42',
  '03-12-2021': 'Mazmur 43-47',
  '04-12-2021': 'Mazmur 48-52',
  '05-12-2021': 'Mazmur 53-57',
  '06-12-2021': 'Mazmur 58-62',
  '07-12-2021': 'Mazmur 63-67',
  '08-12-2021': 'Mazmur 68-72',
  '09-12-2021': 'Mazmur 73-77',
  '10-12-2021': 'Mazmur 78-82',
  '11-12-2021': 'Mazmur 83-87',
  '12-12-2021': 'Mazmur 88-92',
  '13-12-2021': 'Mazmur 93-97',
  '14-12-2021': 'Mazmur 98-102',
  '15-12-2021': 'Mazmur 103-107',
  '16-12-2021': 'Mazmur 108-112',
  '17-12-2021': 'Mazmur 113-117',
  '18-12-2021': 'Mazmur 118-122',
  '19-12-2021': 'Mazmur 123-127',
  '20-12-2021': 'Mazmur 128-132',
  '21-12-2021': 'Mazmur 133-137',
  '22-12-2021': 'Mazmur 138-142',
  '23-12-2021': 'Mazmur 143-147',
  '24-12-2021': 'Mazmur 148-150, Amsal 1-2',
  '25-12-2021': 'Amsal 3-7',
  '26-12-2021': 'Amsal 8-12',
  '27-12-2021': 'Amsal 13-17',
  '28-12-2021': 'Amsal 18-22',
  '29-12-2021': 'Amsal 23-27',
  '30-12-2021': 'Amsal 28-31, Pengkhotbah 1',
  '31-12-2021': 'Pengkhotbah 2-6',
  '01-01-2022': 'Pengkhotbah 7-11',
  '02-01-2022': 'Pengkhotbah 12-12, Kidung Agung 1-4',
  '03-01-2022': 'Kidung Agung 5-8, Yesaya 1',
  '04-01-2022': 'Yesaya 2-6',
  '05-01-2022': 'Yesaya 7-11',
  '06-01-2022': 'Yesaya 12-16',
  '07-01-2022': 'Yesaya 17-21',
  '08-01-2022': 'Yesaya 22-26',
  '09-01-2022': 'Yesaya 27-31',
  '10-01-2022': 'Yesaya 32-36',
  '11-01-2022': 'Yesaya 37-41',
  '12-01-2022': 'Yesaya 42-46',
  '13-01-2022': 'Yesaya 47-51',
  '14-01-2022': 'Yesaya 52-56',
  '15-01-2022': 'Yesaya 57-61',
  '16-01-2022': 'Yesaya 62-66',
  '17-01-2022': 'Yeremia 1-5',
  '18-01-2022': 'Yeremia 6-10',
  '19-01-2022': 'Yeremia 11-15',
  '20-01-2022': 'Yeremia 16-20',
  '21-01-2022': 'Yeremia 21-25',
  '22-01-2022': 'Yeremia 26-30',
  '23-01-2022': 'Yeremia 31-35',
  '24-01-2022': 'Yeremia 36-40',
  '25-01-2022': 'Yeremia 41-45',
  '26-01-2022': 'Yeremia 46-50',
  '27-01-2022': 'Yeremia 51-52, Ratapan 1-3',
  '28-01-2022': 'Ratapan 4-5, Yehezkiel 1-3',
  '29-01-2022': 'Yehezkiel 4-8',
  '30-01-2022': 'Yehezkiel 9-13',
  '31-01-2022': 'Yehezkiel 14-18',
  '01-02-2022': 'Yehezkiel 19-23',
  '02-02-2022': 'Yehezkiel 24-28',
  '03-02-2022': 'Yehezkiel 29-33',
  '04-02-2022': 'Yehezkiel 34-38',
  '05-02-2022': 'Yehezkiel 39-43',
  '06-02-2022': 'Yehezkiel 44-48',
  '07-02-2022': 'Daniel 1-5',
  '08-02-2022': 'Daniel 6-10',
  '09-02-2022': 'Daniel 11-12, Hosea 1-3',
  '10-02-2022': 'Hosea 4-8',
  '11-02-2022': 'Hosea 9-13',
  '12-02-2022': 'Hosea 14-14, Yoel 1-3, Amos 1',
  '13-02-2022': 'Amos 2-6',
  '14-02-2022': 'Amos 7-9, Obaja 1, Yunus 1',
  '15-02-2022': 'Yunus 2-4, Mikha 1-2',
  '16-02-2022': 'Mikha 3-7',
  '17-02-2022': 'Nahum 1-3, Habakuk 1-2',
  '18-02-2022': 'Habakuk 3-3, Zefanya 1-3, Hagai 1',
  '19-02-2022': 'Hagai 2-2, Zakharia 1-4',
  '20-02-2022': 'Zakharia 5-9',
  '21-02-2022': 'Zakharia 10-14',
  '22-02-2022': 'Maleakhi 1-4'
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

*Gerakan BAPA cq BATYK Putaran Ke-6*
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
