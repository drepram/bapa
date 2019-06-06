let daftarPengikut = [
	{"nomorUrut":1, "pembaca":"Mercy Sihombing", "apakahSudahMembaca":"✅"},
    {"nomorUrut":2, "pembaca":"Christie Kirana", "apakahSudahMembaca":"✅"},
    {"nomorUrut":3, "pembaca":"drepram", "apakahSudahMembaca":"✅"},
    {"nomorUrut":4, "pembaca":"Kanti", "apakahSudahMembaca":""},
    {"nomorUrut":5, "pembaca":"Ronny Wisnhu", "apakahSudahMembaca":""},
    {"nomorUrut":6, "pembaca":"Siu Shia", "apakahSudahMembaca":""},
    {"nomorUrut":7, "pembaca":"Ronny Wisnhu", "apakahSudahMembaca":""},
    {"nomorUrut":8, "pembaca":"Ria Pendjol", "apakahSudahMembaca":""},
    {"nomorUrut":9, "pembaca":"Irina Pendjol", "apakahSudahMembaca":""},
    {"nomorUrut":10, "pembaca":"Lidya Eng", "apakahSudahMembaca":""},
    {"nomorUrut":11, "pembaca":"Magdalena Yuniarin", "apakahSudahMembaca":""},
    {"nomorUrut":12, "pembaca":"Ming Kolasa", "apakahSudahMembaca":""},
    {"nomorUrut":13, "pembaca":"Martha Tan", "apakahSudahMembaca":""},
    {"nomorUrut":14, "pembaca":"Maria Sie", "apakahSudahMembaca":""},
    {"nomorUrut":15, "pembaca":"Jenny Tambunan", "apakahSudahMembaca":""},
    {"nomorUrut":16, "pembaca":"Lisana Halim", "apakahSudahMembaca":""},
    {"nomorUrut":17, "pembaca":"Yohan", "apakahSudahMembaca":""},
    {"nomorUrut":18, "pembaca":"Lili Diana", "apakahSudahMembaca":""},
    {"nomorUrut":19, "pembaca":"Angel Ginelly", "apakahSudahMembaca":""},
    {"nomorUrut":20, "pembaca":"Lorentz Marpaung", "apakahSudahMembaca":""},
    {"nomorUrut":21, "pembaca":"Louise", "apakahSudahMembaca":""},
    {"nomorUrut":22, "pembaca":"Lasta", "apakahSudahMembaca":""},
    {"nomorUrut":23, "pembaca":"Regina", "apakahSudahMembaca":""},
    {"nomorUrut":24, "pembaca":"Irene Sirait", "apakahSudahMembaca":""},
    {"nomorUrut":25, "pembaca":"Cindra", "apakahSudahMembaca":""},
    {"nomorUrut":26, "pembaca":"Lily Mutiara", "apakahSudahMembaca":""},
    {"nomorUrut":27, "pembaca":"Lila", "apakahSudahMembaca":""},
    {"nomorUrut":28, "pembaca":"Hermanto R", "apakahSudahMembaca":""},
    {"nomorUrut":29, "pembaca":"Raymond", "apakahSudahMembaca":""},
    {"nomorUrut":30, "pembaca":"Yasama Halawa", "apakahSudahMembaca":""},
    {"nomorUrut":31, "pembaca":"Dame", "apakahSudahMembaca":""},
    {"nomorUrut":32, "pembaca":"Yunita Suyanto", "apakahSudahMembaca":""},
    {"nomorUrut":33, "pembaca":"Rusmida", "apakahSudahMembaca":""},
    {"nomorUrut":34, "pembaca":"Miming", "apakahSudahMembaca":""},
    {"nomorUrut":35, "pembaca":"Livia", "apakahSudahMembaca":""},
    {"nomorUrut":36, "pembaca":"Atik", "apakahSudahMembaca":""},
    {"nomorUrut":37, "pembaca":"Bukit", "apakahSudahMembaca":""},
    {"nomorUrut":38, "pembaca":"Sandra Ticoalu", "apakahSudahMembaca":""},
    {"nomorUrut":39, "pembaca":"Jenny", "apakahSudahMembaca":""},
    {"nomorUrut":40, "pembaca":"Elisabeth Eliviana Andrians", "apakahSudahMembaca":""},
    {"nomorUrut":41, "pembaca":"Sahadi Widjaja", "apakahSudahMembaca":""},
    {"nomorUrut":42, "pembaca":"Dewi", "apakahSudahMembaca":""},
    {"nomorUrut":43, "pembaca":"Anik", "apakahSudahMembaca":""},
    {"nomorUrut":44, "pembaca":"Nessy Napitupulu", "apakahSudahMembaca":""},
    {"nomorUrut":45, "pembaca":"Irene F Mongkar", "apakahSudahMembaca":""},
    {"nomorUrut":46, "pembaca":"Wilken Paskalis", "apakahSudahMembaca":""},
    {"nomorUrut":47, "pembaca":"Olyvia", "apakahSudahMembaca":""},
    {"nomorUrut":48, "pembaca":"Rusmia", "apakahSudahMembaca":""},
    {"nomorUrut":49, "pembaca":"Elisha", "apakahSudahMembaca":""},
    {"nomorUrut":50, "pembaca":"Dedi L. Sihite", "apakahSudahMembaca":""},
    {"nomorUrut":51, "pembaca":"Eveline", "apakahSudahMembaca":""},
    {"nomorUrut":52, "pembaca":"Tonny / Akoe Tonsi", "apakahSudahMembaca":""},
    {"nomorUrut":53, "pembaca":"Magdalena Y", "apakahSudahMembaca":""},
]

