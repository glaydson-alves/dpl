function validarPrimeiroFormulario() {
    const equipe = document.getElementById('equipe1').value.trim();
    const servico = document.getElementById('servico1').value.trim();
    const veiculo = document.getElementById('veiculo1').value.trim();

if (equipe === '' || servico === '' || veiculo === '') {
     Swal.fire('Preencha todos os campos!')
} else {
    document.getElementById('primeiro-formulario').style.animation = 'slideToLeft 0.5s ease forwards';
    setTimeout(function() {
    document.getElementById('primeiro-formulario').style.display = 'none';
    document.getElementById('segundo-formulario').style.display = 'block';
    document.getElementById('segundo-formulario').style.animation = 'slideFromRight 0.5s ease forwards'; // Adiciona animação para o segundo formulário
    }, 500);
}
}

function voltarPrimeiroFormulario() {
document.getElementById('segundo-formulario').style.animation = 'slideToRight 0.5s ease forwards';
setTimeout(function() {
    document.getElementById('segundo-formulario').style.display = 'none';
    document.getElementById('primeiro-formulario').style.display = 'block';
    document.getElementById('primeiro-formulario').style.animation = 'slideFromLeft 0.5s ease forwards'; // Adiciona animação para o primeiro formulário ao voltar
}, 500);
}

function iniciar() {
    const inicioSection = document.querySelector('.inicio');
    const registroSection = document.querySelector('.registro');

    inicioSection.classList.add('hidden');

    setTimeout(function() {
    inicioSection.style.display = 'none';
    registroSection.style.display = 'block';}, 200);
}

function voltarParaInicio() {
    const inicioSection = document.querySelector('.inicio');
    const registroSection = document.querySelector('.registro');
    setTimeout(function() {
    inicioSection.style.display = 'block';
    registroSection.style.display = 'none';
    }, 200);

    document.getElementById('segundo-formulario').style.animation = 'slideToRight 0.5s ease forwards';

    setTimeout(function() {
        document.getElementById('segundo-formulario').style.display = 'none';
        document.getElementById('primeiro-formulario').style.display = 'block';
        document.getElementById('primeiro-formulario').style.animation = 'slideFromLeft 0.5s ease forwards'; 
    }, 500);
}

// PARA O SEGUNDO FORMULARIO, PRE-VIZUALIZAÇÃO DAS IMAGENS

let imgDesligar = document.getElementById("imgDesligar")
let inputDesligar = document.getElementById("inputDesligar")

let imgBloquear = document.getElementById("imgBloquear")
let inputBloquear = document.getElementById("inputBloquear")

let imgSinalizar = document.getElementById("imgSinalizar")
let inputSinalizar = document.getElementById("inputSinalizar")

let imgTestar = document.getElementById("imgTestar")
let inputTestar = document.getElementById("inputTestar")

let imgAterrar = document.getElementById("imgAterrar")
let inputAterrar = document.getElementById("inputAterrar")

let imgProteger = document.getElementById("imgProteger")
let inputProteger = document.getElementById("inputProteger")

inputDesligar.onchange = (e) =>{
    if(inputDesligar.files[0]){
    imgDesligar.src = URL.createObjectURL(inputDesligar.files[0])
    imgDesligar.style.borderRadius = "10%"
    imgDesligar.style.width = "100px"}
}

inputBloquear.onchange = (e) =>{
    if(inputBloquear.files[0]){
    imgBloquear.src = URL.createObjectURL(inputBloquear.files[0])
    imgBloquear.style.borderRadius = "10%"
    imgBloquear.style.width = "100px"}
}

inputSinalizar.onchange = (e) =>{
    if(inputSinalizar.files[0]){
    imgSinalizar.src = URL.createObjectURL(inputSinalizar.files[0])
    imgSinalizar.style.borderRadius = "10%"
    imgSinalizar.style.width = "100px"}
}

inputTestar.onchange = (e) =>{
    if(inputTestar.files[0]){
    imgTestar.src = URL.createObjectURL(inputTestar.files[0])
    imgTestar.style.borderRadius = "10%"
    imgTestar.style.width = "100px"}
}

inputAterrar.onchange = (e) =>{
    if(inputAterrar.files[0]){
    imgAterrar.src = URL.createObjectURL(inputAterrar.files[0])
    imgAterrar.style.borderRadius = "10%"
    imgAterrar.style.width = "100px"}
}

inputProteger.onchange = (e) =>{
    if(inputProteger.files[0]){
    imgProteger.src = URL.createObjectURL(inputProteger.files[0])
    imgProteger.style.borderRadius = "10%"
    imgProteger.style.width = "100px"}
}
// Aqui mostra os alerts dos detalhes de cada Regra de Ouro

const btnDetalhesDesligar = document.getElementById("btnDetalhesDesligar")
const btnDetalhesBloquear = document.getElementById("btnDetalhesBloquear")
const btnDetalhesSinalizar = document.getElementById("btnDetalhesSinalizar")
const btnDetalhesTestar = document.getElementById("btnDetalhesTestar")
const btnDetalhesAterrar = document.getElementById("btnDetalhesAterrar")
const btnDetalhesProteger = document.getElementById("btnDetalhesProteger")


btnDetalhesDesligar.addEventListener("click", function() {
    Swal.fire({
        title: 'Desligar',
        text: 'Consiste em desligar o circuito onde irão trabalhar.',
        imageUrl: '../img/desligar.jpg',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
})

btnDetalhesBloquear.addEventListener("click", function() {
    Swal.fire({
        title: 'Bloquear',
        text: 'Consiste em impedir que o circuito seja religado.',
        imageUrl: '../img/bloquear.jpg',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
})

btnDetalhesSinalizar.addEventListener("click", function() {
    Swal.fire({
        title: 'Sinalizar',
        text: 'Instalar alerta visual de que há pessoas trabalhando naquele circuito.',
        imageUrl: '../img/sinalizar.jpg',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
})

btnDetalhesTestar.addEventListener("click", function() {
    Swal.fire({
        title: 'Testar',
        text: 'Resalizar teste no circuito para verificar se o local de trabalho(circuito) está realmente sem passagem de energia.',
        imageUrl: '../img/testar.jpg',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
})

btnDetalhesAterrar.addEventListener("click", function() {
    Swal.fire({
        title: 'Aterrar',
        text: 'Instalar aterramento temporário à montande e à jusante para reforçar a condição de segurança em casos de energização acidental do circuito.',
        imageUrl: '../img/aterrar.jpg',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
})

btnDetalhesProteger.addEventListener("click", function() {
    Swal.fire({
        title: 'Proteger',
        text: 'Consiste em isolar suferfícies energizadas que estejam próximas ao eletricista ou oferecem risco de indução ou contato acidental com o circuito desenergizado.',
        imageUrl: '../img/proteger.jpg',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
})