<?php
$username = "root";
$password = "";
$servername = "127.0.0.1";
$dbname = "mydb";
$conn = new mysqli($servername, $username, $password, $dbname);

if($_POST["metodo"] == "selectID"){
    $sql = "select * from encargado where id_Encargado ='".$_POST["id_Encargado"]."'";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        echo json_encode(mysqli_fetch_assoc($result));
    }else{
        echo "Error";
    }
}else if($_POST["metodo"] == "selectAll"){
    $sql = "select * from encargado";
    $encargado = array();
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        while($row = mysqli_fetch_assoc($result)){
            array_push($encargado, $row);
        }
        echo json_encode($encargado);
    }else{
        echo "Error";
    }
}else{

    if($_POST["metodo"] == "insert"){
        $sql = "insert into encargado (Nombre_Encargado,Apellido1_Encargado,Cedula_Encargado,Tel_Encargado,Parentesco) values ('"
        .$_POST["Nombre_Encargado"]."', '"
        .$_POST["Apellido1_Encargado"]."', '"
        .$_POST["Cedula_Encargado"]."', '"
        .$_POST["Tel_Encargado"]."', '"
        .$_POST["Parentesco"]."', '";
    }else if($_POST["metodo"] == "update"){
        $sql = "update encargado set
        Nombre_Encargado='".$_POST["Nombre_Encargado"]."',
        Apellido1_Encargado='".$_POST["Apellido1_Encargado"]."',
        Cedula_Encargado='".$_POST["Cedula_Encargado"]."',
        Tel_Encargado='".$_POST["Tel_Encargado"]."',
        Parentesco='".$_POST["Parentesco"]."',
        where id_Encargado = ".$_POST["id_Encargado"];
    }

    if($conn->query($sql) === TRUE){
        echo "Exito";
    }else{
        echo "Error";
    }

}

$conn->close();
?>