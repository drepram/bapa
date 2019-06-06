let data = [
	{"num":1, "name":"Mercy Sihombing", "emoji":"✅"},
    {"num":2, "name":"Christie Kirana", "emoji":"✅"},
    {"num":3, "name":"drepram", "emoji":"✅"},
    {"num":4, "name":"Kanti", "emoji":""},
    {"num":5, "name":"Ronny Wisnhu", "emoji":""},
    {"num":6, "name":"Siu Shia", "emoji":""},
    {"num":7, "name":"Ronny Wisnhu", "emoji":""},
    {"num":8, "name":"Ria Pendjol", "emoji":""},
    {"num":9, "name":"Irina Pendjol", "emoji":""},
    {"num":10, "name":"Lidya Eng", "emoji":""},
    {"num":11, "name":"Magdalena Yuniarin", "emoji":""},
    {"num":12, "name":"Ming Kolasa", "emoji":""},
    {"num":13, "name":"Martha Tan", "emoji":""},
    {"num":14, "name":"Maria Sie", "emoji":""},
    {"num":15, "name":"Jenny Tambunan", "emoji":""},
    {"num":16, "name":"Lisana Halim", "emoji":""},
    {"num":17, "name":"Yohan", "emoji":""},
    {"num":18, "name":"Lili Diana", "emoji":""},
    {"num":19, "name":"Angel Ginelly", "emoji":""},
    {"num":20, "name":"Lorentz Marpaung", "emoji":""},
    {"num":21, "name":"Louise", "emoji":""},
    {"num":22, "name":"Lasta", "emoji":""},
    {"num":23, "name":"Regina", "emoji":""},
    {"num":24, "name":"Irene Sirait", "emoji":""},
    {"num":25, "name":"Cindra", "emoji":""},
    {"num":26, "name":"Lily Mutiara", "emoji":""},
    {"num":27, "name":"Lila", "emoji":""},
    {"num":28, "name":"Hermanto R", "emoji":""},
    {"num":29, "name":"Raymond", "emoji":""},
    {"num":30, "name":"Yasama Halawa", "emoji":""},
    {"num":31, "name":"Dame", "emoji":""},
    {"num":32, "name":"Yunita Suyanto", "emoji":""},
    {"num":33, "name":"Rusmida", "emoji":""},
    {"num":34, "name":"Miming", "emoji":""},
    {"num":35, "name":"Livia", "emoji":""},
    {"num":36, "name":"Atik", "emoji":""},
    {"num":37, "name":"Bukit", "emoji":""},
    {"num":38, "name":"Sandra Ticoalu", "emoji":""},
    {"num":39, "name":"Jenny", "emoji":""},
    {"num":40, "name":"Elisabeth Eliviana Andrians", "emoji":""},
    {"num":41, "name":"Sahadi Widjaja", "emoji":""},
    {"num":42, "name":"Dewi", "emoji":""},
    {"num":43, "name":"Anik", "emoji":""},
    {"num":44, "name":"Nessy Napitupulu", "emoji":""},
    {"num":45, "name":"Irene F Mongkar", "emoji":""},
    {"num":46, "name":"Wilken Paskalis", "emoji":""},
    {"num":47, "name":"Olyvia", "emoji":""},
    {"num":48, "name":"Rusmia", "emoji":""},
]

function sortNum() {
	let numbers = document.getElementById('numberList').value;
	let sorted = numbers.split(',').sort((a, b)=>{return a-b});

	getParagraph(sorted)
	getFullString()
}

function getParagraph(id, replace = '✅') {
	for (var i = 0; i < id.length; i++) {
	  searchAndReplace(id[i], replace) // Replacing the emojis one-by-one
	}
}

function searchAndReplace(personId, replacement) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].num == personId) {
      data[i].emoji = replacement;
    }
  }
}

function getFullString() {
	let middleStr = "";
	let ayat = document.getElementById('ayat').value;
	let waktu = document.getElementById('waktu').value;
	let tanggal = document.getElementById('tanggal').value;
	let besok = document.getElementById('besok').value;
	let status = document.getElementById('status').value;

	for (var i = 0; i < data.length; i++) {
	  middleStr += `${data[i].num}. ${data[i].name} ${data[i].emoji}\n`;
	}

	let rekapStr = `"""REKAP ${status}"""

⏰: ${waktu} WIB

🗓: ${tanggal}
📖: ✅ ${ayat}

*Gerakan BAPA Putaran Ke-3*
*Baca Alkitab (bersama) Pak Ahok*

Sobat BAPA yang sudah membaca 5 pasal hari ini: 

${middleStr}
*Pasal yang BESOK akan kita baca:*
📖 *${besok}*

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
Bagi rekan yg belum berganti stiker kami tunggu laporan pembacaannya ya.

Terima kasih bagi Sobat-Sobat yang semangat dalam gerakan moral ini.

Tuhan memberkati😇`

	document.getElementById('result').innerHTML = rekapStr;
}

function regexKalimat() {
	let kalimat = document.getElementById('kalimat').value;
	let setiapKalimat = kalimat.split(': ');
	let regex = /^\d+/;
	let arrKalimat = [];
	let arrAngka = [];

	setiapKalimat.forEach(element => {
		arrKalimat.push(element)
	})

	arrKalimat.shift()

	arrKalimat.forEach(element => {
	    string = element.toString().split('\n')
	    res = string[0].match(regex)
	    if (res == null) {
	    	console.log(string)
	    	if (string.length > 2) {
	    		if (string[1].split('.')[0] == 46) {
	    			arrAngka.push(parseInt(string[1].split('.')[0]))
	    		}
	    		if (string[1].split('.')[0] == 42) {
	    			arrAngka.push(parseInt(string[1].split('.')[0]))
	    		}
	    	}
	        return false;
	    } else {
	        switch(res) {
	            case '07':
	                res[0] = parseInt('7')
	                arrAngka.push(res[0])
	            default:
	                res[0] = parseInt(res[0])
	                arrAngka.push(res[0])
	        }
	    }
	})

	document.getElementById('numberList').value = arrAngka
	document.getElementById('pelapor').innerHTML = `ID Pelapor Pembacaan - ${arrAngka.length}`

	ambilWaktu()
}

function ambilWaktu() {
	let waktu = new Date(),
	weekday = new Array(7),
	monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"	],
	jamDanMenit = waktu.toString().split(' ')[4].split(':').reverse();

	jamDanMenit.shift()

	jamDanMenit = jamDanMenit.reverse().join(':');

	weekday[0] = "Minggu";
	weekday[1] = "Senin";
	weekday[2] = "Selasa";
	weekday[3] = "Rabu";
	weekday[4] = "Kamis";
	weekday[5] = "Jumat";
	weekday[6] = "Sabtu";

	let hari = weekday[waktu.getDay()],
	tanggal = String(waktu.getDate()).padStart(2, '0'),
	bulan = monthNames[waktu.getMonth()],
	tahun = waktu.getFullYear();

	document.getElementById('tanggal').value = `${hari}, ${tanggal} ${bulan} ${tahun}`
	document.getElementById('waktu').value = `${jamDanMenit}`
}

