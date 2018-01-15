<?php
$username = "root";
$password = "";
$servername = "127.0.0.1";
$dbname = "mydb";
$conn = new mysqli($servername, $username, $password, $dbname);

if($_POST["metodo"] == "selectID"){
    $sql = "select * from materia where id_Materia ='".$_POST["id_Materia"]."'";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        echo json_encode(mysqli_fetch_assoc($result));
    }else{
        echo "Error";
    }
}else if($_POST["metodo"] == "selectAll"){
    $sql = "select a.id_Materia, a.descripcion_Materia, a.calificacion_Materia, a.horario_Materia, a.periodo_Materia, a.mensualidad_Materia, b.Profesor_id_Profesor, b.nombre_Profesor, as materia from materia as a, profesor as b
        where a.Profesor_id_Profesor = b.id_Profesor";
    $materia = array();
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        while($row = mysqli_fetch_assoc($result)){
            array_push($materia, $row);
        }
        echo json_encode($materia);
    }else{
        echo "Error";
    }
}else{

    if($_POST["metodo"] == "insert"){
        $sql = "insert into materia (descripcion_Materia, profesor, estudiante, calificacion_Materia, horario_Materia, periodo_Materia, mensualidad_Materia, Profesor_id_Profesor, nombre_Profesor, apellido1_Profesor ) values ('"
        .$_POST["descripcion_Materia"]."', '"
        .$_POST["profesor"]."', '"
        .$_POST["estudiante"]."', '"
        .$_POST["calificacion_Materia"]."', '"
        .$_POST["horario_Materia"]."', '"
        .$_POST["periodo_Materia"]."', '"
        .$_POST["mensualidad_Materia"]."', '";
        .$_POST["Profesor_id_Profesor"]."', '"
        .$_POST["nombre_Profesor"]."', '"
        .$_POST["apellido1_Profesor"]."', '"
    }else if($_POST["metodo"] == "update"){
        $sql = "update materia set
        descripcion_Materia='".$_POST["descripcion_Materia"]."',
        profesor='".$_POST["profesor"]."',
        estudiante='".$_POST["estudiante"]."',
        calificacion_Materia='".$_POST["calificacion_Materia"]."',
        horario_Materia='".$_POST["horario_Materia"]."',
        periodo_Materia='".$_POST["periodo_Materia"]."',
        mensualidad_Materia='".$_POST["mensualidad_Materia"]."',
        Profesor_id_Profesor='".$_POST["Profesor_id_Profesor"]."',
        nombre_Profesor='".$_POST["nombre_Profesor"]."',
        apellido1_Profesor='".$_POST["apellido1_Profesor"]."',
        where id_Materia = ".$_POST["id_Materia"]
        where Profesor_id_Profesor = ".$_POST["profesor"]
        where Estudiante_id_estudiante = ".$_POST["estudiante"];
    }

    if($conn->query($sql) === TRUE){
        echo "Exito";
    }else{
        echo "Error";
    }

}

$conn->close();
?>