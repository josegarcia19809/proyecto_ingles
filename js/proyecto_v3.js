"use strict"
const grupoTarjetas = document.querySelector(".card-group");

function crearTarjeta() {
    // Asignar valores a los diferentes elementos de la tarjeta
    const palabra = "Police";
    const significado = `
        an official organization whose job is to make people obey the law and
        to prevent and solve crime; the people who work for this organization
    `;
    const ejemplo = "Get out of the house or I'll call the <b>police</b>";
    const ipa_am = "/pəˈliːs/";
    const ipa_br = "/pəˈliːs/";
    const archivoImagen = "police.jpg";
    
    // Crear la imagen
    const imagen = document.createElement("img");
    imagen.src = `img/${archivoImagen}`;
    imagen.classList = "card-img-top";

    // <div class="card" style="width: 22rem;">
    const tarjeta = document.createElement("div");
    tarjeta.classList = "card";
    tarjeta.style.width = "22rem";

    tarjeta.appendChild(imagen);

    grupoTarjetas.appendChild(tarjeta);

    // <div class="card-body"></div> cuerpoTarjeta
    const cuerpoTarjeta = document.createElement("div");
    cuerpoTarjeta.classList = "card-body";
    tarjeta.appendChild(cuerpoTarjeta);
    
    // Agregar directamente todo lo que lleva el cuerpo de la tarjeta
    cuerpoTarjeta.innerHTML = `
        <h1>${palabra}</h1>
        <p class="card-text">${significado} </p>

        <div class="alert alert-success" role="alert">
            <p><b>Example:</b></p>
            ${ejemplo}
        </div>

        <hr>

        <div class="alert alert-primary" role="alert">
            <b>Británico:</b> ${ipa_br}
        </div>
        <div class="alert alert-danger" role="alert">
            <b>Americano:</b> ${ipa_am}
        </div>

        <a href="#" class="btn btn-primary" id="audio_br">Audio BR</a>
        <a href="#" class="btn btn-danger" id="audio_am">Audio AM</a> 
    `;
}

crearTarjeta(); // llamar a la función
crearTarjeta();
crearTarjeta();
