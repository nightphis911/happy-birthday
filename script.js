function showGift() {
    const message = "Semoga hari ini dipenuhi dengan kebahagiaan dan cinta!";
    document.getElementById('message').innerText = message;
    
    const giftReveal = document.getElementById('gift-reveal');
    const presentImage = document.querySelector('.present');
    
    giftReveal.classList.remove('hidden');
    presentImage.style.display = 'block';
}
