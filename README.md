# 🎓 Cerdas Cermat - Website Quiz Interaktif

Website quiz edukatif untuk siswa SMP dengan 6 kategori mata pelajaran.

## 📁 Struktur File

```
cerdas-cermat/
│
├── index.html          # Halaman utama / beranda
├── categories.html     # Halaman pilih kategori
├── quiz.html          # Halaman quiz
├── result.html        # Halaman hasil quiz
│
├── style.css          # CSS global & variables
├── components.css     # CSS untuk komponen (button, card, dll)
├── pages.css          # CSS khusus per halaman
│
├── data.js            # Data soal quiz (60 soal)
├── script.js          # Fungsi JavaScript helper
│
└── README.md          # File ini
```

## 🎯 Penjelasan File

### HTML Files

#### 1. **index.html** - Halaman Beranda
- Tampilan hero section dengan judul besar
- Statistik quiz (total quiz, rata-rata, skor terbaik)
- Tombol untuk mulai quiz
- **JavaScript yang digunakan:**
  - `updateStats()` - Update statistik dari localStorage

#### 2. **categories.html** - Halaman Kategori
- Grid 6 kategori mata pelajaran
- Setiap card menampilkan skor terbaik
- **JavaScript yang digunakan:**
  - `loadCategories()` - Memuat dan menampilkan kategori
  - `getBestScore(category)` - Mengambil skor terbaik per kategori

#### 3. **quiz.html** - Halaman Quiz
- Header dengan nama kategori dan progress
- Progress bar
- Pertanyaan dan 4 pilihan jawaban
- Tombol "Lanjut" untuk soal berikutnya
- **JavaScript yang digunakan:**
  - `showQuestion()` - Menampilkan soal
  - `selectAnswer(index)` - Memproses jawaban
  - `nextQuestion()` - Ke soal berikutnya
  - `finishQuiz()` - Selesai quiz dan simpan hasil

#### 4. **result.html** - Halaman Hasil
- Icon dan pesan motivasi
- Score dalam lingkaran besar
- Detail: Total soal, Benar, Salah
- Tombol coba lagi atau pilih kategori lain
- **JavaScript yang digunakan:**
  - `getMotivationalMessage(score)` - Pesan berdasarkan skor

### CSS Files

#### 1. **style.css** - Global Styles
Berisi:
- Reset CSS
- CSS Variables (warna, ukuran)
- Body & container styling
- Animasi (fadeIn, bounce)
- Responsive breakpoints dasar

**CSS Variables yang tersedia:**
```css
--primary-color: #6366f1     /* Biru ungu */
--primary-dark: #4f46e5      /* Biru ungu gelap */
--secondary-color: #8b5cf6   /* Ungu */
--success: #10b981           /* Hijau */
--error: #ef4444             /* Merah */
```

#### 2. **components.css** - Komponen
Berisi styling untuk:
- Buttons (primary, secondary, back, next)
- Cards (category cards)
- Statistics items
- Progress bar
- Option buttons (quiz)

#### 3. **pages.css** - Halaman Spesifik
Berisi styling khusus untuk:
- Homepage (hero section, main title)
- Categories page (grid layout)
- Quiz page (question container, quiz header)
- Result page (score circle, result container)

### JavaScript Files

#### 1. **data.js** - Data Soal
Struktur data:
```javascript
const quizData = {
    matematika: [
        {
            question: "Pertanyaan...",
            options: ["A", "B", "C", "D"],
            correct: 0  // Index jawaban benar (0-3)
        },
        // ... 9 soal lagi
    ],
    ipa: [...],
    // ... kategori lain
}
```

**Total: 60 soal (10 soal × 6 kategori)**

#### 2. **script.js** - Helper Functions
Fungsi-fungsi yang dapat digunakan:

**Fungsi Statistik:**
- `getBestScore(category)` - Ambil skor terbaik kategori
- `getOverallStats()` - Ambil statistik keseluruhan
- `updateStats()` - Update tampilan statistik

**Fungsi Utility:**
- `formatDate(isoString)` - Format tanggal
- `getMotivationalMessage(score)` - Pesan motivasi
- `clearAllData()` - Hapus semua data (untuk testing)

## 💾 LocalStorage

Website ini menyimpan data di browser menggunakan localStorage:

### 1. **quizResults**
Array semua hasil quiz:
```javascript
[
    {
        category: 'matematika',
        score: 80,
        totalQuestions: 10,
        date: '2024-01-29T10:30:00.000Z'
    },
    // ... hasil lainnya
]
```

### 2. **selectedCategory**
String kategori yang sedang dipilih:
```javascript
'matematika'
```

### 3. **lastQuizResult**
Object hasil quiz terakhir (untuk result.html):
```javascript
{
    category: 'matematika',
    score: 80,
    totalQuestions: 10,
    date: '2024-01-29T10:30:00.000Z'
}
```

## 🎨 Cara Modifikasi

### Mengubah Warna
Edit file `style.css`, bagian `:root`:
```css
:root {
    --primary-color: #6366f1;  /* Ubah warna utama */
    --success: #10b981;        /* Ubah warna benar */
}
```

### Menambah Soal
Edit file `data.js`, tambahkan object baru:
```javascript
{
    question: "Soal baru...",
    options: ["A", "B", "C", "D"],
    correct: 2  // Index jawaban benar
}
```

### Menambah Kategori Baru
1. Tambah data di `data.js`:
```javascript
const quizData = {
    // ... kategori lama
    seni: [
        // 10 soal seni
    ]
}
```

2. Tambah di `categories.html`:
```javascript
const categories = [
    // ... kategori lama
    { id: 'seni', name: 'Seni', icon: '🎨', description: '10 Soal' }
];
```

3. Tambah nama di `quiz.html`:
```javascript
const categoryNames = {
    // ... nama lama
    'seni': 'Seni'
};
```

## 🚀 Cara Pakai

1. Download semua file
2. Letakkan dalam satu folder
3. Buka `index.html` di browser
4. Pilih kategori dan mulai quiz!

## 📱 Responsive

Website ini responsive dan bekerja di:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎯 Fitur

✅ 6 kategori mata pelajaran SMP
✅ 10 soal per kategori (total 60 soal)
✅ Penyimpanan hasil di localStorage
✅ Tracking skor terbaik per kategori
✅ Statistik keseluruhan
✅ Feedback langsung saat menjawab
✅ Pesan motivasi berdasarkan skor
✅ Design modern dan elegan
✅ Fully responsive

## 📝 Catatan Pembelajaran

Website ini dibuat untuk pembelajaran, jadi:
- Kode JavaScript diberi komentar lengkap
- Struktur CSS terorganisir dengan baik
- Setiap file punya fungsi spesifik
- Mudah dimodifikasi dan dikembangkan

Selamat belajar! 🎓✨
