document.addEventListener('DOMContentLoaded', () => {
    const sobre = document.getElementById('sobre');
    const sobreAbierto = document.getElementById('sobre-abierto');
    const hojaPapel = document.getElementById('hoja-papel');
    const sobreSinSello = document.getElementById('sobre-sin-sello');

    sobre.addEventListener('click', () => {
        sobre.style.display = 'none';
        sobreSinSello.style.display = 'block';
        // Animar el sobre cerrado
        sobreSinSello.style.transform = 'translateX(-50%) rotateY(180deg)';
        sobreSinSello.style.transition = 'transform 1s';

        // Mostrar el sobre abierto después de la animación
        setTimeout(() => {
            sobreSinSello.style.display = 'none';
            sobreAbierto.style.display = 'block';
            sobreAbierto.style.transform = 'translateX(-50%) rotateY(0deg)';
            sobreAbierto.style.transition = 'transform 1s';
        }, 1000);

        // Mostrar la hoja de papel después de la apertura del sobre
        setTimeout(() => {
            hojaPapel.style.display = 'block';
            hojaPapel.classList.add('fade-in');
        }, 2000);
    });

    hojaPapel.addEventListener('click', () => {
        hojaPapel.style.transition = 'transform 1s';

        setTimeout(() => {
            hojaPapel.style.display = 'none';
            sobreAbierto.style.display = 'none';

            sobre.style.display = 'block';
            sobre.style.transform = 'translateX(-50%) rotateY(0deg)';
            sobre.style.transition = 'transform 1s';
        }, 1000);
    })
});
