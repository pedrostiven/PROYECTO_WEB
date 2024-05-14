<?php

include "conexion.php";

$nombre=$_POST["nombre"];
$usuario=$_POST["usuario"];
$correo=$_POST["correo"];
$telefono=$_POST["telefono"];
$password=$_POST["contrasena"];

$query="INSERT INTO usuarios(nombre, correo, usuario, contrasena, telefono) VALUES ('$nombre','$correo','$usuario','$password','$telefono')";

$ejecutar= mysqli_query($conexion,$query);

if ($ejecutar) {
   echo'
   <script>
    alert("usuario almacenado exitosamente");
    window.location= "../login.php";
   </script>
   ';
}else {
    echo'
   <script>
    alert("usario no almacenado, intenta de nuevo");
    window.location= "../registro.php";
   </script>
   ';
}

?>