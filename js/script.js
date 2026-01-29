/* ========================================
   SCRIPT.JS - Fungsi Helper Utama
   File ini berisi fungsi-fungsi yang digunakan
   oleh berbagai halaman HTML
   ======================================== */

// ==================== FUNGSI STATISTIK ====================

/**
 * Fungsi untuk mendapatkan skor terbaik dari kategori tertentu
 * @param {string} category - Nama kategori (contoh: 'matematika', 'ipa')
 * @returns {number} - Skor terbaik (0-100)
 */
function getBestScore(category) {
    // Ambil semua hasil quiz dari localStorage
    const results = JSON.parse(localStorage.getItem('quizResults') || '[]');
    
    // Filter hasil berdasarkan kategori
    const categoryResults = results.filter(r => r.category === category);
    
    // Jika tidak ada hasil, return 0
    if (categoryResults.length === 0) return 0;
    
    // Cari skor tertinggi
    const bestScore = Math.max(...categoryResults.map(r => r.score));
    return bestScore;
}

/**
 * Fungsi untuk mendapatkan statistik keseluruhan
 * @returns {object} - Object berisi total quiz, rata-rata skor, dan skor terbaik
 */
function getOverallStats() {
    // Ambil semua hasil quiz dari localStorage
    const results = JSON.parse(localStorage.getItem('quizResults') || '[]');
    
    // Hitung total quiz yang sudah dikerjakan
    const totalQuizzes = results.length;
    
    // Jika belum ada quiz, return nilai default
    if (totalQuizzes === 0) {
        return {
            totalQuizzes: 0,
            averageScore: 0,
            bestScore: 0
        };
    }
    
    // Hitung rata-rata skor
    const totalScore = results.reduce((sum, r) => sum + r.score, 0);
    const averageScore = Math.round(totalScore / totalQuizzes);
    
    // Cari skor terbaik
    const bestScore = Math.max(...results.map(r => r.score));
    
    return {
        totalQuizzes: totalQuizzes,
        averageScore: averageScore,
        bestScore: bestScore
    };
}

/**
 * Fungsi untuk update tampilan statistik di homepage
 * Fungsi ini akan dipanggil saat halaman index.html dimuat
 */
function updateStats() {
    const stats = getOverallStats();
    
    // Update elemen HTML dengan data statistik
    const totalElement = document.getElementById('totalQuizzes');
    const avgElement = document.getElementById('averageScore');
    const bestElement = document.getElementById('bestScore');
    
    // Cek apakah elemen ada (untuk menghindari error)
    if (totalElement) totalElement.textContent = stats.totalQuizzes;
    if (avgElement) avgElement.textContent = stats.averageScore;
    if (bestElement) bestElement.textContent = stats.bestScore;
}

// ==================== FUNGSI UTILITY ====================

/**
 * Fungsi untuk format tanggal menjadi format yang lebih mudah dibaca
 * @param {string} isoString - String tanggal dalam format ISO
 * @returns {string} - Tanggal dalam format yang mudah dibaca
 */
function formatDate(isoString) {
    const date = new Date(isoString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleDateString('id-ID', options);
}

/**
 * Fungsi untuk mendapatkan pesan motivasi berdasarkan skor
 * @param {number} score - Skor yang didapat (0-100)
 * @returns {object} - Object berisi icon, title, dan message
 */
function getMotivationalMessage(score) {
    if (score >= 90) {
        return {
            icon: '🏆',
            title: 'Luar Biasa!',
            message: 'Nilai sempurna! Kamu sangat menguasai materi ini. Pertahankan prestasimu!'
        };
    } else if (score >= 70) {
        return {
            icon: '🎉',
            title: 'Bagus Sekali!',
            message: 'Hasil yang bagus! Kamu sudah memahami sebagian besar materi. Terus tingkatkan!'
        };
    } else if (score >= 50) {
        return {
            icon: '👍',
            title: 'Cukup Baik!',
            message: 'Tidak buruk! Masih ada ruang untuk berkembang. Yuk belajar lebih giat lagi!'
        };
    } else {
        return {
            icon: '💪',
            title: 'Jangan Menyerah!',
            message: 'Jangan berkecil hati! Terus berlatih dan belajar, pasti akan lebih baik!'
        };
    }
}

/**
 * Fungsi untuk clear semua data (untuk testing atau reset)
 * HATI-HATI: Ini akan menghapus semua hasil quiz!
 */
function clearAllData() {
    if (confirm('Yakin ingin menghapus semua data quiz? Tindakan ini tidak dapat dibatalkan!')) {
        localStorage.removeItem('quizResults');
        localStorage.removeItem('selectedCategory');
        localStorage.removeItem('lastQuizResult');
        alert('Semua data berhasil dihapus!');
        window.location.reload();
    }
}

// ==================== PENJELASAN ====================
/*
Penjelasan struktur data di localStorage:

1. quizResults - Array berisi semua hasil quiz
   Format: [
     {
       category: 'matematika',
       score: 80,
       totalQuestions: 10,
       date: '2024-01-29T10:30:00.000Z'
     },
     ...
   ]

2. selectedCategory - String kategori yang sedang dipilih
   Format: 'matematika' / 'ipa' / 'ips' / dll

3. lastQuizResult - Object hasil quiz terakhir
   Format sama dengan item di quizResults
   Digunakan untuk ditampilkan di halaman result.html
*/
