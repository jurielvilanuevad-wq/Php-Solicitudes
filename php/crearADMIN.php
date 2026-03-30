<?php
require_once "conexion.php";

// Este archivo no pertenece a la Implementación final, tras crear al admin
// se recomienda eliminar este archivo.

// Creación de un usuario Admin para ingresar sus datos en el login
// y entonces agregar nuevos usuarios dentro de la interfaz de Administrador.
$nombre     = "Admin";
$app        = "Principal";
$apm        = null;
$username   = "admin";
$password   = "cebollines";
$id_rol     = 3;
$id_area    = 1;
$disponible = 1;

$hash = password_hash($password, PASSWORD_BCRYPT);

$statement = $conexion->prepare(
    "INSERT INTO usuario (nombre, app, apm, username, contrasena, id_rol, disponible, id_area)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
);
$statement->bind_param("sssssiii", $nombre, $app, $apm, $username, $hash, $id_rol, $disponible, $id_area);

if ($statement->execute()) {
    echo "Administrador creado correctamente. <strong>Borrar este archivo cuando ya no sea necesario.</strong>";
} else {
    echo "Error: " . $conexion->error;
}
$statement->close();
?>