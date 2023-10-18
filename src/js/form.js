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

let img = document.getElementById("img")
let input = document.getElementById("img1")

input.onchange = (e) =>{
    if(input.files[0]){
    img.src = URL.createObjectURL(input.files[0])
    img.style.borderRadius = "10%"
    img.style.width = "100px"}
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