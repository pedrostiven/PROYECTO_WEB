<?php

session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

include 'conexion.php'; // Aquí se incluye el archivo de conexión

$user_id = $_SESSION['user_id'];

// Recuperar los datos del formulario y limpiarlos
$nombre = mysqli_real_escape_string($conexion, $_POST['nombre']);
$apellido = mysqli_real_escape_string($conexion, $_POST['apellido']);
$email = mysqli_real_escape_string($conexion, $_POST['email']);
$telefono = mysqli_real_escape_string($conexion, $_POST['telefono']);
$identificacion = mysqli_real_escape_string($conexion, $_POST['identificacion']);

// Actualizar los datos en la base de datos
$sql = "UPDATE informacion_usuarios SET nombre='$nombre', apellido='$apellido', email='$email', telefono='$telefono', identificacion='$identificacion' WHERE id = '$user_id'";

if (mysqli_query($conexion, $sql)) {
    echo '<script>
    alert("¡Los datos se actualizaron correctamente!");
    window.location.href = "../zona_pagos.php";
    </script>';
} else {
    echo "Error al actualizar los datos: " . mysqli_error($conexion);
}

mysqli_close($conexion);
