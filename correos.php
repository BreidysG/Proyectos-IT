<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
  $token = $_POST["token"];
  $action = $_POST["action"];
  
  $recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify';
  $recaptchaSecretKey = '6LfeXk8nAAAAAEXfQ-Vzi6KTpx97M6ATu-1jWR5A';
  
  $recaptchaData = array(
    'secret' => $recaptchaSecretKey,
    'response' => $token
  );
  
  $recaptchaOptions = array(
    'http' => array(
      'header' => "Content-type: application/x-www-form-urlencoded\r\n",
      'method' => 'POST',
      'content' => http_build_query($recaptchaData)
    )
  );
  
  $recaptchaContext = stream_context_create($recaptchaOptions);
  $recaptchaResult = file_get_contents($recaptchaUrl, false, $recaptchaContext);
  $recaptchaResponseData = json_decode($recaptchaResult, true);

  print_r($recaptchaResponseData);
  
  /*if ($recaptchaResponseData['success'] && $recaptchaResponseData['score'] >= 0.5) {
    $nombre = $_POST["nombre"];
    $email = $_POST["correo"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];
    $header = "Enviado desde la página de Proyectos IT";
  
    $to = "breidysgutierrez8@gmail.com";
    $message = "Nombre: $nombre\n";
    $message .= "Correo Electrónico: $correo\n";
    $message .= "Mensaje: $mensaje\n";
    
    if (mail($to, $asunto, $message, $header)) {
      echo "<script>alert(`¡Correo enviado exisotamente!`)</script>";
      echo "<script> setTimeout(\"location.href=`index.html`\", 1000) </script>";
    } 
  } else {
    echo "<script>alert(`¡Captcha Invalido!`)</script>";
    echo "<script> setTimeout(\"location.href=`index.html`\", 1000) </script>";
  }
  


  /*if($datos["success"] == 1 && $datos["score"] >=0.5){
    $nombre = $_POST["nombre"];
    $email = $_POST["correo"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];
    $header = "Enviado desde la página de Proyectos IT";
  
    $to = "breidysgutierrez8@gmail.com";
    $message = "Nombre: $nombre\n";
    $message .= "Correo Electrónico: $correo\n";
    $message .= "Mensaje: $mensaje\n";
    
    if (mail($to, $asunto, $message, $header)) {
      echo "<script>alert(`¡Correo enviado exisotamente!`)</script>";
      echo "<script> setTimeout(\"location.href=`index.html`\", 1000) </script>";
    } 
  } else {
    echo "<script>alert(`¡Captcha Invalido!`)</script>";
    echo "<script> setTimeout(\"location.href=`index.html`\", 1000) </script>";

  }*/
}
?>