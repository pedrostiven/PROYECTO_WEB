<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

include 'php/conexion.php';

$user_id = $_SESSION['user_id'];

// Consultamos la información del usuario
$consulta = mysqli_query($conexion, "SELECT nombre, apellido, telefono, direccion, municipio, departamento, codigo_postal FROM informacion_usuarios WHERE id = '$user_id'");
$usuario = mysqli_fetch_assoc($consulta);

$nombre = $usuario['nombre'];
$apellido = $usuario['apellido'];
$telefono = $usuario['telefono'];
$direccion = $usuario['direccion'];
$municipio = $usuario['municipio'];
$departamento = $usuario['departamento'];
$codigo_postal = $usuario['codigo_postal'];

mysqli_close($conexion);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZONA DE PAGO</title>
    <link rel="stylesheet" href="zona_pagos.css">
</head>

<body>

    <div class="parte_superior">
        <img src="imagenes/logofinal.png" alt="logo" class="imagen">
        <h1 class="texto">clothingsouls</h1>
        <img src="imagenes/candado.png" alt="compra" class="imagen_compra">
        <h5 class="texto_compra">Compra protegida</h5>
    </div>

    <br><br><br>

    <div class="contenedor_principal">
        <h4 class="texto_izquierdo">Información de Contacto</h4>
        <h6 class="texto_derecho">Correo: <?php echo htmlspecialchars($_SESSION['user_name']); ?></h6>
        <h6 class="texto_derecho">Nombre: <?php echo htmlspecialchars($nombre . ' ' . $apellido); ?></h6>
        <h6 class="texto_derecho">Telefono: <?php echo htmlspecialchars($telefono); ?></h6>
    </div>

    <hr class="linea_1">

    <div class="contenedor_secundario">
        <h4 class="texto_izquierdo_1">Información de envío</h4>
        <h6 class="texto_derecho_1">Dirección: <?php echo htmlspecialchars($direccion); ?></h6>
        <h6 class="texto_derecho_1">Ubicación: <?php echo htmlspecialchars($municipio . ', ' . $departamento . ', ' . $codigo_postal); ?></h6>
        <h6 class="texto_derecho_1">Periodo de envío: Hasta 7 dias</h6>
        <a href="menu_usuario.html"><button class="boton" type="button">Modificar opciones para la entrega</button></a>
    </div>

    <hr class="linea_1">

    <div><br>
        <h3 class="texto_pago">Metódos de Pago</h3>
    </div>

    <div class="option" onclick="selectOption('contraentrega')">
        <div class="circle" id="contraentrega"></div>
        <div>Contraentrega</div>
    </div>

    <div class="option" onclick="selectOption('pse')">
        <div class="circle" id="pse"></div>
        <div>PSE</div>
    </div>

    <div class="option" onclick="selectOption('efectivo')">
        <div class="circle" id="efectivo"></div>
        <div>Efectivo</div>
    </div>

    <div class="option" onclick="selectOption('credito')">
        <div class="circle" id="credito"></div>
        <div>Tarjeta de crédito</div>
    </div>

    <div class="option" onclick="selectOption('debito')">
        <div class="circle" id="debito"></div>
        <div>Tarjeta de débito</div>
    </div>

    <br><br><br><br><br><br>

    <script>
        function selectOption(optionId) {
            const circle = document.getElementById(optionId);
            const allCircles = document.querySelectorAll('.circle');
            allCircles.forEach(circle => circle.classList.remove('selected'));
            circle.classList.add('selected');
        }
    </script>

    <div class="contenedor_tercero">
        <h4 class="texto_izquierdo_2">Resumen de compra</h4>
        <u class="texto_derecho_2">Ir a la bolsa</u>
    </div>

    <div class="contenedor_medio_imagenes">

        <div class="contenedor_medio_1">
            <img src="imagenes/camisetas_1.webp" alt="compra">
            <h4>Camiseta &nbsp Talla &nbsp S</h4>
            <h5>$130.000</h5>
        </div>

        <div>
            <h5 class="texto_izquierdo_3">Subtotal &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp $130.000</h5>
            <h5 class="texto_derecho_3">Envio (Aproximado) &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp $10.000</h5>
            <h5 class="texto_medio_3"></h5>
        </div>

        <div>
            <h3 class="texto_izquierdo_4">TOTAL &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp $140.000</h3>
            <h5 class="texto_medio_4"></h5>
            <br><br>
        </div>

        <div>
            <button class="boton_pago">
                <img src="imagenes/candado.png" alt="Candado"> COMPRAR AHORA
            </button>
            <br><br><br>
        </div>

        <div class="contenedor_informacion">

            <div class="contenedor_contacto">
                <img src="imagenes/logofinal.png" alt="cargando" class="imagen_inferior_contenedor">
            </div>

            <div class="contenedor_contacto">
                <h5 class="titulo_informacion">2024 clothingsouls</h5>
            </div>

        </div>

    </div>

</body>

</html>