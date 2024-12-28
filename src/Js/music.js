document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundMusic');

    // Carregar a posição do áudio armazenada
    var lastPosition = localStorage.getItem('audioPosition');
    if (lastPosition) {
        audio.currentTime = parseFloat(lastPosition);
    }

    // Reproduzir o áudio
    audio.play();

    // Salvar a posição do áudio quando a aba ou página é fechada
    window.addEventListener('beforeunload', function() {
        localStorage.setItem('audioPosition', audio.currentTime);
    });
});
