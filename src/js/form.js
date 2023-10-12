function validarPrimeiroFormulario() {
    const equipe = document.getElementById('equipe1').value.trim();
    const servico = document.getElementById('servico1').value.trim();
    const veiculo = document.getElementById('veiculo1').value.trim();

if (equipe === '' || servico === '' || veiculo === '') {
    alert('Preencha todos os campos do primeiro formulário.');
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

// function iniciar() {
//     // Obtém as seções
//     const inicioSection = document.querySelector('.inicio');
//     const registroSection = document.querySelector('.registro');

//     // Adiciona a classe "hidden" para ocultar a seção de início
//     inicioSection.classList.add('hidden');

//     // Exibe a seção de registro
//     registroSection.style.display = 'block';

//     // Aguarda um pequeno intervalo antes de remover a seção de início
//     setTimeout(function() {
//         inicioSection.style.display = 'none';
//     }, 500); // 500ms para corresponder à transição de 0.5s
// }
