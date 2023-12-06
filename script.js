// Función que aplica el style a la opción seleccionada en el menú, y quita el que fue previamente seleccionado
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    link.className = "seleccionado";

    // Hacemos desaparecer el Menú, una vez que se ha seleccionado una opción en el modo Responsive
    var x = document.getElementById("nav");
    x.className = "";


}
// Función que muestra el menú responsive

function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

// Detecto el Scrolling para aplicar la animación de las barras de habilidades
window.onscroll = function () {
    efectoHabilidades()
};

// Función que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("uxui").classList.add("barra-progreso1");
        document.getElementById("rd").classList.add("barra-progreso2");
        document.getElementById("wd").classList.add("barra-progreso3");
        document.getElementById("rjs").classList.add("barra-progreso4");
        document.getElementById("pro").classList.add("barra-progreso5");
        document.getElementById("cre").classList.add("barra-progreso6");
        document.getElementById("di").classList.add("barra-progreso7");
        document.getElementById("re").classList.add("barra-progreso8");
        document.getElementById("fl").classList.add("barra-progreso9");
        document.getElementById("as").classList.add("barra-progreso10");
        document.getElementById("pl").classList.add("barra-progreso11");
        
    }
}