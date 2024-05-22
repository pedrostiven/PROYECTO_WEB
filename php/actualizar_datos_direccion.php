<?php

session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

include 'conexion.php'; // Aquí se incluye el archivo de conexión

$user_id = $_SESSION['user_id'];

// Recuperar los datos del formulario y limpiarlos
$destinatario = mysqli_real_escape_string($conexion, $_POST['destinatario']);
$direccion = mysqli_real_escape_string($conexion, $_POST['direccion']);
$codigo_postal = mysqli_real_escape_string($conexion, $_POST['cp']);
$departamento = mysqli_real_escape_string($conexion, $_POST['depa']);
$municipio = mysqli_real_escape_string($conexion, $_POST['muni']);

// Actualizar los datos en la base de datos
$sql = "UPDATE informacion_usuarios SET destinatario='$destinatario', direccion='$direccion', codigo_postal='$codigo_postal', departamento='$departamento', municipio='$municipio' WHERE id = '$user_id'";

if (mysqli_query($conexion, $sql)) {
    echo '<script>
    alert("¡Los datos se actualizaron correctamente!");
    window.location.href = "../zona_pagos.php";
    </script>';
} else {
    echo "Error al actualizar los datos: " . mysqli_error($conexion);
}

mysqli_close($conexion);
