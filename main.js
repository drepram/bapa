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
  ]

const pasalHarian = {
  '09-03-2023': 'Matius 1-5',
  '10-03-2023': 'Matius 6-10',
  '11-03-2023': 'Matius 11-15',
  '12-03-2023': 'Matius 16-20',
  '13-03-2023': 'Matius 21-25',
  '14-03-2023': 'Matius 26-28, Markus 1-2',
  '15-03-2023': 'Markus 3-7',
  '16-03-2023': 'Markus 8-12',
  '17-03-2023': 'Markus 13-16, Lukas 1',
  '18-03-2023': 'Lukas 2-6',
  '19-03-2023': 'Lukas 7-11',
  '20-03-2023': 'Lukas 12-16',
  '21-03-2023': 'Lukas 17-21',
  '22-03-2023': 'Lukas 22-24, Yohanes 1-2',
  '23-03-2023': 'Yohanes 3-7',
  '24-03-2023': 'Yohanes 8-12',
  '25-03-2023': 'Yohanes 13-17',
  '26-03-2023': 'Yohanes 18-21, Kisah Para Rasul 1',
  '27-03-2023': 'Kisah Para Rasul 2-6',
  '28-03-2023': 'Kisah Para Rasul 7-11',
  '29-03-2023': 'Kisah Para Rasul 12-16',
  '30-03-2023': 'Kisah Para Rasul 17-21',
  '31-03-2023': 'Kisah Para Rasul 22-26',
  '01-04-2023': 'Kisah Para Rasul 27-28, Roma 1-3',
  '02-04-2023': 'Roma 4-8',
  '03-04-2023': 'Roma 9-13',
  '04-04-2023': 'Roma 14-16, 1 Korintus 1-2',
  '05-04-2023': '1 Korintus 3-7',
  '06-04-2023': '1 Korintus 8-12',
  '07-04-2023': '1 Korintus 13-16, 2 Korintus 1',
  '08-04-2023': '2 Korintus 2-6',
  '09-04-2023': '2 Korintus 7-11',
  '10-04-2023': '2 Korintus 12-13, Galatia 1-3',
  '11-04-2023': 'Galatia 4-6, Efesus 1-2',
  '12-04-2023': 'Efesus 3-6, Filipi 1',
  '13-04-2023': 'Filipi 2-4, Kolose 1-2',
  '14-04-2023': 'Kolose 3-4, 1 Tesalonika 1-3',
  '15-04-2023': '1 Tesalonika 4-5, 2 Tesalonika 1-3',
  '16-04-2023': '1 Timotius 1-5',
  '17-04-2023': '1 Timotius 6-6, 2 Timotius 1-4',
  '18-04-2023': 'Titus 1-3, Filemon 1, Ibrani 1',
  '19-04-2023': 'Ibrani 2-6',
  '20-04-2023': 'Ibrani 7-11',
  '21-04-2023': 'Ibrani 12-13, Yakobus 1-3',
  '22-04-2023': 'Yakobus 4-5, 1 Petrus 1-3',
  '23-04-2023': '1 Petrus 4-5, 2 Petrus 1-3',
  '24-04-2023': '1 Yohanes 1-5',
  '25-04-2023': '2 Yohanes 1, 3 Yohanes 1, Yudas 1, Wahyu 1-2',
  '26-04-2023': 'Wahyu 3-7',
  '27-04-2023': 'Wahyu 8-12',
  '28-04-2023': 'Wahyu 13-17',
  '29-04-2023': 'Wahyu 18-22',
    '30-04-2023': 'Kejadian 1-5',
    '01-05-2023': 'Kejadian 6-10',
    '02-05-2023': 'Kejadian 11-15',
    '03-05-2023': 'Kejadian 16-20',
    '04-05-2023': 'Kejadian 21-25',
    '05-05-2023': 'Kejadian 26-30',
    '06-05-2023': 'Kejadian 31-35',
    '07-05-2023': 'Kejadian 36-40',
    '08-05-2023': 'Kejadian 41-45',
    '09-05-2023': 'Kejadian 46-50',
    '10-05-2023': 'Keluaran 1-5',
    '11-05-2023': 'Keluaran 6-10',
    '12-05-2023': 'Keluaran 11-15',
    '13-05-2023': 'Keluaran 16-20',
    '14-05-2023': 'Keluaran 21-25',
    '15-05-2023': 'Keluaran 26-30',
    '16-05-2023': 'Keluaran 31-35',
    '17-05-2023': 'Keluaran 36-40',
    '18-05-2023': 'Imamat 1-5',
    '19-05-2023': 'Imamat 6-10',
    '20-05-2023': 'Imamat 11-15',
    '21-05-2023': 'Imamat 16-20',
    '22-05-2023': 'Imamat 21-25',
    '23-05-2023': 'Imamat 26-27, Bilangan 1-3',
    '24-05-2023': 'Bilangan 4-8',
    '25-05-2023': 'Bilangan 9-13',
    '26-05-2023': 'Bilangan 14-18',
    '27-05-2023': 'Bilangan 19-23',
    '28-05-2023': 'Bilangan 24-28',
    '29-05-2023': 'Bilangan 29-33',
    '30-05-2023': 'Bilangan 34-36, Ulangan 1-2',
    '31-05-2023': 'Ulangan 3-7',
    '01-06-2023': 'Ulangan 8-12',
    '02-06-2023': 'Ulangan 13-17',
    '03-06-2023': 'Ulangan 18-22',
    '04-06-2023': 'Ulangan 23-27',
    '05-06-2023': 'Ulangan 28-32',
    '06-06-2023': 'Ulangan 33-34, Yosua 1-3',
    '07-06-2023': 'Yosua 4-8',
    '08-06-2023': 'Yosua 9-13',
    '09-06-2023': 'Yosua 14-18',
    '10-06-2023': 'Yosua 19-23',
    '11-06-2023': 'Yosua 24-24, Hakim-hakim 1-4',
    '12-06-2023': 'Hakim-hakim 5-9',
    '13-06-2023': 'Hakim-hakim 10-14',
    '14-06-2023': 'Hakim-hakim 15-19',
    '15-06-2023': 'Hakim-hakim 20-21, Rut 1-3',
    '16-06-2023': 'Rut 4-4, 1 Samuel 1-4',
    '17-06-2023': '1 Samuel 5-9',
    '18-06-2023': '1 Samuel 10-14',
    '19-06-2023': '1 Samuel 15-19',
    '20-06-2023': '1 Samuel 20-24',
    '21-06-2023': '1 Samuel 25-29',
    '22-06-2023': '1 Samuel 30-31, 2 Samuel 1-3',
    '23-06-2023': '2 Samuel 4-8',
    '24-06-2023': '2 Samuel 9-13',
    '25-06-2023': '2 Samuel 14-18',
    '26-06-2023': '2 Samuel 19-23',
    '27-06-2023': '2 Samuel 24-24, 1 Raja-raja 1-4',
    '28-06-2023': '1 Raja-raja 5-9',
    '29-06-2023': '1 Raja-raja 10-14',
    '30-06-2023': '1 Raja-raja 15-19',
    '01-07-2023': '1 Raja-raja 20-22, 2 Raja-raja 1-2',
    '02-07-2023': '2 Raja-raja 3-7',
    '03-07-2023': '2 Raja-raja 8-12',
    '04-07-2023': '2 Raja-raja 13-17',
    '05-07-2023': '2 Raja-raja 18-22',
    '06-07-2023': '2 Raja-raja 23-25, 1 Tawarikh 1-2',
    '07-07-2023': '1 Tawarikh 3-7',
    '08-07-2023': '1 Tawarikh 8-12',
    '09-07-2023': '1 Tawarikh 13-17',
    '10-07-2023': '1 Tawarikh 18-22',
    '11-07-2023': '1 Tawarikh 23-27',
    '12-07-2023': '1 Tawarikh 28-29, 2 Tawarikh 1-3',
    '13-07-2023': '2 Tawarikh 4-8',
    '14-07-2023': '2 Tawarikh 9-13',
    '15-07-2023': '2 Tawarikh 14-18',
    '16-07-2023': '2 Tawarikh 19-23',
    '17-07-2023': '2 Tawarikh 24-28',
    '18-07-2023': '2 Tawarikh 29-33',
    '19-07-2023': '2 Tawarikh 34-36, Ezra 1-2',
    '20-07-2023': 'Ezra 3-7',
    '21-07-2023': 'Ezra 8-10, Nehemia 1-2',
    '22-07-2023': 'Nehemia 3-7',
    '23-07-2023': 'Nehemia 8-12',
    '24-07-2023': 'Nehemia 13-13, Ester 1-4',
    '25-07-2023': 'Ester 5-9',
    '26-07-2023': 'Ester 10-10, Ayub 1-4',
    '27-07-2023': 'Ayub 5-9',
    '28-07-2023': 'Ayub 10-14',
    '29-07-2023': 'Ayub 15-19',
    '30-07-2023': 'Ayub 20-24',
    '31-07-2023': 'Ayub 25-29',
    '01-08-2023': 'Ayub 30-34',
    '02-08-2023': 'Ayub 35-39',
    '03-08-2023': 'Ayub 40-42, Mazmur 1-2',
    '04-08-2023': 'Mazmur 3-7',
    '05-08-2023': 'Mazmur 8-12',
    '06-08-2023': 'Mazmur 13-17',
    '07-08-2023': 'Mazmur 18-22',
    '08-08-2023': 'Mazmur 23-27',
    '09-08-2023': 'Mazmur 28-32',
    '10-08-2023': 'Mazmur 33-37',
    '11-08-2023': 'Mazmur 38-42',
    '12-08-2023': 'Mazmur 43-47',
    '13-08-2023': 'Mazmur 48-52',
    '14-08-2023': 'Mazmur 53-57',
    '15-08-2023': 'Mazmur 58-62',
    '16-08-2023': 'Mazmur 63-67',
    '17-08-2023': 'Mazmur 68-72',
    '18-08-2023': 'Mazmur 73-77',
    '19-08-2023': 'Mazmur 78-82',
    '20-08-2023': 'Mazmur 83-87',
    '21-08-2023': 'Mazmur 88-92',
    '22-08-2023': 'Mazmur 93-97',
    '23-08-2023': 'Mazmur 98-102',
    '24-08-2023': 'Mazmur 103-107',
    '25-08-2023': 'Mazmur 108-112',
    '26-08-2023': 'Mazmur 113-117',
    '27-08-2023': 'Mazmur 118-122',
    '28-08-2023': 'Mazmur 123-127',
    '29-08-2023': 'Mazmur 128-132',
    '30-08-2023': 'Mazmur 133-137',
    '31-08-2023': 'Mazmur 138-142',
    '01-09-2023': 'Mazmur 143-147',
    '02-09-2023': 'Mazmur 148-150, Amsal 1-2',
    '03-09-2023': 'Amsal 3-7',
    '04-09-2023': 'Amsal 8-12',
    '05-09-2023': 'Amsal 13-17',
    '06-09-2023': 'Amsal 18-22',
    '07-09-2023': 'Amsal 23-27',
    '08-09-2023': 'Amsal 28-31, Pengkhotbah 1',
    '09-09-2023': 'Pengkhotbah 2-6',
    '10-09-2023': 'Pengkhotbah 7-11',
    '11-09-2023': 'Pengkhotbah 12-12, Kidung Agung 1-4',
    '12-09-2023': 'Kidung Agung 5-8, Yesaya 1',
    '13-09-2023': 'Yesaya 2-6',
    '14-09-2023': 'Yesaya 7-11',
    '15-09-2023': 'Yesaya 12-16',
    '16-09-2023': 'Yesaya 17-21',
    '17-09-2023': 'Yesaya 22-26',
    '18-09-2023': 'Yesaya 27-31',
    '19-09-2023': 'Yesaya 32-36',
    '20-09-2023': 'Yesaya 37-41',
    '21-09-2023': 'Yesaya 42-46',
    '22-09-2023': 'Yesaya 47-51',
    '23-09-2023': 'Yesaya 52-56',
    '24-09-2023': 'Yesaya 57-61',
    '25-09-2023': 'Yesaya 62-66',
    '26-09-2023': 'Yeremia 1-5',
    '27-09-2023': 'Yeremia 6-10',
    '28-09-2023': 'Yeremia 11-15',
    '29-09-2023': 'Yeremia 16-20',
    '30-09-2023': 'Yeremia 21-25',
    '01-10-2023': 'Yeremia 26-30',
    '02-10-2023': 'Yeremia 31-35',
    '03-10-2023': 'Yeremia 36-40',
    '04-10-2023': 'Yeremia 41-45',
    '05-10-2023': 'Yeremia 46-50',
    '06-10-2023': 'Yeremia 51-52, Ratapan 1-3',
    '07-10-2023': 'Ratapan 4-5, Yehezkiel 1-3',
    '08-10-2023': 'Yehezkiel 4-8',
    '09-10-2023': 'Yehezkiel 9-13',
    '10-10-2023': 'Yehezkiel 14-18',
    '11-10-2023': 'Yehezkiel 19-23',
    '12-10-2023': 'Yehezkiel 24-28',
    '13-10-2023': 'Yehezkiel 29-33',
    '14-10-2023': 'Yehezkiel 34-38',
    '15-10-2023': 'Yehezkiel 39-43',
    '16-10-2023': 'Yehezkiel 44-48',
    '17-10-2023': 'Daniel 1-5',
    '18-10-2023': 'Daniel 6-10',
    '19-10-2023': 'Daniel 11-12, Hosea 1-3',
    '20-10-2023': 'Hosea 4-8',
    '21-10-2023': 'Hosea 9-13',
    '22-10-2023': 'Hosea 14-14, Yoel 1-3, Amos 1',
    '23-10-2023': 'Amos 2-6',
    '24-10-2023': 'Amos 7-9, Obaja 1, Yunus 1',
    '25-10-2023': 'Yunus 2-4, Mikha 1-2',
    '26-10-2023': 'Mikha 3-7',
    '27-10-2023': 'Nahum 1-3, Habakuk 1-2',
    '28-10-2023': 'Habakuk 3-3, Zefanya 1-3, Hagai 1',
    '29-10-2023': 'Hagai 2-2, Zakharia 1-4',
    '30-10-2023': 'Zakharia 5-9',
    '31-10-2023': 'Zakharia 10-14',
    '01-11-2023': 'Maleakhi 1-4'
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

*Gerakan BAPA cq BATYK Putaran Ke-9*
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
