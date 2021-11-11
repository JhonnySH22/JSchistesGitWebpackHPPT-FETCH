import { obtenerChiste } from "./http-fetch";

const body = document.body;
let botonz, olL;
const generarHtml = () => {

    const html = `<h1 class="mt-2"> Generador de chistes </h1>
    
    <hr>    
    <button type="button" id="btnz" class="mt-5 btn btn-danger">genera nuevo chiste</button>
    
    
    <ol class="mt-2 list-group">
    
    </ol>`;

    const divF = document.createElement('div');
    divF.innerHTML = html;//dentro del div estamos creando esta estructura html
    body.append(divF);//agregamos al body ese div


}


const eventos = () => {
    botonz = document.querySelector('#btnz');
    olL = document.querySelector('ol');


    botonz.addEventListener('click', async () => {
        //puede ser asi 
        botonz.disabled = true;//para desabilitar el boton
        dibujaChiste(await obtenerChiste());
        botonz.disabled = false;

        //o asi:
        // const chiste  = await obtenerChiste();
        //     dibujaChiste(chiste);
    })
}



const dibujaChiste = (chiste) => {

    const li = document.createElement('li');
    li.innerHTML = `<strong>${chiste.id}</strong>: ${chiste.value}`;
    li.classList.add('list-group-item');
    olL.append(li);

}


export const init = () => {
    generarHtml();
    eventos();
}

