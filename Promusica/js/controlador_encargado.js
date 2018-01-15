
function registrarEncargado() {
    var encargado = {
        metodo: "insert",
        Nombre_Encargado: $('#Nombre_Encargado').val(),
        Apellido1_Encargado: $('#Apellido1_Encargado').val(),
        Cedula_Encargado: $('#Cedula_Encargado').val(),
        Tel_Encargado: $('#Tel_Encargado').val(),
        Parentesco: $('#Parentesco').val(),

    }
    $.ajax({
        url: "../php/encargado.php",
        method: "POST",
        data: encargado,
        error: function (xhr) {
            console.log(xhr.statusText);
        },
        success: function (encargado_response) {
            if (encargado_response == "Exito") {
                $('#mensaje').text("Encargado registrado con éxito!");
            } else {
                $('#mensaje').text("Error al registrar encargado");
            }
        }
    });
    return false;
}

    function listaEncargados() {
        var encargado = {
            metodo: "selectAll",
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
                    var fila = document.createElement("tr");
                    //nombre
                    var Nombre_Encargado = document.createElement("td");
                    $(Nombre_Encargado).text(encargado.Nombre_Encargado);
                    $(fila).append(Nombre_Encargado);
                    //apellidos
                    var Apellido1_Encargado = document.createElement("td");
                    $(Apellido1_Encargado).text(encargado.Apellido1_Encargado);
                    $(fila).append(Apellido1_Encargado);
                    //correo
                    var Cedula_Encargado= document.createElement("td");
                    $(Cedula_Encargado).text(encargado.Cedula_Encargado);
                    $(fila).append(Cedula_Encargado);
                    //telefono
                    var Tel_Encargado = document.createElement("td");
                    $(Tel_Encargado).text(encargado.Tel_Encargado);
                    $(fila).append(Tel_Encargado);
                    //parentesco
                    var Parentesco = document.createElement("td");
                    $(Parentesco).text(encargado.Parentesco);
                    $(fila).append(Parentesco);
                    var editar = document.createElement("td");
                    $(editar).html("<a href=\"editarEncargado.html?" + encargado.id_Encargado + "\">Editar</a>");
                    $(editar).addClass("botonTabla");
                    $(fila).append(editar);
                    //borrar

                });
            }
        });
        return false;
    }

    function traerID(id_Encargado) {
        var encargado = {
            metodo: "selectID",
            id_Encargado: id_Encargado
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
                $('#Nombre_Encargado').val(encargado.Nombre_Encargado);
                $('#Apellido1_Encargado').val(encargado.Apellido1_Encargado);
                $('#Cedula_Encargado').val(encargado.Cedula_Encargado);
                $('#Tel_Encargado').val(encargado.Tel_Encargado);
                $('#Parentesco').val(encargado.Parentesco);
            }
        });
        return false;
    }

    function editar() {
        var encargado = {
            metodo: "update",
            Nombre_Encargado: $('#Nombre_Encargado').val(),
            Apellido1_Encargado: $('#Apellido1_Encargado').val(),
            Cedula_Encargado: $('#Cedula_Encargado').val(),
            Tel_Encargado: $('#Tel_Encargado').val(),
            Parentesco: $('#Parentesco').val()

        };
        console.log(JSON.stringify(encargado));
        $.ajax({
            url: "../php/encargado.php",
            method: "POST",
            data: encargado,
            error: function (xhr) {
                console.log(xhr.statusText);
            },
            success: function (encargado_response) {
                if (encargado_response == "Exito") {
                    $('#mensaje').text("Encargado editado con éxito!");
                } else {
                    $('#mensaje').text("Error al editar encargado");
                }
            }
        });
        return false;
    }

