let menuVisible = false;
// funcion que oculata y muetra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // oculta el menu una vez que se seleccione
    document.getElementById("nav").classList="";
    menuVisible = false;
}

// funtion que aplica animaciones a las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progresso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("python");
        habilidades[2].classList.add("database");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("php");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("tbEquipo");
        habilidades[7].classList.add("creativo");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("Management");
    }
}

// efecto de scrolling para para aplicar la animacion   
window.onscroll=function(){
    efectoHabilidades();

}