
console.log("hola funciona")

/* ESTILOS BOTON DE WSP */

document.addEventListener("DOMContentLoaded", function(event) {
  //código a ejecutar cuando el DOM está listo para recibir acciones

    const btnwsp = document.querySelector(".btnwsp");

    window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      btnwsp.classList.add("active");
    } else {
      btnwsp.classList.remove("active");
    }
    })
});

/* boton to top */
document.addEventListener("DOMContentLoaded", function(event) {
  //código a ejecutar cuando el DOM está listo para recibir acciones

    const toTop = document.querySelector(".totop");

    window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
    })
});

/* pruebas */


