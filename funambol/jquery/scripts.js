$( document ).ready(function() {
	$(".multiple").click(function(){
		$(this).parents(".inicioLicencias").toggleClass("mostrarBloque");
		$(this).parents(".inicioLicencias").next(".asignacionMultiple").toggleClass("mostrarBloque");
        $(".paginacion").removeClass("mostrarBloque"); 
	});
	$(".asignacionIndividual .multiple").click(function(){
		$(this).parents(".asignacionIndividual").toggleClass("mostrarBloque");
		$(this).parents(".asignacionIndividual").prev(".asignacionMultiple").toggleClass("mostrarBloque");
        $(".paginacion").removeClass("mostrarBloque"); 
	});
	$(".individual").click(function(){
		$(this).parents(".inicioLicencias").toggleClass("mostrarBloque");
		$(this).parents(".asignarLicencias").find(".asignacionIndividual").toggleClass("mostrarBloque");
        if($(".infoSinUsuarios").hasClass("ocultarBloque")) {
            $(".paginacion").addClass("mostrarBloque");
        }
	});
	$(".asignacionMultiple .cerrar").click(function(){
		$(this).parents(".asignacionMultiple").toggleClass("mostrarBloque");
		$(this).parents(".asignacionMultiple").prev(".inicioLicencias").toggleClass("mostrarBloque");
        $(".paginacion").removeClass("mostrarBloque");
	});
    /*** Mostrar la tabla y ocultar el texto que aparecerá cuando no haya licencias ***/
    $(".anadirUsuario .botonVerde").click(function(){
        $(this).parents("tr").removeClass("editandoFila");
        $(this).parents("tr").siblings(".cabeceraTabla").css("visibility","visible");
        $(this).parents(".anadirUsuario").hide();
        $(".infoSinUsuarios").addClass("ocultarBloque");
        $(this).parents("thead").next().show();
        $(".paginacion").addClass("mostrarBloque");
        if($("#nuevoUsuario").hasClass("deshabilitado")) {
            $("#nuevoUsuario").removeClass("deshabilitado").removeAttr("disabled");
        }
    });
	/*** Cambiar estado checkboxes ***/
	$("#checkBoxGeneral").change(function() {
        if (this.checked) {
            $(".checkIndividual").each(function() {
                this.checked=true;
            });
        } else {
            $(".checkIndividual").each(function() {
                this.checked=false;
            });
        }
    });
	/*** Colorear todas las filas al pinchar en checkTodos ***/
	$('thead input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            $(this).parents("thead").next("tbody").children().addClass("filaSeleccionada");
            $(this).parents("thead").next("tbody").find(".custom-checkbox").find(".custom-control-label").addClass("checkboxSeleccionado");
            $(this).parents("thead").find("#nuevoUsuario").addClass("deshabilitado").attr("disabled", true);
            $(this).parents("thead").find("#editarUsuario").removeClass("deshabilitado").removeAttr("disabled").click(function(){
                $(this).parents(".opcionesGenerales").siblings(".editarUsuarioCascada").show();
                $(this).parents(".opcionesGenerales").siblings(".editarUsuarioCascada").addClass("editandoFila");
                $("tbody tr.filaSeleccionada").removeClass("editandoFila");
            });
            $(this).parents("thead").find("#eliminarUsuario").removeClass("deshabilitado").removeAttr("disabled");
        }
        else if($(this).prop("checked") == false){
            $(this).parents("thead").next("tbody").children().removeClass("filaSeleccionada");
            $(this).parents("thead").next("tbody").find(".custom-checkbox").find(".custom-control-label").removeClass("checkboxSeleccionado");
            $(this).parents("thead").find("#nuevoUsuario").removeClass("deshabilitado").removeAttr("disabled");
            $(this).parents("thead").find("#editarUsuario").addClass("deshabilitado").attr("disabled", true);
            $(this).parents("thead").find("#eliminarUsuario").addClass("deshabilitado").attr("disabled", true);
        }
    });
    /*** Gestionar el checkbox de cada fila ***/
    var contadorClicks = 0;
    $('tbody input[type="checkbox"]').click(function(){
        var checkbox = $(this);
        console.log(checkbox.siblings());
        if($(this).prop("checked") == true){
            contadorClicks ++;
            $(this).parents("tr").find(".custom-checkbox").find(".custom-control-label").addClass("checkboxSeleccionado");
            $(this).parents("tr").addClass("filaSeleccionada");
            $("#nuevoUsuario").attr("disabled", true).addClass("deshabilitado");
            $("#editarUsuario").removeAttr("disabled").removeClass("deshabilitado").click(function(){
                console.log("eritz");
                $(checkbox).parents("tr.filaSeleccionada").addClass("editandoFila");
                $("thead #editarUsuario").parent().siblings().children().addClass("deshabilitado").attr("disabled", true);
                $(this).parents(".opcionesGenerales").siblings(".editarUsuarioCascada").hide();
            });
            $("#eliminarUsuario").removeAttr("disabled").removeClass("deshabilitado");
        }
        else if($(this).prop("checked") == false){
            contadorClicks --;
            $(this).parents("tr").find(".custom-checkbox").find(".custom-control-label").removeClass("checkboxSeleccionado");
            $(this).parents("tr").removeClass("filaSeleccionada");
            if(contadorClicks == 0) {
                $("#nuevoUsuario").removeAttr("disabled").removeClass("deshabilitado");
                $("#editarUsuario").attr("disabled", true).addClass("deshabilitado");
                $("#eliminarUsuario").attr("disabled", true).addClass("deshabilitado");
            }
        }
    });
    /*** Añadir usuario nuevo ***/
    $('#nuevoUsuario').click(function(){
        $(this).parents(".opcionesGenerales").siblings(".anadirUsuario").show();
    });
    /*** Cerrar/interrumpir añadir nuevo usuario ***/
    $('.anadirUsuario .cerrarEdicion').click(function(){
        $(this).parents(".anadirUsuario").hide();
        $(this).parents("tr").removeClass("editandoFila");
        $("#nuevoUsuario").removeClass("deshabilitado").removeAttr("disabled");
    });
    /*** Activar botones guardar cambios añadir usuario ***/
    var contadorClickRadiosU = 0;
    $("table .anadirUsuario input[type='radio']" ).click(function(){
    	contadorClickRadiosU++;
    	if(contadorClickRadiosU == 1) {
			$(this).parents(".anadirUsuario").find(".botonVerde").removeClass("disabled");
			$(this).parents(".anadirUsuario").find(".botonVerde").removeAttr("disabled");
    	}
	});
    /*** Activar botones guardar cambios editar usuarios cascada ***/
    var contadorClickRadiosE = 0;
    $("table .editarUsuarioCascada input[type='radio']" ).click(function(){
        contadorClickRadiosE++;
        if(contadorClickRadiosE == 1) {
            $(this).parents(".editarUsuarioCascada").find(".botonVerde").removeClass("disabled");
            $(this).parents(".editarUsuarioCascada").find(".botonVerde").removeAttr("disabled");
        }
    });
    /*** Cerrar/interrumpir editar en cascada ***/
    $('.editarUsuarioCascada .cerrarEdicion').click(function(){
        $(this).parents("tr").hide();
        $(this).parents("tr").removeClass("editandoFila");
        $("#nuevoUsuario").removeClass("deshabilitado").removeAttr("disabled");
        $("#editarUsuario").addClass("deshabilitado").attr("disabled", true);
        $("#eliminarUsuario").addClass("deshabilitado").attr("disabled", true);
    });

	/*** Editar usuario único ***/
	$("tbody .editarUsuarioUnico").click(function(){
		$(this).parents("tr").addClass("editandoFila");
        $(this).parents("tbody").prev().find("#nuevoUsuario").addClass("deshabilitado").attr("disabled", true);
	});
	/*** Cerrar/interrumpir editar usuario ***/
    $('tbody .cerrarEdicion').click(function(){
        $(this).parents("tr").removeClass("editandoFila").removeClass("filaSeleccionada");
        $("#nuevoUsuario").removeClass("deshabilitado").removeAttr("disabled");
        $("#editarUsuario").addClass("deshabilitado").attr("disabled", true);
        $("#eliminarUsuario").addClass("deshabilitado").attr("disabled", true);
        $(this).parents("tr").find(".custom-checkbox").find(".custom-control-label").removeClass("checkboxSeleccionado");
        console.log($(this).parents("tr").find(".custom-control-input").prop("checked"));
        $(this).parents("tr").find(".custom-control-input").prop("checked", false);
        console.log($(this).parents("tr").find(".custom-control-input").prop("checked"));
    });
    /*** Guardar cambios edición usuario único ***/
    $('tbody .botonVerde').click(function(){
        $(this).parents("tr").removeClass("editandoFila");
        $(this).parents("tr").find(".activando").show().delay(4000).queue(function(next){
				$(this).hide();
				next();
			});;
        $(this).parents("tr").find(".activando").next().addClass("ocultarBloque").delay(4000).queue(function(next){
                $(this).removeClass("ocultarBloque");
                next();
            });;
    });
    /*** Mostrar los tooltips ***/
    $('.nuevoUsuario').click(function(event){
        if ($('#nuevoUsuario').attr('disabled') == 'disabled') {
            $(this).parents("table").find(".editandoFila").find(".tooltiptextIzq").addClass("mostrarTooltip").delay(2500).queue(function( next ){
                $(this).removeClass('mostrarTooltip'); 
                next();
            });;
        }
    });

    $('.editarUsuario').click(function(event){
        if ($('#editarUsuario').attr('disabled') == 'disabled') {
            $(this).parents("table").find(".editandoFila").find(".tooltiptextIzq").addClass("mostrarTooltip").delay(2500).queue(function( next ){
                $(this).removeClass('mostrarTooltip'); 
                next();
            });
        }

        if(($('#editarUsuario').attr('disabled') == 'disabled') && !($(this).parent().siblings(".nuevoUsuario").children().hasClass("deshabilitado"))) {
            $(this).parents("table").find(".tooltiptextSup").addClass("mostrarTooltip").delay(2500).queue(function( next ){
                $(this).removeClass('mostrarTooltip'); 
                next();
            });
        }
    });

    $('.eliminarUsuario').click(function(event){
        if ($('#eliminarUsuario').attr('disabled') == 'disabled') {
            $(this).parents("table").find(".editandoFila").find(".tooltiptextIzq").addClass("mostrarTooltip").delay(2500).queue(function( next ){
                $(this).removeClass('mostrarTooltip'); 
                next();
            });
        }

        if(($('#eliminarUsuario').attr('disabled') == 'disabled') && !($(this).parent().siblings(".nuevoUsuario").children().hasClass("deshabilitado"))) {
            console.log("borrar");
            $(this).parents("table").find(".tooltiptextSup").addClass("mostrarTooltip").delay(2500).queue(function( next ){
                $(this).removeClass('mostrarTooltip'); 
                next();
            });
        }
    });
    /*** Paginación ***/
    $(".paginate_button").click(function(){
        $(this).siblings().removeClass("current");
        $(this).addClass("current");
    });	
});
