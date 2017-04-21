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
	echo "Su consulta fue recibida, recibirá una respuesta al correo prontamente. Gracias.";
		
}

$servername = "localhost";
$username = "root";
$password = "godzuki";
$dbname = "ecpm";
 
$mysqli = new mysqli($servername,$username,$password,$dbname);
mysqli_set_charset($mysqli,"utf8");

$query=("insert into contact(name, mail, header, description) 
				values('".$nombre."', '".$correo."', '".$asunto."','".$cuerpo .'...  ATTE:'.$nombre."') ");    

	 $result = $mysqli->query($query);
  		 // echo   "Postulación recibida. pronto tendrás noticias sobre los resultados"; 
  
    
?>