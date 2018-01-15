
function registrarProfesor() {
    var profesor = {
        metodo: "insert",
        nombre_Profesor: $('#nombre_Profesor').val(),
        apellido1_Profesor: $('#apellido1_Profesor').val(),
        tel_Profesor: $('#tel_Profesor').val(),
        direccion_Profesor: $('#direccion_Profesor').val(),
        email_Profesor: $('#email_Profesor').val(),

    }
    $.ajax({
        url: "../php/profesor.php",
        method: "POST",
        data: profesor,
        error: function (xhr) {
            console.log(xhr.statusText);
        },
        success: function (profesor_response) {
            if (profesor_response == "Exito") {
                $('#mensaje').text("Profesor registrado con éxito!");
            } else {
                $('#mensaje').text("Error al registrar Profesor");
            }
        }
    });
    return false;
}

function listaProfesores() {
    var profesor = {
        metodo: "selectAll",
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
                var fila = document.createElement("tr");
                //nombre
                var nombre_Profesor = document.createElement("td");
                $(nombre_Profesor).text(profesor.nombre_Profesor);
                $(fila).append(nombre_Profesor);
                //apellidos
                var apellido1_Profesor = document.createElement("td");
                $(apellido1_Profesor).text(profesor.apellido1_Profesor);
                $(fila).append(apellido1_Profesor);
                //correo
                var tel_Profesor= document.createElement("td");
                $(tel_Profesor).text(profesor.tel_Profesor);
                $(fila).append(tel_Profesor);
                //telefono
                var direccion_Profesor = document.createElement("td");
                $(direccion_Profesor).text(profesor.direccion_Profesor);
                $(fila).append(direccion_Profesor);
                //email_Profesor
                var email_Profesor = document.createElement("td");
                $(email_Profesor).text(profesor.email_Profesor);
                $(fila).append(email_Profesor);
                var editar = document.createElement("td");
                $(editar).html("<a href=\"editarProfesor.html?" + profesor.id_Profesor + "\">Editar</a>");
                $(editar).addClass("botonTabla");
                $(fila).append(editar);
                //pegar la fila a la tabla
                $('#listaProfesor').append(fila);
            });
        }
    });
    return false;
}

function traerID(id_Profesor) {
    var profesor = {
        metodo: "selectID",
        id_Profesor: id_Profesor
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
            $('#nombre_Profesor').val(profesor.nombre_Profesor);
            $('#apellido1_Profesor').val(profesor.apellido1_Profesor);
            $('#tel_Profesor').val(profesor.tel_Profesor);
            $('#direccion_Profesor').val(profesor.direccion_Profesor);
            $('#email_Profesor').val(profesor.email_Profesor);
        }
    });
    return false;
}

function editar() {
    var profesor = {
        metodo: "update",
        nombre_Profesor: $('#nombre_Profesor').val(),
        apellido1_Profesor: $('#apellido1_Profesor').val(),
        tel_Profesor: $('#tel_Profesor').val(),
        direccion_Profesor: $('#direccion_Profesor').val(),
        email_Profesor: $('#email_Profesor').val()

    }
    console.log(JSON.stringify(profesor));
    $.ajax({
        url: "../php/profesor.php",
        method: "POST",
        data: profesor,
        error: function (xhr) {
            console.log(xhr.statusText);
        },
        success: function (profesor_response) {
            if (profesor_response == "Exito") {
                $('#mensaje').text("Profesor editado con éxito!");
            } else {
                $('#mensaje').text("Error al editar profesor");
            }
        }
    });
    return false;
}

