// VALIDAÇÕES PARA O PRIMEIRO FORMULARIO

function validarPrimeiroFormulario() {
    const equipe = document.getElementById('equipe1').value.trim();
    const servico = document.getElementById('servico1').value.trim();
    const veiculo = document.getElementById('veiculo1').value.trim();

if (equipe === '' || servico === '' || veiculo === '') {
     Swal.fire({icon:'error', text: 'Preencha todos os campos!'})
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
    const historicoSection = document.querySelector(".div-historico")
    const registroBottom = document.querySelector(".registro-bottom")
    inicioSection.classList.add('hidden');

    if(historicoSection.style.display = "block"){

        setTimeout(function() {
        historicoSection.style.display = 'none';
        inicioSection.style.display = 'none';
        registroBottom.style.display = 'block';
        registroSection.style.display = 'block';}, 200);
    }
}

function historico() {
    const inicioSection = document.querySelector('.inicio');
    const registroSection = document.querySelector('.registro');
    const historicoSection = document.querySelector(".div-historico");
    const registroBottom = document.querySelector(".registro-bottom");

    inicioSection.style.display = 'none';
    registroBottom.style.display = 'none';
    registroSection.style.display = 'block';
    historicoSection.style.display = 'block';
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

document.addEventListener("DOMContentLoaded", function() {
    
let imgDesligar = document.getElementById("imgDesligar");
let inputDesligar = document.getElementById("inputDesligar");

let imgBloquear = document.getElementById("imgBloquear");
let inputBloquear = document.getElementById("inputBloquear");

let imgSinalizar = document.getElementById("imgSinalizar");
let inputSinalizar = document.getElementById("inputSinalizar");

let imgTestar = document.getElementById("imgTestar");
let inputTestar = document.getElementById("inputTestar");

let imgAterrar = document.getElementById("imgAterrar");
let inputAterrar = document.getElementById("inputAterrar");

let imgProteger = document.getElementById("imgProteger");
let inputProteger = document.getElementById("inputProteger");

inputDesligar.onchange = (e) => {
    if (inputDesligar.files[0]) {
        imgDesligar.src = URL.createObjectURL(inputDesligar.files[0]);
        imgDesligar.style.borderRadius = "10%";
        imgDesligar.style.width = "100px";
    }
}


inputBloquear.onchange = (e) => {
    if (inputBloquear.files[0]) {
        imgBloquear.src = URL.createObjectURL(inputBloquear.files[0]);
        imgBloquear.style.borderRadius = "10%";
        imgBloquear.style.width = "100px";
    }
}

inputSinalizar.onchange = (e) => {
    if (inputSinalizar.files[0]) {
        imgSinalizar.src = URL.createObjectURL(inputSinalizar.files[0]);
        imgSinalizar.style.borderRadius = "10%";
        imgSinalizar.style.width = "100px";
    }
}

inputTestar.onchange = (e) => {
    if (inputTestar.files[0]) {
        imgTestar.src = URL.createObjectURL(inputTestar.files[0]);
        imgTestar.style.borderRadius = "10%";
        imgTestar.style.width = "100px";
    }
}

inputAterrar.onchange = (e) => {
    if (inputAterrar.files[0]) {
        imgAterrar.src = URL.createObjectURL(inputAterrar.files[0]);
        imgAterrar.style.borderRadius = "10%";
        imgAterrar.style.width = "100px";
    }
}

inputProteger.onchange = (e) => {
    if (inputProteger.files[0]) {
        imgProteger.src = URL.createObjectURL(inputProteger.files[0]);
        imgProteger.style.borderRadius = "10%";
        imgProteger.style.width = "100px";
    }
}

// Adição de validação ao botão "Enviar"
document.getElementById("btnEnviar").addEventListener("click", function (e) {
    e.preventDefault();

    const missingFields = [];

    if (!inputDesligar.files[0]) {
        missingFields.push("Desligar");
    }
    if (!inputBloquear.files[0]) {
        missingFields.push("Bloquear");
    }
    if (!inputSinalizar.files[0]) {
        missingFields.push("Sinalizar");
    }
    if (!inputTestar.files[0]) {
        missingFields.push("Testar");
    }
    if (!inputAterrar.files[0]) {
        missingFields.push("Aterrar");
    }
    if (!inputProteger.files[0]) {
        missingFields.push("Proteger");
    }

    if (missingFields.length > 0) {
        Swal.fire({
            icon: 'error',
            text:"Os seguintes campos de imagem estão vazios: " + missingFields.join(", ")})
    } else {
        // Todos os campos de imagem estão preenchidos; você pode prosseguir com o envio do formulário.
        
        const equipe1 = document.getElementById("equipe1").value;
        const servico1 = document.getElementById("servico1").value;
        const veiculo1 = document.getElementById("veiculo1").value;

        // Obter a data e hora atual
        const dataHora = new Date();

        // Criar um objeto com os dados a serem salvos
        const dadosFormulario1 = {
            equipe: equipe1,
            servico: servico1,
            veiculo: veiculo1,
            dataHora: dataHora.toLocaleString()
        };

        // Obter o histórico atual do localStorage (se existir)
        const historico = JSON.parse(localStorage.getItem("historico")) || [];

        // Adicionar os novos dados ao histórico
        historico.push(dadosFormulario1);

        // Salvar o histórico atualizado no localStorage
        localStorage.setItem("historico", JSON.stringify(historico));

        // Atualizar a exibição do histórico na página
        atualizarHistorico();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Enviado com sucesso!',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(()=>{
            window.location.href = "../..";
        }, 1500)
    }
});
});
atualizarHistorico();

function atualizarHistorico() {
    const historico = JSON.parse(localStorage.getItem("historico")) || [];

    const listaHistorico = document.getElementById("lista-historico");
    listaHistorico.innerHTML = "";

    for (const item of historico) {
        if (item) {
            listaHistorico.innerHTML += `
                <li>
                    <span>Equipe: ${item.equipe}</span>
                    <span>Serviço: ${item.servico}</span>
                    <span>Veículo: ${item.veiculo}</span>
                    <span>Data e Hora: ${item.dataHora}</span>
                </li>`;
        }
    }
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

// PARA EXIBIR A SECTION HISTORICO


function mostrarHistorico() {
    
    const registroBottom = document.querySelector('.registro-bottom');
    registroBottom.style.display = 'none';

    
    const divHistorico = document.querySelector('.div-historico');
    divHistorico.style.display = 'block';
}

const registroBtnHistorico = document.querySelector('.registroBtnHistorico');
registroBtnHistorico.addEventListener('click', mostrarHistorico);

const btnIniciar = document.querySelector('.btn-iniciar');
btnIniciar.addEventListener('click', iniciar);






