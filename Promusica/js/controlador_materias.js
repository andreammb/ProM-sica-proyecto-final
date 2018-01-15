function ProfesorEnMaterias() {
    var profesor = {
        metodo: "selectAll"
    }
    $.ajax({
        url: "../php/profesor.php",
        method: "POST",
        data: profesor,
        error: function (xhr) {
            console.log(xhr.statusText);
        },
        success: function (profesor_response) {
            var profesor = JSON.parse(profesor_response);
            profesor.map(function (profesor) {
                $('<option>').val(profesor.id_Profesor).text(encargado.nombre_Profesor + encargado.apellido1_Profesor).appendTo('#listaProfesor');
            });
        }
    });
    return false;
}
function registrarMateria() {
    var materia = {
        metodo: "insert",
        descripcion_Materia: $('#descripcion_Materia').val(),
        calificacion_Materia: $('#calificacion_Materia').val(),
        horario_Materia: $('#horario_Materia').val(),
        periodo_Materia: $('#periodo_Materia').val(),
        mensualidad_Materia: $('#mensualidad_Materia').val(),
        profesor: $('#listaProfesor').val()
    }
    $.ajax({
        url: "../php/materia.php",
        method: "POST",
        data: profesor,
        error: function (xhr) {
            console.log(xhr.statusText);
        },
        success: function (materia_response) {
            if (materia_response == "Exito") {
                $('#mensaje').text("Materia registrada con éxito!");
            } else {
                $('#mensaje').text("Error al registrar materia");
            }
        }
    });
    return false;
}

function listaMaterias() {
    var profesor = {
        metodo: "selectAll",
    }
    $.ajax({
        url: "../php/materia.php",
        method: "POST",
        data: profesor,
        error: function (xhr) {
            console.log(xhr.statusText);
        },
        success: function (materia_response) {
            var materia = JSON.parse(materia_response);
            materia.map(function (materia) {
                var fila = document.createElement("tr");
                //nombre
                var descripcion_Materia = document.createElement("td");
                $(descripcion_Materia).text(materia.descripcion_Materia);
                $(fila).append(descripcion_Materia);
                //apellidos
                var calificacion_Materia = document.createElement("td");
                $(calificacion_Materia).text(materia.calificacion_Materia);
                $(fila).append(calificacion_Materia);
                //correo
                var horario_Materia= document.createElement("td");
                $(horario_Materia).text(materia.horario_Materia);
                $(fila).append(horario_Materia);
                //telefono
                var periodo_Materia = document.createElement("td");
                $(periodo_Materia).text(materia.periodo_Materia);
                $(fila).append(periodo_Materia);
                //mensualidad_Materia
                var mensualidad_Materia = document.createElement("td");
                $(mensualidad_Materia).text(materia.mensualidad_Materia);
                $(fila).append(mensualidad_Materia);
                var profesor = document.createElement("td");
                $(profesor).text(estudiante.profesor);
                $(fila).append(profesor);

                var editar = document.createElement("td");
                $(editar).html("<a href=\"editarMateria.html?" + materia.id_Materia + "\">Editar</a>");
                $(editar).addClass("botonTabla");
                $(fila).append(editar);
                //borrar
                $('#listaMateria').append(fila);
            });
        }
    });
    return false;
}

function traerID(id_Materia) {
    var materia = {
        metodo: "selectID",
        id_Materia: id_Materia
    }
    $.ajax({
        url: "../php/materia.php",
        method: "POST",
        data: materia,
        error: function (xhr) {
            console.log(xhr.statusText);
        },
        success: function (materia_response) {
            var materia = JSON.parse(materia_response);
            $('#descripcion_Materia').val(materia.descripcion_Materia);
            $('#calificacion_Materia').val(materia.calificacion_Materia);
            $('#horario_Materia').val(materia.horario_Materia);
            $('#periodo_Materia').val(materia.periodo_Materia);
            $('#mensualidad_Materia').val(materia.mensualidad_Materia);
            $('#listaProfesor').val(estudiante.id_Profesor);
            $('#id_Materia').val(estudiante.id_Materia);
        }
    });
    return false;
}

function editar() {
    var materia = {
        metodo: "update",
        descripcion_Materia: $('#descripcion_Materia').val(),
        calificacion_Materia: $('#calificacion_Materia').val(),
        horario_Materia: $('#horario_Materia').val(),
        periodo_Materia: $('#periodo_Materia').val(),
        mensualidad_Materia: $('#mensualidad_Materia').val(),
        profesor: $('#listaProfesor').val(),
        id_Materia: $('#id_Materia').val(),

    }
    console.log(JSON.stringify(materia));
    $.ajax({
        url: "../php/materia.php",
        method: "POST",
        data: materia,
        error: function (xhr) {
            console.log(xhr.statusText);
        },
        success: function (profesor_response) {
            if (profesor_response == "Exito") {
                $('#mensaje').text("Materia editada con éxito!");
            } else {
                $('#mensaje').text("Error al editar materia");
            }
        }
    });
    return false;
}

