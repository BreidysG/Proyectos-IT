
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
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
}
?>