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

function inicializarContadores() {
    document.querySelectorAll('input[maxlength], textarea[maxlength]').forEach(function(el) {
        var grupo = el.closest('.grupo-form');
        var contador = grupo ? grupo.querySelector('.contador-chars') : null;
        if (!contador) return;
        var max = parseInt(el.getAttribute('maxlength'));

        function actualizar() {
            var restantes = max - el.value.length;
            contador.textContent = '(' + restantes + ' caracteres restantes)';
            contador.style.color = restantes <= 10 ? '#e74c3c' : '#8f98b2';
        }

        el.addEventListener('input', actualizar);
        actualizar();
    });
}

function toggleNotificaciones() {
    var panel = document.getElementById('notif-panel');
    if (panel) panel.classList.toggle('abierto');
}

document.addEventListener('click', function(e) {
    var panel = document.getElementById('notif-panel');
    var boton = document.getElementById('notif-boton');
    if (!panel || !boton) return;
    if (!panel.contains(e.target) && !boton.contains(e.target)) {
        panel.classList.remove('abierto');
    }
});

function eliminarNotificacion(id) {
    var formData = new FormData();
    formData.append('id_not', id);

    fetch('php/controlador_notificacion.php', { method: 'POST', body: formData })
        .then(function(r) { return r.json(); })
        .then(function(data) {
            if (!data.ok) return;

            var el = document.getElementById('notif-' + id);
            if (el) el.remove();

            var badge = document.querySelector('.notif-badge');
            if (badge) {
                var n = parseInt(badge.textContent) - 1;
                if (n <= 0) badge.remove();
                else badge.textContent = n;
            }

            var lista = document.querySelector('.notif-lista');
            if (lista && !lista.querySelector('.notif-item')) {
                lista.innerHTML = '<div class="notif-vacio">Sin notificaciones nuevas</div>';
            }
        })
        .catch(function() {});
}

function inicializarNavegacion(titulosPagina) {
    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navegarSeccion(this.getAttribute('data-section'), titulosPagina);
        });
    });
}