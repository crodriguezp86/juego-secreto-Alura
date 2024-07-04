let numeroSecreto=0; 
let intentos = 0;
let listaNumeroSecreto =[];
let numeroMaximoSecreto=parseInt(prompt("ingresa el rango de número con el que desea jugar"));

datosIniciales();
//console.log(listaNumeroSecreto);
//console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
}
function generaNumeroSecreto() {
    let generaNumero = parseInt(Math.random()*numeroMaximoSecreto)+1;
    if(listaNumeroSecreto.length == numeroMaximoSecreto){
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");
    }else{
        if(listaNumeroSecreto.includes(generaNumero)){
            return generaNumeroSecreto();
        }else{
            listaNumeroSecreto.push(generaNumero);
            return generaNumero; 
        }
    }   
}
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto) {
               //Acertamos, fue verdadera la condición
         asignarTextoElemento('p',`Asertaste el número es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos ===1 ? 'Vez' : 'Veces'}`);
         document.getElementById('reiniciar').removeAttribute('disabled');
         limpiar();
    } else {
        if (numeroUsuario > numeroSecreto) {
            let diferenciaNumeroUsuario = numeroUsuario - numeroSecreto;
            asignarTextoElemento('p',`${diferenciaNumeroUsuario >= 10 ? 'El número secreto es menor por Decenas': 'El número secreto es menor por Unidades' }`);
                        
        } else {
            let diferenciaNumeroSecreto = numeroSecreto - numeroUsuario;
            asignarTextoElemento('p',`${diferenciaNumeroSecreto >= 10 ? 'El número secreto es mayor por Decenas' : 'El número secreto es mayor por Unidades'}`);
                   }
        //Incrementamos el contador cuando no acierta
        intentos ++;
        limpiar();

}
}   
function datosIniciales(){
 asignarTextoElemento("h1","el Juego de Carlos");
 asignarTextoElemento("p",`Indica un Número de 1 al ${numeroMaximoSecreto}`);
 numeroSecreto = generaNumeroSecreto();
 intentos =1;
}

function juegoNuevo(){
      //alert('pruebaaa');
      limpiar();
      datosIniciales();
      //console.log(numeroSecreto);
      document.getElementById('reiniciar').setAttribute('disabled',true);
}
function limpiar() {
    document.querySelector('#valorUsuario').value='';  
}
