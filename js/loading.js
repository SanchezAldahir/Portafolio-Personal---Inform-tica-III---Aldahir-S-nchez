window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    if (loadingScreen) {
        // Usamos una función anónima clara para que el navegador no sospeche
        setTimeout(function() {
            loadingScreen.classList.add('fade-out');
            
            // Segunda función para ocultarlo del todo tras la animación
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, 800);
            
        }, 1000); // 1 segundo de espera
    }
});
