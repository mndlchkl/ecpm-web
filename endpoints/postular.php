<?php
$name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$rut = $_POST['rut'];
$project = $_POST['project_name'];
$experience = $_POST['experience'];
$motivations = $_POST['motivations'];
$music_work_url = isset($_POST['music_link'])? $_POST['music_link']:"";
$music_work_url2 = isset($_POST['music_link2'])? $_POST['music_link2']:"";
$music_work_url3 = isset($_POST['music_link3'])?$_POST['music_link3']:""   ;
 
$servername = "localhost";
$username = "root";
$password = "godzuki";
$dbname = "ecpm";
 
$mysqli = new mysqli($servername,$username,$password,$dbname);
mysqli_set_charset($mysqli,"utf8");

////// REVISAR SI EL RUT YA EXISTE
$checkrut=("select * from aplicant where rut =  '".$rut."' ");
 if($result1 = $mysqli->query($checkrut)){ 
  		 $guardar =  $row_cnt = $result1->num_rows;// mysql_num_rows($result1); 
 }
//////////////////AHORA SI GUARDAR
if ($guardar==0){
	$query=("insert into aplicant(name, last_name, email, phone, rut, project_name, experience, motivations, music_work_url,music_work_url2,music_work_url3) 
				values('".$name."', '".$last_name."', '".$email."','".$phone."','".$rut."','".$project."','".$experience."', '".$motivations."', '".$music_work_url."' , '".$music_work_url2."' , '".$music_work_url3."') ");    

	 if($result = $mysqli->query($query)){ 
  		  echo   "Postulación recibida. pronto tendrás noticias sobre los resultados"; 
  		  /**ENVIAR CORREO**/
			$cuerpo= 'Postulante: '.$name.' '.$last_name   . "\r\n";
			$cuerpo.= 'Rut: '.$rut . "\r\n";
			$cuerpo.= 'Correo:'.$email . "\r\n";
			$cuerpo.= 'Telefono:'.$phone . "\r\n";
			$cuerpo.= 'Proyecto:'.$project . "\r\n"; 
			$cuerpo.= 'Experiencia:'.$experience . "\r\n";
			$cuerpo.= 'Motivaciones:'.$motivations . "\r\n";
			$cuerpo.='Links:'.$music_work_url.', '.$music_work_url2.', '.$music_work_url3 . "\r\n";

			$asunto= 'Inscripción atráves de ecpm.cl';
			$cuerpo=   wordwrap($cuerpo, 70);  
			$destino= "ecpmsur.info@gmail.com";
			$correo2= "franruiz21@gmail.com";
			 

			$headers = 'MIME-Version: 1.0' . "\r\n";
			$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
			$headers .= 'From:' . $email. "\r\n"; // Sender's Email
			$headers .= 'Cc:' . $correo2. "\r\n"; // Carbon copy to Sender
			mail($destino,$asunto,$cuerpo,$headers) ;

	 }else echo $mysqli->errno;
 }else echo "El rut ya está registrado. (Alguien registro un proyecto usando este rut.)";
 mysqli_close($mysqli);



		

?>


