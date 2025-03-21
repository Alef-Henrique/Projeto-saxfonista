let imagens = document.querySelectorAll(".imagem");

for (let i = 0; i < imagens.length; i++) {
    let descricao = imagens[i].nextElementSibling; // Descrição
    let infoExtra = descricao.nextElementSibling; // Informação extra

    // Evento de passar o mouse (hover)
    imagens[i].addEventListener("mouseover", function() {
        descricao.style.opacity = "1"; // Mostra a descrição
    });

    // Evento de tirar o mouse
    imagens[i].addEventListener("mouseout", function() {
        descricao.style.opacity = "0"; // Esconde a descrição
    });

    // Evento de clique
    imagens[i].addEventListener("click", function() {
        // Alterna entre mostrar e esconder a informação extra
        if (infoExtra.style.display === "none" || infoExtra.style.display === "") {
            infoExtra.style.display = "block";
        } else {
            infoExtra.style.display = "none";
        }
    });
}
function enviarWhatsApp(event) {
    event.preventDefault(); 

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let assunto = document.querySelector(".select-eventos").value; // 
    let mensagem = "";

    if(assunto === "aniversários") {
        mensagem = `Olá, me chamo ${nome} ${sobrenome} e fiquei interessado(a) em saber mais sobre o seu trabalho referente a ${assunto}.`;
        
    }else if(assunto ==="casamentos"){
        mensagem = `Olá, me chamo ${nome} ${sobrenome} e fiquei interessado(a) em saber mais sobre o seu trabalho referente a ${assunto}.`;
    }
    else if(assunto ==="restaurantes"){
        mensagem = `Olá, me chamo ${nome} ${sobrenome} e fiquei interessado(a) em saber mais sobre o seu trabalho referente a ${assunto}.`;
    }
    else if(assunto ==="corporativos"){
        mensagem = `Olá, me chamo ${nome} ${sobrenome} e fiquei interessado(a) em saber mais sobre o seu trabalho referente a ${assunto}.`;
    }

     else {
        mensagem = `Olá, meu nome é ${nome} ${sobrenome} e gostaria de saber mais sobre o seu trabalho por gentileza.`;
    }

    let numeroWhatsApp = "5522988354135";

    let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.querySelector('.overlay-menu')
let btnFechar = document.getElementById('btn'); // Botão de fechar
let btnFecharSessao = document.getElementById('btn-fechar-lista')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.style.display = "block"; // Exibir o overlay ao abrir o menu
});

btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = "none"; // Ocultar o overlay ao fechar o menu
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = "none"; 
});
btnFecharSessao.addEventListener('click',() =>{
    menu.classList.remove('abrir-menu');
    overlay.style.display = "none";
})

document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const header = document.getElementById("header");

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Rolando para baixo, esconde o header
            header.style.top = "0"; // Ajuste conforme necessário
        } else {
            // Rolando para cima, exibe o header
            header.style.top = "-200px";
        }

        lastScrollTop = scrollTop;
    });
});
