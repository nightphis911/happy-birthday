let clickCount = 0;
const card = document.getElementById('card');
const chineseText = document.getElementById('chineseText');
const birthdaySong = document.getElementById('birthdaySong');
const uploadDownload = document.getElementById('uploadDownload');

// Fungsi untuk menangani klik pada kartu
card.addEventListener('click', function() {
    clickCount++;

    // Mulai putar lagu dan tampilkan opsi download/upload
    if (clickCount === 1) {
        birthdaySong.play();
        uploadDownload.style.display = 'block';
    }

    // Easter egg: Setelah 3 kali klik, pindahkan kartu dan tampilkan teks Cina
    if (clickCount === 3) {
        card.classList.add('move');
        chineseText.style.display = 'block';
    }
});

// Fungsi untuk menangani download ketika tombol ditekan
document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'assets/birthday-present.zip'; // Ubah dengan path file yang ingin di-download
    link.download = 'birthday-present.zip';
    link.click();
});

// Tambahkan pesan setelah audio selesai
birthdaySong.addEventListener('ended', function() {
    alert("Semoga harimu menyenangkan!");
});