<?php
    $destinatario = `info@proyectos-it.com`;
    $nombre = $_POST[`nombre`];
    $correo = $_POST[`correo`];
    $asunto = $_POST[`asunto`];
    $mensaje = $_POST[`mensaje`];

    $header = "Enviado desde la página de Proyectos IT";

    $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;
    
    mail($destinatario, $asunto, $mensaje, $header);
    
    echo "<script>alert(`¡Correo enviado exisotamente!`)</script>";
    echo "<script> setTimeout(\"location.href=`index.html`\", 1000)</script>";
?>