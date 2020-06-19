$( document ).ready(function() {
/* Hacer menú fixed y que cambien estilos*/
(function() {
	window.onscroll = function() {scrollFunction()};
	var menuSup = document.getElementById("bqtopbar");
	var navegacion = document.getElementById("navegacion");
	function scrollFunction() {
	  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
	    navegacion.style.height = "60px";
	    menuSup.style.position = "absolute";
	    menuSup.style.top = "-9999px";
	    menuSup.style.left = "-9999px";
	    $('div[class*="subpaginas"]').css("top", "59px");
	    $(".cabeceraProducto").css("top", "60px");
	  } else {
	  	menuSup.style.position = "unset";
	    $('div[class*="subpaginas"]').css("top", "124px");
	  	if($(window).width() < 767) { 
		    navegacion.style.height = "70px";
	  	} else if ($(window).width() > 767 && $(window).width() < 1199) {
		    navegacion.style.height = "90px";
		    $(".cabeceraProducto").css("top", "90px");
	  	} else if ($(window).width() > 1199) {
	  		navegacion.style.height = "90px";
		    $(".cabeceraProducto").css("top", "125px");
	  	} 
	  }
	}
})();
/* Cambiar urls de la select pais*/  
(function() {
	jQuery(".select_paises").on("change", function(){
		  window.location = jQuery(this).val();
	});
})();
/*Botonoes mañana/tarde modal contratar*/
(function() {
	$("#recibirLlamadaCntc > div > input, #recibirLlamadaCntr > div > input").click(function(){
		if (!$(this).hasClass('activo')) {
				$(this).toggleClass("activo");
				$(this).parent().siblings().children().toggleClass("activo");
		}
	});
})();
/* Mostrar/esconder el menú al pinchar en la hamburguesa */
(function() {
	$("#navigationButton").click(function(){
		$(this).parents("body").toggleClass("contraerBody");
		$(this).parents("header").toggleClass("contraerBody");
		$(this).parents("#navegacion").toggleClass("cambioPosition");
		$(this).parents("#navegacion").next().toggleClass("expanderNav");
		$(this).parents("body").find(".cabeceraProducto").toggleClass("cambioPosition");
	});
})();
/* Mostrar/esconder el menú al pinchar fuera de la hamburguesa */
(function() {
	$("#cerrarMenu").click(function(){
		$(this).parents("body").toggleClass("contraerBody");
		$(this).parents("header").toggleClass("contraerBody");
		$(this).parents("body").find("#navegacion").toggleClass("cambioPosition");
		$(this).parents("#navegacionN2").toggleClass("expanderNav");
		$(this).parents("body").find(".cabeceraProducto").toggleClass("cambioPosition");
	});
	$(".select-label").click(function(){
		$(this).next().addClass("active");
	});
})();
/* Pasar del primer nivel de páginas al siguiente nivel en el menú hamburguesa */
(function() {
	$(".primerNivelN2 nav li").click(function(){
		var clasesPag = $(this).attr('class');
		var claseSplit = clasesPag.split("-");
		var indice = parseInt(claseSplit[1].charAt(0));
		$(this).parents(".primerNivelN2").addClass("inactivo");
		$(this).parents(".primerNivelN2").siblings(".subNivel-"+indice).addClass("activo");
	});
})();
/* Ocultar el 2ndo nivel del menú hamburgersa y mostrar el primero */
(function() {
	$(".paginaPrimerN").click(function(){
		$(this).parent().removeClass("activo");
		$(this).parent().siblings(".primerNivelN2").removeClass("inactivo");
	});
})();
/* Slider aplicaciones*/
(function() {
	$( ".slider > .slide" ).each(function( index ) {
	    var numItems = $(this).find('.card-item').length;
	    var indice = 1;
	    if(numItems == 3) {
	    	$(this).find(".owl-stage-outer").addClass("trio");
	    } else if (numItems == 2){
	    	$(this).find(".owl-stage-outer").addClass("duo")
	    } else if (numItems == 1){
	    	$(this).find(".owl-stage-outer").addClass("solitario")
	    }
	});
})();
/****** Mostrar el slider con la pestaña correspondiente *******/
(function() {
	$(".tabsApps li").click(function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		var idTab = $(this).attr('id');
		var idTabSplit = idTab.split("-");
		var indiceTab= idTabSplit[1];
		$(this).parents(".tabsApps").siblings().removeClass("active");
		$(this).parents(".tabsApps").siblings("#opcionesSlider-"+indiceTab).addClass("active");
	});
})();
/****** OWL plugin *******/
(function() {
	$(".owl-carousel").owlCarousel({
        center: false,
        loop: false,
        dots: true,
        nav: true,
        autoWidth: true,
        items: 1,
    });
})();
/****** Cambiar color a las tarjetas del acordeon de preguntas frecuentes *****/
(function() {
	$("#accordionFaq .card").click(function() {
	    $(this).addClass("mostrar");
	    $(this).siblings().removeClass("mostrar");
	});
})();
/****** Cambiar pestaña activa menú ficha de producto *****/
(function() {
	$(".cabeceraProducto ul li").click(function() {
	    $(this).addClass("active");
	    $(this).siblings().removeClass("active");
	});
})();
/******* Añadir atributo para los botones del carrusel owl *****/
(function() {
	$(".owl-dot").attr("aria-label", "boton slider");
})();
});
