// Secciones de la página
var titulosPagina = {
    crear:   'Nueva Solicitud',
    creadas: 'Mis Solicitudes'
};

function navTo(id) {
    navegarSeccion(id, titulosPagina);
}

inicializarNavegacion(titulosPagina);