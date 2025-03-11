//=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-= ANIMAÇÃO MUDAR PALAVRAS NA BARRA DE PESQUISA =-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=//

const livros = [
    "Harry Potter?",
    "Diário de um Banana?",
    "Percy Jackson?",
    "O Pequeno Príncipe?"
];

let indice = 0;
let charIndex = 0;
let deletando = false;
const input = document.getElementById("campo-busca");

function digitarNomeLivro() {
    const livroAtual = livros[indice];

    if (!deletando) {
        input.setAttribute("placeholder", "O que você quer ler hoje? " + livroAtual.substring(0, charIndex++));
        if (charIndex > livroAtual.length) {
            deletando = true;
            setTimeout(digitarNomeLivro, 5000);
            return;
        }
    } else {
        // Apaga letras uma por uma
        input.setAttribute("placeholder", "O que você quer ler hoje? " + livroAtual.substring(0, charIndex--));
        if (charIndex === 0) {
            deletando = false;
            indice = (indice + 1) % livros.length;
        }
    }

    setTimeout(digitarNomeLivro, deletando ? 50 : 200); // Velocidade de digitação/apagamento
}

digitarNomeLivro();

//=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-= FAZER O CABEÇALHO SUBIR =-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=//

let lastScroll = 0;
const header = document.querySelector("header");
const scrollThreshold = 10; // Quantidade mínima para detectar rolagem

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll + scrollThreshold) {
        // Rolando para baixo: esconde o cabeçalho
        header.style.top = "-100px"; // Esconde suavemente
    } else if (currentScroll < lastScroll - scrollThreshold) {
        // Rolando para cima: mostra o cabeçalho
        header.style.top = "0";
    }

    lastScroll = currentScroll;
});

//=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-= MUDAR A IMAGEM DO CARROSSEL (MENU) =-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=//

let index = 0;
        const images = document.querySelector(".carousel-images");
        const dots = document.querySelectorAll(".dot");
        let interval;

        function moveSlide(n) {
            index = n;
            images.style.transform = `translateX(-${index * 100}%)`;
            updateDots();
            resetTimer();
        }
        
        function updateDots() {
            dots.forEach(dot => dot.classList.remove("active"));
            dots[index].classList.add("active");
        }
        
        function nextSlide() {
            index = (index + 1) % dots.length;
            moveSlide(index);
        }
        
        function startAutoSlide() {
            interval = setInterval(nextSlide, 10000);
        }
        
        function resetTimer() {
            clearInterval(interval);
            startAutoSlide();
        }
        
        startAutoSlide();
        updateDots();

//=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-= AVALIAR LIVRO ESTRELAS (LIVRO-INFORMA) =-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=//

const stars = document.querySelectorAll('.star');

// Quando passar o mouse sobre uma estrela
stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
        // Adiciona a classe "hovered" para todas as estrelas até a estrela atual
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.add('hovered');
            } else {
                s.classList.remove('hovered');
            }
        });
    });

    // Quando o mouse sai da estrela, remove a classe "hovered" de todas
    star.addEventListener('mouseout', () => {
        stars.forEach(s => s.classList.remove('hovered'));
    });
});


