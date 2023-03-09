$(document).ready(function() {
    $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
  
      if (scrollTop > 650) {
        $('header').addClass('opaque-header');
      } else {
        $('header').removeClass('opaque-header');
      }
    });
    
    $(window).scroll(function() {
      if ($(this).scrollTop() > 650) {
        $('header').css({'opacity': '0', 'transition': 'opacity 0.5s ease-in-out'}).addClass('opaque-header').css('opacity', '1');
        $('header p').css('margin-top', '-15px');
        $('header p').css('padding-bottom', '7px');
        $('header .container').css('margin-bottom', '3px');
      } else {
        $('header').css({'opacity': '0', 'transition': 'opacity 0.5s ease-in-out'}).removeClass('opaque-header').css('opacity', '1');
        $('header p').css('margin-top', '0');
      }
    });
  });

  window.onscroll = function() {scrollFunction()};

  document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar el botón
    const backToTopButton = document.querySelector("#back-to-top");
  
    // Agregar un evento scroll para mostrar u ocultar el botón
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            // Si la posición de desplazamiento es mayor a 500, mostrar el botón
            backToTopButton.style.opacity = "1";
            backToTopButton.style.pointerEvents = "auto";
            backToTopButton.style.visibility = "visible";
        } else {
            // De lo contrario, ocultar el botón
            backToTopButton.style.opacity = "0";
            backToTopButton.style.pointerEvents = "none";
            backToTopButton.style.visibility = "hidden";
        }
    });
  });