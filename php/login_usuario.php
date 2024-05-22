<?php
session_start();
include 'conexion.php';

$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];

// Realizamos la consulta SQL
$validad_login = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo' AND contrasena='$contrasena'");

if (mysqli_num_rows($validad_login) > 0) {
    $row = mysqli_fetch_assoc($validad_login);
    $id = $row['id'];
    $nombre = $row['nombre'];

    // Guardamos el ID y nombre del usuario en la sesión
    $_SESSION['user_id'] = $id;
    $_SESSION['user_name'] = $nombre;

    echo '<script>
    alert("¡Bienvenido!");
    window.location.href = "../inicio_pagina.html";
    </script>';
} else {
    echo '<script>
    alert("El usuario no existe, por favor verifique los datos.");
    window.location.href = "../login.php";
    </script>';
}

mysqli_close($conexion);
?>
