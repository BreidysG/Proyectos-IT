<?php
  // Verifica el token de reCAPTCHA
  $token = $_POST["token"];
  $secretKey = "6LfeXk8nAAAAAEXfQ-Vzi6KTpx97M6ATu-1jWR5A";
  $url = "https://www.google.com/recaptcha/api/siteverify";
  $encodedToken = urlencode($token);
  $encodedSecretKey = urlencode($secretKey);
  $fullUrl = "$url?secret=$encodedSecretKey&response=$encodedToken";
  $response = file_get_contents($fullUrl);
  $rtaJson = json_decode($response, true);
  $ok = $rtaJson["success"]; 
  if($ok === false){
    echo "<script>alert('¡Error de reCAPTCHA!');</script>";
    echo "<script>setTimeout(\"location.href='index.html'\", 1000);</script>";
    die();
  }

  if($rtaJson["score"] < 0.7){
    echo "<script>alert('¡Eres un robot!');</script>";
    echo "<script>setTimeout(\"location.href='index.html'\", 1000);</script>";
    die();
  }
    $nombre = $_POST["nombre"];
    $email = $_POST["correo"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];
    $header = "Enviado desde la página de Proyectos IT";
    $to = "info@proyectos-it.com";
    $message = "Nombre: $nombre\n";
    $message .= "Correo Electrónico: $email\n";
    $message .= "Mensaje: $mensaje\n";

    // Envía el correo electrónico
    if (mail($to, $asunto, $message, $header)) {
      echo "<script>alert('¡Correo enviado exitosamente!');</script>";
      echo "<script>setTimeout(\"location.href='index.html'\", 1000);</script>";
    } else {
      echo "<script>alert('¡Error al enviar el correo!');</script>";
      echo "<script>setTimeout(\"location.href='index.html'\", 1000);</script>";
    }
  
?>
