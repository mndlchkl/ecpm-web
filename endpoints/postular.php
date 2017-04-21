<?php
$name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$rut = $_POST['rut'];
$project = $_POST['project_name'];
$experience = $_POST['experience'];
$motivations = ($_POST['motivations']!='')?$_POST['motivations']:NULL;
$music_work_url = 	($_POST['music_link']!='')? $_POST['music_link']:NULL;
$music_work_url2 =  ($_POST['music_link2'] !='') ? $_POST['music_link2']:NULL;
$music_work_url3 =  ($_POST['music_link3'] !='')?$_POST['music_link3']: NULL   ;
$ua = $_SERVER["HTTP_USER_AGENT"];     

include('conn.php');
////// REVISAR SI EL RUT YA EXISTE -- $checkrut=("select * from aplicant where rut =  '".$rut."' ");
 
if ($stmt = $mysqli->prepare("SELECT concat(name,' ',last_name) FROM aplicant WHERE rut=?")) {
    $stmt->bind_param("s", $rut);
    $stmt->execute();
    $stmt->bind_result($person);
	$stmt->fetch();
    $stmt->close();
}
 
if ($person==''){
		$stmt = $mysqli->prepare("INSERT INTO aplicant(name, last_name, email, phone, rut, project_name, experience, motivations, music_work_url,music_work_url2,music_work_url3,ua)  VALUES (?, ?, ?,?,?,?,?,?,?,?,?,?)");
		$stmt->bind_param("ssssssssssss", $name, $last_name, $email, $phone, $rut, $project, $experience, $motivations,
				 $music_work_url,$music_work_url2,$music_work_url3,$ua);
		$stmt->execute();
		if (! ($stmt->error == '') ) {
		 	echo "Error: ". $stmt->error;
		}else{
		echo "Postulación ingresada. pronto tendrás noticias sobre los resultados. Muchas gracias...";
		sendMail($name, $last_name, $email, $phone, $rut, $project, $experience, $motivations,
				 $music_work_url,$music_work_url2,$music_work_url3) ;
		}
		$stmt->close();
		$mysqli->close();
}
else {
	echo "El rut ya está registrado por ". $person.". (Ya esxiste un proyecto asociado a este rut.)";

}
	 function sendMail($name, $last_name, $email, $phone, $rut, $project, $experience, $motivations,
					 $music_work_url,$music_work_url2,$music_work_url3) {
		$cuerpo= 'Postulante: '.$name.' '.$last_name   . "\r\n";
		$cuerpo.= 'Rut: '.$rut . "\r\n";
		$cuerpo.= 'Correo:'.$email . "\r\n";
		$cuerpo.= 'Telefono:'.$phone . "\r\n";
		$cuerpo.= 'Proyecto:'.$project . "\r\n"; 
		$cuerpo.= 'Experiencia:'.$experience . "\r\n";
		$cuerpo.= 'Motivaciones:'.$motivations . "\r\n";
		$cuerpo.='Links: '.$music_work_url.', '.$music_work_url2.', '.$music_work_url3 . "\r\n";
		$asunto= 'Inscripción atráves de ecpm.cl';
		//$cuerpo=   wordwrap($cuerpo, 70);  
		$destino= "ecpmsur.info@gmail.com";
		$correo2= "franruiz21@gmail.com";
		$headers = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers .= 'From:' . $email. "\r\n"; // Sender's Email
		$headers .= 'Cc:' . $correo2. "\r\n"; // Carbon copy to Sender
		mail($destino,$asunto,$cuerpo,$headers) ; 
	}
 
?>


