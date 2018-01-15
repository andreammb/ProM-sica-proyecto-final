<?php
$username = "root";
$password = "";
$servername = "127.0.0.1";
$dbname = "mydb";
$conn = new mysqli($servername, $username, $password, $dbname);

if($_POST["metodo"] == "selectID"){
    $sql = "select * from estudiante where id_estudiante =".$_POST["id_estudiante"];
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        echo json_encode(mysqli_fetch_assoc($result));
    }else{
        echo "Error";
    }
}else if($_POST["metodo"] == "selectAll"){
    $sql = "select a.id_estudiante, a.Nombre_estudiante, a.Apellido1_estudiante, a.Tel_estudiante, a.Email_estudiante, a.Direccion_estudiante, a.Experiencia_estudiante, a.lugar_experiencia, a.cursos_anteriores, a.ingreso_Estudiante, a.cedula_Estudiante, b.id_Encargado, b.Nombre_Encargado, b.Apellido1_Encargado as estudiante from estudiante as a, encargado as b
    where a.ID_Encargado = b.id_Encargado";
    $estudiantes = array();
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        while($row = mysqli_fetch_assoc($result)){
            array_push($estudiantes, $row);
        }
        echo json_encode($estudiantes);
    }else{
        echo "Error";
    }
}else{

    if($_POST["metodo"] == "insert"){
        $sql = "insert into estudiante (Nombre_estudiante, Apellido1_estudiante, Tel_estudiante, Email_estudiante, Direccion_estudiante, Experiencia_estudiante, lugar_experiencia, cursos_anteriores, ingreso_Estudiante, cedula_Estudiante, id_Encargado, Nombre_Encargado, Apellido1_Encargado ) values ('"
        .$_POST["Nombre_estudiante"]."', '"
        .$_POST["Apellido1_estudiante"]."', '"
        .$_POST["Tel_estudiante"]."', '"
        .$_POST["Email_estudiante"]."', '"
        .$_POST["Direccion_estudiante"]."', '"
        .$_POST["Experiencia_estudiante"]."', '"
        .$_POST["lugar_experiencia"]."', '"
        .$_POST["cursos_anteriores"]."', '"
        .$_POST["ingreso_Estudiante"]."', '"
        .$_POST["cedula_Estudiante"]."', '"
        .$_POST["id_Encargado"]."', '"
        .$_POST["Nombre_Encargado"]."', '"
        .$_POST["Apellido1_Encargado"]."', '"

    }else if($_POST["metodo"] == "update"){
        $sql = "update estudiante set
        Nombre_estudiante='".$_POST["Nombre_estudiante"]."',
        Apellido1_estudiante='".$_POST["Apellido1_estudiante"]."',
        Tel_estudiante='".$_POST["Tel_estudiante"]."',
        Email_estudiante='".$_POST["Email_estudiante"]."',
        Direccion_estudiante='".$_POST["Direccion_estudiante"]."',
        Experiencia_estudiante='".$_POST["Experiencia_estudiante"]."',
        lugar_experiencia='".$_POST["lugar_experiencia"]."',
        cursos_anteriores='".$_POST["cursos_anteriores"]."',
        ingreso_Estudiante='".$_POST["ingreso_Estudiante"]."',
        cedula_Estudiante='".$_POST["cedula_Estudiante"]."',
        Nombre_Encargado='".$_POST["Nombre_Encargado"]."',
       where id_estudiante = ".$_POST["id_estudiante"];
    }

    if($conn->query($sql) === TRUE){
        echo "Exito";
    }else{
        echo "Error";
    }

}

$conn->close();
?>