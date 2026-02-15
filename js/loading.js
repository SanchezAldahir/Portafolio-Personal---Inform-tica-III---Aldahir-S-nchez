document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        // Retraso de 1.5 segundos (1500 milisegundos)
        // Puedes ajustar esto para que la animación del logo se vea bien
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            // Opcional: eliminar la pantalla del DOM después de que termine la transición
            // setTimeout(() => {
            //     loadingScreen.remove();
            // }, 800); // Mismo tiempo que la transición CSS
        }, 1500);
    }
});