function pelaksanaanPenyortiran() {
    let pelaporHariIni = document.getElementById('daftarPembaca').value.split(',');

    tandaiPembaca(pelaporHariIni)
    hasilkanParagrafRekap()
}

function tandaiPembaca(nomorNomorUrut, tandaPembacaan = '✅') {
    for (var i = 0; i < nomorNomorUrut.length; i++) {
        cariProfilPelapor(nomorNomorUrut[i], tandaPembacaan) // Memutasikan properti apakahSudahMembacas dengan tanda ✅
    }
}

function cariProfilPelapor(nomorUrut, tandaPembacaan) {
    for (var i = 0; i < daftarPengikut.length; i++) {
        if (daftarPengikut[i].nomorUrut == nomorUrut) {
            daftarPengikut[i].apakahSudahMembaca = tandaPembacaan;
        }
    }
}

function hasilkanParagrafRekap() {
    let middleString = "";
    let ayat = document.getElementById('ayat').value;
    let waktu = document.getElementById('waktu').value;
    let tanggal = document.getElementById('tanggal').value;
    let besok = document.getElementById('besok').value;
    let status = document.getElementById('status').value;

    for (var i = 0; i < daftarPengikut.length; i++) {
        middleString += `${daftarPengikut[i].nomorUrut}. ${daftarPengikut[i].pembaca} ${daftarPengikut[i].apakahSudahMembaca}\n`;
    }

    let rekapStr = `"""REKAP ${status}"""

⏰: ${waktu} WIB

🗓: ${tanggal}
📖: ✅ ${ayat}

*Gerakan BAPA Putaran Ke-3*
*Baca Alkitab (bersama) Pak Ahok*

Sobat BAPA yang sudah membaca 5 pasal hari ini: 

${middleString}
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
    let kalimatKalimat = [];
    let pembacaHariIni = [];

    setiapKalimat.forEach(element => {
        kalimatKalimat.push(element)
    })

    kalimatKalimat.shift()

    kalimatKalimat.forEach(element => {
        string = element.toString().split('\n')
        res = string[0].match(regex)
        if (res == null) {
            console.log(string)
            if (string.length > 2) {
                if (string[1].split('.')[0] == 46) {
                    pembacaHariIni.push(parseInt(string[1].split('.')[0]))
                }
                if (string[1].split('.')[0] == 42) {
                    pembacaHariIni.push(parseInt(string[1].split('.')[0]))
                }
            }
            return false;
        } else {
            switch (res) {
                case '07':
                    res[0] = parseInt('7')
                    pembacaHariIni.push(res[0])
                default:
                    res[0] = parseInt(res[0])
                    pembacaHariIni.push(res[0])
            }
        }
    })

    document.getElementById('daftarPembaca').value = pembacaHariIni
    document.getElementById('pelapor').innerHTML = `Banyak Pelapor Hari Ini - ${pembacaHariIni.length}`

    dapatkanWaktu()
}

function dapatkanWaktu() {
    let waktu = new Date();
    let hariHari = new Array(7);
    let bulanBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    let jamDanMenit = waktu.toString().split(' ')[4].split(':').reverse();

    jamDanMenit.shift()

    jamDanMenit = jamDanMenit.reverse().join(':');

    hariHari[0] = "Minggu";
    hariHari[1] = "Senin";
    hariHari[2] = "Selasa";
    hariHari[3] = "Rabu";
    hariHari[4] = "Kamis";
    hariHari[5] = "Jumat";
    hariHari[6] = "Sabtu";

    let hari = hariHari[waktu.getDay()]; // Mengambil satu hari dari hari-hari
    let tanggal = String(waktu.getDate())
    let bulan = bulanBulan[waktu.getMonth()]; // Mengambil satu bulan dari bulan-bulan
    let tahun = waktu.getFullYear();

    document.getElementById('tanggal').value = `${hari}, ${tanggal} ${bulan} ${tahun}`
    document.getElementById('waktu').value = `${jamDanMenit}`
}