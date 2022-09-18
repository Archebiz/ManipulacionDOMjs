/* const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
console.log(input.value);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});
h1.innerHTML='Prueba de <br> modificacion';
//h1.innerText='Prueba de <br> modificacion';
//h1.style.backgroundColor='#423412';
//console.log(h1.setAttribute('class','Rojo'));
h1.classList.add('Rojo');
h1.classList.remove('titulo');

input.value=450;

const img =document.createElement('img');
img.setAttribute('src',"https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg");
img.width=250;
img.style.display='block';


pid.append(img);
pid.replaceWith(img) */
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const boton= document.querySelector('#btnCalcular');
const pResult=document.querySelector('#result');
const formulario=document.querySelector('formulario');

boton.addEventListener('click',formCalculator);

function formCalculator(event){        
    const sumaInputs=Number(input1.value)+Number(input2.value);    
    pResult.innerText="Resultado: " + sumaInputs;
}


