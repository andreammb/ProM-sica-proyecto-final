function EncargadoEnEstudiante() {
    var encargado = {
        metodo: "selectAll"
    }
    $.ajax({
        url: "../php/encargado.php",
        method: "POST",
        data: encargado,
        error: function (xhr) {
            console.log(xhr.statusText);
        },
        success: function (encargado_response) {
            var encargado = JSON.parse(encargado_response);
            encargado.map(function (encargado) {
                $('<option>').val(encargado.id_Encargado).text(encargado.Nombre_Encargado + encargado.Apellido1_Encargado).appendTo('#listaEncargado');
            });
        }
    });
    return false;
}
function registrarEstudiante() {
    var estudiante = {
        metodo: "insert",
        Nombre_estudiante: $('#Nombre_estudiante').val(),
        Apellido1_estudiante: $('#Apellido1_estudiante').val(),
        Tel_estudiante: $('#Tel_estudiante').val(),
        Email_estudiante: $('#Email_estudiante').val(),
        Direccion_estudiante: $('#Direccion_estudiante').val(),
        Experiencia_estudiante: $('#Experiencia_estudiante').val(),
        lugar_experiencia: $('#lugar_experiencia').val(),
        cursos_anteriores: $('#cursos_anteriores').val(),
        encargado: $('#listaEncargado').val()
    };
    $.ajax({
        url: "../php/estudiante.php",
        method: "POST",
        data: encargado,
        error: function (xhr) {
            console.log(xhr.statusText);
        },
        success: function (estudiante_response) {
            if (estudiante_response == "Exito") {
                $('#mensaje').text("Estudiante registrado con éxito!");
            } else {
                $('#mensaje').text("Error al registrar estudiante");
            }
        }
    });
    return false;
}

    function listaEstudiantes() {
        var encargado = {
            metodo: "selectAll",
        };
        $.ajax({
            url: "../php/estudiante.php",
            method: "POST",
            data: encargado,
            error: function (xhr) {
                console.log(xhr.statusText);
            },
            success: function (estudiante_response) {
                var estudiante = JSON.parse(estudiante_response);
                estudiante.map(function (estudiante) {
                    var fila = document.createElement("tr");
                    //nombre
                    var Nombre_estudiante = document.createElement("td");
                    $(Nombre_estudiante).text(estudiante.Nombre_estudiante);
                    $(fila).append(Nombre_estudiante);
                    //apellidos
                    var Apellido1_estudiante = document.createElement("td");
                    $(Apellido1_estudiante).text(estudiante.Apellido1_estudiante);
                    $(fila).append(Apellido1_estudiante);
                    //correo
                    var Email_estudiante= document.createElement("td");
                    $(Email_estudiante).text(estudiante.Email_estudiante);
                    $(fila).append(Email_estudiante);
                    //telefono
                    var Tel_estudiante = document.createElement("td");
                    $(Tel_estudiante).text(estudiante.Tel_estudiante);
                    $(fila).append(Tel_estudiante);
                    //direccion
                    var Direccion_estudiante = document.Direccion_estudiante("td");
                    $(provincia).text(estudiante.provincia);
                    $(fila).append(provincia);
                    //experiencia
                    var Experiencia_estudiante = document.createElement("td");
                    $(Experiencia_estudiante).text(estudiante.Experiencia_estudiante);
                    $(fila).append(Experiencia_estudiante);
                    //lugar experiencia
                    var lugar_experiencia = document.createElement("td");
                    $(lugar_experiencia).text(estudiante.lugar_experiencia);
                    $(fila).append(lugar_experiencia);
                    //lugar experiencia
                    var cursos_anteriores = document.createElement("td");
                    $(cursos_anteriores).text(estudiante.cursos_anteriores);
                    $(fila).append(cursos_anteriores);
                    var encargado = document.createElement("td");
                    $(encargado).text(estudiante.encargado);
                    $(fila).append(encargado);
                    //editar
                    var editar = document.createElement("td");
                    $(editar).html("<a href=\"editarEstudiante.html?" + estudiante.id_estudiante + "\">Editar</a>");
                    $(editar).addClass("botonTabla");
                    $(fila).append(editar);
                    //pegar la fila a la tabla
                    $('#listaEstudiantes').append(fila);
                });
            }
        });
        return false;
    }

    function traerID(id_estudiante) {
        var estudiante = {
            metodo: "selectID",
            id_estudiante: id_estudiante
        }
        $.ajax({
            url: "../php/estudiante.php",
            method: "POST",
            data: estudiante,
            error: function (xhr) {
                console.log(xhr.statusText);
            },
            success: function (estudiante_response) {
                var estudiante = JSON.parse(estudiante_response);
                $('#Nombre_estudiante').val(estudiante.Nombre_estudiante);
                $('#Apellido1_estudiante').val(estudiante.Apellido1_estudiante);
                $('#Tel_estudiante').val(estudiante.Tel_estudiante);
                $('#Email_estudiante').val(estudiante.correo);
                $('#Direccion_estudiante').val(estudiante.Direccion_estudiante);
                $('#Experiencia_estudiante').val(estudiante.Experiencia_estudiante);
                $('#lugar_experiencia').val(estudiante.lugar_experiencia);
                $('#cursos_anteriores').val(estudiante.cursos_anteriores);
                $('#listaEncargado').val(estudiante.id_Encargado);
                $('#id_estudiante').val(estudiante.id_estudiante);
            }
        });
        return false;
    }

    function editar() {
        var estudiante = {
            metodo: "update",
            Nombre_estudiante: $('#Nombre_estudiante').val(),
            Apellido1_estudiante: $('#Apellido1_estudiante').val(),
            Tel_estudiante: $('#Tel_estudiante').val(),
            correo: $('#correo').val(),
            Direccion_estudiante: $('#Direccion_estudiante').val(),
            Experiencia_estudiante: $('#Experiencia_estudiante').val(),
            lugar_experiencia: $('#lugar_experiencia').val(),
            cursos_anteriores: $('#cursos_anteriores').val(),
            cedula_Estudiante: $('#cedula_Estudiante').val(),
            ingreso_Estudiante: $('#ingreso_Estudiante').val(),
            encargado: $('#listaEncargado').val(),
            id_estudiante: $('#id_estudiante').val(),

        }
        console.log(JSON.stringify(estudiante));
        $.ajax({
            url: "../php/estudiante.php",
            method: "POST",
            data: estudiante,
            error: function (xhr) {
                console.log(xhr.statusText);
            },
            success: function (encargado_response) {
                if (encargado_response == "Exito") {
                    $('#mensaje').text("Estudiante editado con éxito!");
                } else {
                    $('#mensaje').text("Error al editar estudiante");
                }
            }
        });
        return false;
    }

