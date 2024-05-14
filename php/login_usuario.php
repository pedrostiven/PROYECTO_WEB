<?php
include 'conexion.php';

$correo = $_POST["correo"];
$contrasena = $_POST["contrasena"];

$validar_login = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo' and contrasena='$contrasena' ");

if (mysqli_num_rows($validar_login) > 0) {
    echo '
    <script>
    alert("¡Bienvenido!");
    </script>
    ';
    header("location: ../inicio_pagina.html");
    exit;
} else {
    echo '
    <script>
        alert("El usuario no existe, por favor verifique los datos.");
        window.location= "../login.php";
    </script>
    ';
    exit;
}
?>
