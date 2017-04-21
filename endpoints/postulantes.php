<?php

$servername = "localhost";
$username = "root";
$password = "godzuki";
$dbname = "ecpm";

$mysqli = new mysqli($servername,$username,$password,$dbname);
mysqli_set_charset($mysqli,"utf8");
 

$q = "select * from aplicant"; 
       //ESTE ARRAY ALMACENARA LOS REGISTROS

$datos = array();
        //REALIZA CONSULTA
        if($result = $mysqli->query($q)){    
            //ITERAMOS TODOS LOS REGISTROS DEVUELTOS Y LLENAMOS EL ARRAY
            while($row = $result->fetch_array(MYSQLI_ASSOC)){
                $datos[] = $row;             
            } 
           echo  json_encode($datos);           
        }
        $result->close();
        $mysqli->close();
?>