<?php
$username = "root";
$password = "";
$servername = "127.0.0.1";
$dbname = "mydb";
$conn = new mysqli($servername, $username, $password, $dbname);

if($_POST["metodo"] == "selectID"){
    $sql = "select * from profesor where id_Profesor ='".$_POST["id_Profesor"]."'";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        echo json_encode(mysqli_fetch_assoc($result));
    }else{
        echo "Error";
    }
}else if($_POST["metodo"] == "selectAll"){
    $sql = "select * from profesor";
    $profesor = array();
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        while($row = mysqli_fetch_assoc($result)){
            array_push($profesor, $row);
        }
        echo json_encode($profesor);
    }else{
        echo "Error";
    }
}else{

    if($_POST["metodo"] == "insert"){
        $sql = "insert into profesor (nombre_Profesor,apellido1_Profesor,tel_Profesor,direccion_Profesor,email_Profesor) values ('"
        .$_POST["nombre_Profesor"]."', '"
        .$_POST["apellido1_Profesor"]."', '"
        .$_POST["tel_Profesor"]."', '"
        .$_POST["direccion_Profesor"]."', '"
        .$_POST["email_Profesor"]."', '";
    }else if($_POST["metodo"] == "update"){
        $sql = "update profesor set
        nombre_Profesor='".$_POST["nombre_Profesor"]."',
        apellido1_Profesor='".$_POST["apellido1_Profesor"]."',
        tel_Profesor='".$_POST["tel_Profesor"]."',
        direccion_Profesor='".$_POST["direccion_Profesor"]."',
        email_Profesor='".$_POST["email_Profesor"]."',
        where id_Profesor = ".$_POST["id_Profesor"];
    }

    if($conn->query($sql) === TRUE){
        echo "Exito";
    }else{
        echo "Error";
    }

}

$conn->close();
?>