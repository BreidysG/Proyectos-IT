<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  define("CLAVE", "6LfeXk8nAAAAAEXfQ-Vzi6KTpx97M6ATu-1jWR5A");
  $token = $_POST["g-recaptcha-response"];
  $action = $_POST["action"];
  
  $cu = curl_init();
  curl_setopt($cu, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
  curl_setopt($cu, CURLOPT_POST, 1);
  curl_setopt($cu, CURLOPT_POSTFIELDS, http_build_query(array("secret" => CLAVE, "response" => $token)));
  curl_setopt($cu, CURLOPT_RETURNTRANSFER, true);
  $response = curl_exec($cu);
  curl_close($cu);
  
  $datos = json_decode($response, true);
  print_r($datos);


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