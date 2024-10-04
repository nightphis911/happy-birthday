function showGift() {
    document.getElementById("giftImage").style.display = "block";
    document.getElementById("message").style.display = "block";
    
    // Mengubah warna latar belakang
    document.body.style.backgroundColor = "pink"; // Ganti dengan warna pilihan Anda
    
    // Memutar lagu
    const audio = document.getElementById("audio");
    audio.play();
}
