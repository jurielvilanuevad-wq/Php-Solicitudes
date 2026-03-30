// Navegación de secciones en las páginas.
function navegarSeccion(idSeccion, titulosPagina) {
    document.querySelectorAll('.section').forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    document.getElementById(idSeccion).style.display = '';

    document.querySelectorAll('.nav-link').forEach(function(nav) {
        nav.classList.remove('active');
    });

    var navActivo = document.querySelector('.nav-link[data-section="' + idSeccion + '"]');
    if (navActivo) navActivo.classList.add('active');

    var topbarTitulo = document.getElementById('topbar-titulo');
    if (topbarTitulo && titulosPagina) {
        topbarTitulo.textContent = titulosPagina[idSeccion] || '';
    }
}

function inicializarNavegacion(titulosPagina) {
    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navegarSeccion(this.getAttribute('data-section'), titulosPagina);
        });
    });
}