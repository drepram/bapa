let data = [
	{"num":1,"name":"Mercy Sihombing","emoji":"✅"},
	{"num":2,"name":"Christie Kirana","emoji":"✅"},
	{"num":3,"name":"Andre Pramaditya","emoji":"✅"},
	{"num":4,"name":"Jenny M","emoji":""},
	{"num":5,"name":"Martha Tan","emoji":""},
	{"num":6,"name":"Esther Hastuti","emoji":""},
	{"num":7,"name":"Anik H","emoji":""},
	{"num":8,"name":"Siu Shia","emoji":""},
	{"num":9,"name":"Natalicia","emoji":""},
	{"num":10,"name":"Eveline Siregar","emoji":""},
	{"num":11,"name":"Dedi Sihite","emoji":""},
	{"num":12,"name":"Sahadi Widjaja","emoji":""},
	{"num":13,"name":"Olyvia","emoji":""},
	{"num":14,"name":"Maria Sie","emoji":""},
	{"num":15,"name":"Maria Juwita","emoji":""},
	{"num":16,"name":"Ronny Wishnu","emoji":""},
	{"num":17,"name":"Eva Pangau","emoji":""},
	{"num":18,"name":"Irene F Mongkar","emoji":""},
	{"num":19,"name":"Irene Sirait","emoji":""},
	{"num":20,"name":"Irina Pendjol","emoji":""},
	{"num":21,"name":"Cindra","emoji":""},
	{"num":22,"name":"Matius Bukit","emoji":""},
	{"num":23,"name":"Louise","emoji":""},
	{"num":24,"name":"Ezra Bukit","emoji":""},
	{"num":25,"name":"Lidya Icha","emoji":""},
	{"num":26,"name":"Sandra Ticoalu","emoji":""},
	{"num":27,"name":"Jenny Tambunan","emoji":""},
	{"num":28,"name":"Lisbet Galingging","emoji":""},
	{"num":29,"name":"Selih Supriatini","emoji":""},
	{"num":30,"name":"Rusmia","emoji":""},
	{"num":31,"name":"Elisa","emoji":""},
	{"num":32,"name":"Nessy Napitupulu","emoji":""},
	{"num":33,"name":"Lili Diana","emoji":""},
	{"num":34,"name":"Lily Mutiara","emoji":""},
	{"num":35,"name":"Jeanne Gunawan","emoji":""},
	{"num":36,"name":"Yunita Suyanto","emoji":""},
	{"num":37,"name":"Ria Pendjol","emoji":""},
	{"num":38,"name":"Josia Pendjol","emoji":""},
	{"num":39,"name":"Hermanto Rusli","emoji":""},
	{"num":40,"name":"Estu Lestari","emoji":""},
	{"num":41,"name":"Axnes","emoji":""},
	{"num":42,"name":"Lidya","emoji":""},
	{"num":43,"name":"Tarigan","emoji":""},
	{"num":44,"name":"Waty","emoji":""},
	{"num":45,"name":"Frida","emoji":""},
	{"num":46,"name":"Angel Syaranamual","emoji":""},
	{"num":47,"name":"Ida Lubis","emoji":""},
	{"num":48,"name":"Atik Jaka","emoji":""},
	{"num":49,"name":"Eddy Santoso","emoji":""},
	{"num":50,"name":"Yohan HM","emoji":""},
	{"num":51,"name":"Caroline Jacob ","emoji":""},
	{"num":52,"name":"Ellen Simarmata","emoji":""},
	{"num":53,"name":"Esther Kristianto","emoji":""},
	{"num":54,"name":"Lucy PM ","emoji":""},
	{"num":55,"name":"Nini Saian","emoji":""},
	{"num":56,"name":"Anton","emoji":""},
	{"num":57,"name":"Esty","emoji":""},
	{"num":58,"name":"Kristy Saian","emoji":""},
	{"num":59,"name":"Sagita Krisdina Saian","emoji":""},
	{"num":60,"name":"Lasta NS","emoji":""},
	{"num":62,"name":"Eddi Tarigan","emoji":""},
	{"num":63,"name":"Katarina Odeth","emoji":""},
	{"num":64,"name":"Billy Sadeli","emoji":""},
	{"num":65,"name":"Glenn Syaranamual","emoji":""},
	{"num":66,"name":"Eiren Laura","emoji":""},
	{"num":67,"name":"Lisana Halim","emoji":""},
	{"num":68,"name":"Petriana","emoji":""}
]

function sortNum() {
	let numbers = document.getElementById('numberList').value,
	sorted = numbers.split(',').sort((a, b)=>{return a-b});

	getRekapString(sorted)
	getFullString()
}

function getRekapString(id, replace = '✅') {
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
	let middleStr = "",
	ayat = document.getElementById('ayat').value,
	waktu = document.getElementById('waktu').value,
	tanggal = document.getElementById('tanggal').value,
	besok = document.getElementById('besok').value,
	status = document.getElementById('status').value;

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
	let kalimat = document.getElementById('kalimat').value,
	setiapKalimat = kalimat.split(': '),
	regex = /^\d+/,
	arrKalimat = [],
	arrAngka = [];

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

