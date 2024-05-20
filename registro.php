<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Formulario Registro</title> 
    <link rel="stylesheet" href="registro.css">
    <script src="https://kit.fontawesome.com/aca9adbfbc.js" crossorigin="anonymous"></script>
    <style>
        .slider {
            margin-bottom: 50px;
        }

        .input-with-icon {
            position: relative;
        }

        .input-with-icon input {
            padding-left: 30px;
        }

        .input-icon {
            position: absolute;
            left: 8px;
            top: 50%;
            transform: translateY(-70%);
            color: #ffea00;
        }
    </style>
</head>
<body>
    <div class="slider">
        <ul>
            <li>
                <img src="imagenes/f3e2b096469868b1764c7152adbb3756.jpg">
            </li>
            <li>
                <img src="imagenes/imagen_registro1.jpg">
            </li>
            <li>
                <img src="imagenes/imagen_registro2.jpg">
            </li>
            <li>
                <img src="imagenes/b40fd4d934266210abf8bd67691b85c9.jpg">
            </li>
        </ul>
    </div>
</head>

<body>
    
<section class="form-register">
    <form action="php/registro_usuario.php" method="POST">
        <h4>Clothingsouls</h4>
        <p>Registro</p>
        <div class="input-with-icon">
            <span class="input-icon"><i class="fa-solid fa-person"></i></span>
            <input class="controls" type="text" name="nombre" id="nombre" placeholder="Nombre" required>
        </div>
        <div class="input-with-icon">
            <span class="input-icon"><i class="fa-solid fa-person"></i></span>
            <input class="controls" type="text" name="usuario" id="usuario" placeholder="usuario" required>
        </div>
        <div class="input-with-icon">
            <span class="input-icon"><i class="fa-solid fa-envelope"></i></span>
            <input class="controls" type="email" name="correo" id="email" placeholder="Gmail" required>
        </div>
        <div class="input-with-icon">
            <span class="input-icon"><i class="fa-solid fa-phone"></i></span>
            <input class="controls" type="tel" name="telefono" id="telefono" placeholder="Telefono" required>
        </div>
        <div class="input-with-icon">
            <span class="input-icon"><i class="fa-solid fa-lock"></i></span>
            <input class="controls" type="password" name="contrasena" id="Contraseña" placeholder="Contraseña" required>
        </div>
        <p>Estoy de acuerdo con <a href="https://www.nike.com.ar/terminos-y-condiciones#:~:text=Estas%20son%20algunas%20reglas%20b%C3%A1sicas%3A%201%20Act%C3%BAe%20con,con%20la%20Plataforma.%203%20Sea%20usted%20mismo.%20">Terminos y Condiciones</a></p>
        <button class="button-19" role="button">Registrar</button>
    </form>
    <p><a href="login.php">¿Ya tienes cuenta?</a></p>
</section>



</body>

</html>

