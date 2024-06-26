<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="login.css">
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
                <img src="imagenes/86ce10e694556055705959c6cb82454d.jpg">
            </li>
            <li>
                <img src="imagenes/4d3190efdc8eaac5710722fb7933f612.jpg">
            </li>
            <li>
                <img src="imagenes/b40fd4d934266210abf8bd67691b85c9.jpg">
            </li>
        </ul>
    </div>

    <section class="form-register">
    <h4>Clothingsouls</h4>
    <p>Login</p>
    <form action="php/login_usuario.php" method="POST">
        <div class="input-with-icon">
            <span class="input-icon"><i class="fa-solid fa-envelope"></i></span>
            <input class="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo">
        </div>
        <div class="input-with-icon">
            <span class="input-icon"><i class="fa-solid fa-lock"></i></span>
            <input class="controls" type="password" name="contrasena" id="contrasena" placeholder="Ingrese su Contraseña">
        </div>
        <p>Estoy de acuerdo con <a href="https://www.nike.com.ar/terminos-y-condiciones#:~:text=Estas%20son%20algunas%20reglas%20b%C3%A1sicas%3A%201%20Act%C3%BAe%20con,con%20la%20Plataforma.%203%20Sea%20usted%20mismo.%20">Terminos y Condiciones</a></p>
        <button class="button-19" role="button">Iniciar Sesión</button>
    </form>
    <p><a href="registro.php">Registrarse</a></p>
</section>

</body>

</html>

