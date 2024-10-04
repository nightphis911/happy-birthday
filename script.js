function showGift() {
    document.getElementById("giftImage").style.display = "block";
    document.getElementById("message").style.display = "block";
    
    // Mengubah warna latar belakang
    document.body.style.backgroundColor = "pink"; // Ganti dengan warna pilihan Anda
    
    // Memutar lagu
    const audio = document.getElementById("audio");
    audio.play();

    // Menampilkan pesan unduhan setelah jeda 5 detik
    setTimeout(() => {
        document.getElementById("downloadMessage").style.display = "block";
    }, 5000); // 5000 milidetik = 5 detik
        }
