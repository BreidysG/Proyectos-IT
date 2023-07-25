<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Verifica el token de reCAPTCHA
  $recaptchaToken = $_POST['recaptchaToken'];
  $secretKey = "6LfeXk8nAAAAAEXfQ-Vzi6KTpx97M6ATu-1jWR5A";
  $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secretKey}&response={$recaptchaToken}");
  $response = json_decode($response);

  if ($response->success && $response->score >= 0.5) {
    // El token es válido y la puntuación es aceptable, continúa con el procesamiento del formulario

    // Obtén los datos del formulario
    $nombre = $_POST["nombre"];
    $email = $_POST["correo"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];
    $header = "Enviado desde la página de Proyectos IT";
    $to = "breidysgutierrez8@gmail.com";
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
  } else {
    // El token es inválido o la puntuación es baja, muestra un mensaje de error o toma la acción correspondiente
    echo "<script>alert('¡Error de reCAPTCHA!');</script>";
    echo "<script>setTimeout(\"location.href='index.html'\", 1000);</script>";
  }
}
?>
