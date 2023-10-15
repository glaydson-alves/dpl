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

// function preview(id){
//     document.querySelector("#"+id).addEventListener("change", function(e){
//         if e.target.files.length == 0){
//             return
//         }
//         let file = e.target.files[0]
//         let url = url.createObjectURL(file)
//         document.querySelector("#"+id+"-preview div").innerText = file.name
//         document.querySelector("#"+id+"-preview img").src = file.name
//     })
// }

// preview("file")

let img = document.getElementById("img")
let input = document.getElementById("img1")

input.onchange = (e) =>{
    if(input.files[0]){
    img.src = URL.createObjectURL(input.files[0])
    img.style.borderRadius = "10%"
    img.style.width = "100px"}
}


