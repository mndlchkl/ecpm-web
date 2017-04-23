<?php

$nombre= $_POST['contact-name'];
$correo= $_POST['contact-email'];
$asunto= 'Consulta atráves de ecpm.cl';
$cuerpo=   wordwrap($_POST['contact-description'], 70);  
$destino= "ecpmsur.info@gmail.com";
$correo2= "franruiz21@gmail.com";
// $headers = "From: $nombre <$correo>\r\n"; //Quien envia?
// $headers .= "X-Mailer: PHP5\n";
// $headers .= 'MIME-Version: 1.0' . "\n";
// $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; //

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From:' . $correo. "\r\n"; // Sender's Email
$headers .= 'Cc:' . $correo2. "\r\n"; // Carbon copy to Sender
 
if( !mail($destino,$asunto,$cuerpo.'...  ATTE:'.$nombre,$headers) ){
		echo "No se pudo enviar intente contactarse al correo ".$destino.' .';
}else{
	echo "Su consulta fue ingresada, recibirá una respuesta al correo prontamente. Gracias.";
	include('conn.php');

	$stmt = $mysqli->prepare("INSERT into contact(name, mail, header, description) VALUES (?, ?, ?,?)");
			
	$stmt->bind_param("ssss", $nombre,$correo,$asunto,$cuerpo);
	$stmt->execute();
	/*if (! ($stmt->error == '') ) {
	 	echo "Error: ". $stmt->error;
	}else{
	 */
	$stmt->close();
	$mysqli->close();
			
}


 
    
?>