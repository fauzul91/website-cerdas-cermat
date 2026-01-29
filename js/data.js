// Data soal quiz untuk berbagai kategori
// Setiap kategori memiliki 10 soal pilihan ganda

const quizData = {
    matematika: [
        {
            question: "Hasil dari 15 × 12 - 48 : 6 adalah...",
            options: ["172", "180", "182", "192"],
            correct: 0
        },
        {
            question: "Bentuk sederhana dari 3(2x + 4) - 2(x - 3) adalah...",
            options: ["4x + 18", "4x + 6", "6x + 18", "8x + 6"],
            correct: 0
        },
        {
            question: "Jika a = 5 dan b = 3, maka nilai dari 2a² - 3b adalah...",
            options: ["41", "50", "59", "91"],
            correct: 0
        },
        {
            question: "Volume kubus dengan panjang rusuk 7 cm adalah...",
            options: ["49 cm³", "147 cm³", "343 cm³", "2401 cm³"],
            correct: 2
        },
        {
            question: "KPK dari 12 dan 18 adalah...",
            options: ["6", "36", "72", "216"],
            correct: 1
        },
        {
            question: "Luas lingkaran dengan jari-jari 14 cm adalah... (π = 22/7)",
            options: ["154 cm²", "308 cm²", "616 cm²", "1232 cm²"],
            correct: 2
        },
        {
            question: "Hasil dari √144 + √81 adalah...",
            options: ["15", "21", "225", "18"],
            correct: 1
        },
        {
            question: "Dalam suatu kelas terdapat 40 siswa. Jika 60% siswa menyukai matematika, berapa siswa yang menyukai matematika?",
            options: ["20 siswa", "24 siswa", "28 siswa", "32 siswa"],
            correct: 1
        },
        {
            question: "Besar sudut dalam segitiga sama sisi adalah...",
            options: ["45°", "60°", "90°", "120°"],
            correct: 1
        },
        {
            question: "Jika 3x + 5 = 20, maka nilai x adalah...",
            options: ["3", "4", "5", "6"],
            correct: 2
        }
    ],

    ipa: [
        {
            question: "Proses perubahan wujud dari cair menjadi padat disebut...",
            options: ["Membeku", "Mencair", "Menguap", "Mengembun"],
            correct: 0
        },
        {
            question: "Organ yang berfungsi memompa darah ke seluruh tubuh adalah...",
            options: ["Paru-paru", "Jantung", "Hati", "Ginjal"],
            correct: 1
        },
        {
            question: "Satuan energi dalam sistem SI adalah...",
            options: ["Watt", "Newton", "Joule", "Pascal"],
            correct: 2
        },
        {
            question: "Hewan yang berkembang biak dengan cara bertelur disebut...",
            options: ["Vivipar", "Ovovivipar", "Ovipar", "Fragmentasi"],
            correct: 2
        },
        {
            question: "Fotosintesis pada tumbuhan terjadi di bagian...",
            options: ["Akar", "Batang", "Daun", "Bunga"],
            correct: 2
        },
        {
            question: "Gaya yang bekerja pada benda yang jatuh ke bumi disebut gaya...",
            options: ["Gesek", "Pegas", "Gravitasi", "Magnet"],
            correct: 2
        },
        {
            question: "Urutan tingkat organisasi kehidupan dari yang terkecil adalah...",
            options: ["Sel - Jaringan - Organ - Sistem Organ", "Jaringan - Sel - Organ - Sistem Organ", "Organ - Sel - Jaringan - Sistem Organ", "Sel - Organ - Jaringan - Sistem Organ"],
            correct: 0
        },
        {
            question: "Perubahan energi yang terjadi pada lampu senter adalah...",
            options: ["Listrik menjadi cahaya", "Kimia menjadi listrik dan cahaya", "Cahaya menjadi listrik", "Kimia menjadi gerak"],
            correct: 1
        },
        {
            question: "Komponen ekosistem yang berperan sebagai pengurai adalah...",
            options: ["Produsen", "Konsumen", "Dekomposer", "Herbivor"],
            correct: 2
        },
        {
            question: "Perpindahan panas secara konveksi terjadi melalui...",
            options: ["Zat padat", "Aliran zat cair atau gas", "Ruang hampa", "Radiasi"],
            correct: 1
        }
    ],

    ips: [
        {
            question: "Ibukota negara Indonesia adalah...",
            options: ["Bandung", "Surabaya", "Jakarta", "Medan"],
            correct: 2
        },
        {
            question: "Pulau terbesar di Indonesia adalah...",
            options: ["Jawa", "Sumatera", "Kalimantan", "Papua"],
            correct: 3
        },
        {
            question: "Proklamasi kemerdekaan Indonesia dibacakan pada tanggal...",
            options: ["17 Agustus 1945", "1 Juni 1945", "20 Mei 1908", "28 Oktober 1928"],
            correct: 0
        },
        {
            question: "Presiden pertama Republik Indonesia adalah...",
            options: ["Soeharto", "Soekarno", "B.J. Habibie", "Megawati"],
            correct: 1
        },
        {
            question: "Benua terbesar di dunia adalah...",
            options: ["Afrika", "Amerika", "Asia", "Eropa"],
            correct: 2
        },
        {
            question: "Organisasi negara-negara Asia Tenggara disebut...",
            options: ["APEC", "ASEAN", "NATO", "OPEC"],
            correct: 1
        },
        {
            question: "Gunung tertinggi di Indonesia adalah...",
            options: ["Gunung Semeru", "Gunung Merapi", "Puncak Jaya", "Gunung Kerinci"],
            correct: 2
        },
        {
            question: "Mata uang negara Indonesia adalah...",
            options: ["Ringgit", "Rupiah", "Baht", "Peso"],
            correct: 1
        },
        {
            question: "Bapak Koperasi Indonesia adalah...",
            options: ["Mohammad Hatta", "Soekarno", "Ki Hajar Dewantara", "Tan Malaka"],
            correct: 0
        },
        {
            question: "Kegiatan ekonomi yang mengolah bahan mentah menjadi barang jadi disebut...",
            options: ["Produksi", "Distribusi", "Konsumsi", "Industri"],
            correct: 3
        }
    ],

    "bahasa-indonesia": [
        {
            question: "Kata yang memiliki makna lebih halus daripada kata 'mati' adalah...",
            options: ["Meninggal", "Tewas", "Wafat", "Gugur"],
            correct: 2
        },
        {
            question: "Kalimat yang memiliki subjek dan predikat disebut kalimat...",
            options: ["Tunggal", "Majemuk", "Efektif", "Inti"],
            correct: 0
        },
        {
            question: "Kata 'membaca' termasuk jenis kata...",
            options: ["Benda", "Kerja", "Sifat", "Bilangan"],
            correct: 1
        },
        {
            question: "Antonim dari kata 'rajin' adalah...",
            options: ["Malas", "Bodoh", "Pandai", "Gigih"],
            correct: 0
        },
        {
            question: "Unsur intrinsik cerpen yang berkaitan dengan waktu dan tempat adalah...",
            options: ["Tema", "Alur", "Latar", "Penokohan"],
            correct: 2
        },
        {
            question: "Imbuhan yang tepat untuk kata 'tulis' agar menjadi kata kerja adalah...",
            options: ["pe-an", "me-", "ke-an", "-an"],
            correct: 1
        },
        {
            question: "Kalimat yang mengandung ajakan disebut kalimat...",
            options: ["Berita", "Tanya", "Perintah", "Ajakan"],
            correct: 3
        },
        {
            question: "Puisi yang terdiri dari 4 bait dan setiap bait terdiri dari 4 baris disebut...",
            options: ["Pantun", "Syair", "Gurindam", "Talibun"],
            correct: 1
        },
        {
            question: "Sinonim dari kata 'cantik' adalah...",
            options: ["Jelek", "Rupawan", "Buruk", "Jelita"],
            correct: 3
        },
        {
            question: "Kalimat yang padu dan mengikuti kaidah bahasa Indonesia disebut kalimat...",
            options: ["Majemuk", "Efektif", "Pasif", "Aktif"],
            correct: 1
        }
    ],

    "bahasa-inggris": [
        {
            question: "What is the meaning of 'beautiful'?",
            options: ["Cantik", "Jelek", "Besar", "Kecil"],
            correct: 0
        },
        {
            question: "She ... to school every day.",
            options: ["go", "goes", "going", "gone"],
            correct: 1
        },
        {
            question: "The opposite of 'hot' is...",
            options: ["Warm", "Cool", "Cold", "Freeze"],
            correct: 2
        },
        {
            question: "I ... studying English now.",
            options: ["am", "is", "are", "be"],
            correct: 0
        },
        {
            question: "There ... many students in the classroom.",
            options: ["is", "am", "are", "be"],
            correct: 2
        },
        {
            question: "What is the past tense of 'eat'?",
            options: ["Eated", "Ate", "Eaten", "Eating"],
            correct: 1
        },
        {
            question: "My father is ... than my uncle.",
            options: ["tall", "taller", "tallest", "more tall"],
            correct: 1
        },
        {
            question: "We use 'a' before words that start with...",
            options: ["Vowel sound", "Consonant sound", "Silent letter", "Capital letter"],
            correct: 1
        },
        {
            question: "The book ... by the student yesterday.",
            options: ["read", "reads", "was read", "is read"],
            correct: 2
        },
        {
            question: "If I ... rich, I would travel around the world.",
            options: ["am", "was", "were", "be"],
            correct: 2
        }
    ],

    pkn: [
        {
            question: "Pancasila terdiri dari ... sila.",
            options: ["3", "4", "5", "6"],
            correct: 2
        },
        {
            question: "Sila pertama Pancasila adalah...",
            options: ["Kemanusiaan yang adil dan beradab", "Ketuhanan Yang Maha Esa", "Persatuan Indonesia", "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan"],
            correct: 1
        },
        {
            question: "Bentuk negara Indonesia adalah...",
            options: ["Kerajaan", "Kesatuan", "Federal", "Serikat"],
            correct: 1
        },
        {
            question: "UUD 1945 disahkan pada tanggal...",
            options: ["17 Agustus 1945", "18 Agustus 1945", "1 Juni 1945", "20 Mei 1908"],
            correct: 1
        },
        {
            question: "Lambang negara Indonesia adalah...",
            options: ["Bendera Merah Putih", "Garuda Pancasila", "Bhineka Tunggal Ika", "Sang Saka Merah Putih"],
            correct: 1
        },
        {
            question: "Semboyan negara Indonesia adalah...",
            options: ["Merdeka atau Mati", "Bhineka Tunggal Ika", "Indonesia Raya", "Merah Putih"],
            correct: 1
        },
        {
            question: "Hak untuk mendapatkan pendidikan termasuk hak...",
            options: ["Asasi manusia", "Warga negara", "Anak", "Semua benar"],
            correct: 3
        },
        {
            question: "Lembaga negara yang bertugas membuat undang-undang adalah...",
            options: ["MPR", "DPR", "Presiden", "MA"],
            correct: 1
        },
        {
            question: "Kewajiban setiap warga negara Indonesia adalah...",
            options: ["Membayar pajak", "Ikut pemilu", "Membela negara", "Semua benar"],
            correct: 3
        },
        {
            question: "Sikap saling menghormati dan menghargai perbedaan disebut...",
            options: ["Toleransi", "Demokrasi", "Nasionalisme", "Patriotisme"],
            correct: 0
        }
    ]
};
