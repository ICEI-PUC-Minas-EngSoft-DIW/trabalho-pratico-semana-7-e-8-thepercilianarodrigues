// ===========================================
// 1. DADOS (JSON) - A lista de livros
// ===========================================
const livrosParaDestaque = [
    {
        id: 1,
        titulo: "O Reino das Cinzas",
        autor: "Holly Black",
        resenha: "Uma história de fantasia imperdível, cheia de intrigas e magia.",
        descricaoCompleta: "Detalhes profundos sobre a narrativa, personagens e o mundo de fantasia criado pela autora.",
        imagemURL: "https://picsum.photos/seed/reino/200/300"
    },
    {
        id: 2,
        titulo: "A Hipótese do Amor",
        autor: "Ali Hazelwood",
        resenha: "Comédia romântica no mundo acadêmico que virou febre!",
        descricaoCompleta: "Análise completa dos clichês e da dinâmica de 'enemies-to-lovers' deste best-seller.",
        imagemURL: "https://picsum.photos/seed/hipotese/200/300"
    },
    {
        id: 3,
        titulo: "É Assim que Acaba",
        autor: "Colleen Hoover",
        resenha: "Um drama emocionante que aborda temas difíceis com sensibilidade.",
        descricaoCompleta: "Discussão sobre os temas sensíveis abordados, o impacto e a relevância do livro na literatura contemporânea.",
        imagemURL: "https://picsum.photos/seed/acaba/200/300"
    }
];

// ===========================================
// 2. LÓGICA DO INDEX.HTML (Cria vários cards)
// ===========================================
function renderizarCardsNaInicial() {
    const containerCards = document.getElementById('container-cards');
    if (!containerCards) return; 

    livrosParaDestaque.forEach(livro => {
        const card = document.createElement('article');
        card.classList.add('artigo-destaque');

        card.innerHTML = `
            <img src="${livro.imagemURL}" alt="Capa do livro ${livro.titulo}">
            <h3>${livro.titulo}</h3>
            <p>Autor(a): ${livro.autor}</p>
            <p>${livro.resenha}</p>
            <a href="detalhes.html?id=${livro.id}">Ver Mais Detalhes</a>
        `;
        containerCards.appendChild(card);
    });
}

// ===========================================
// 3. LÓGICA DO DETALHES.HTML (Exibe um único card)
// ===========================================
function renderizarDetalhesDoLivro() {
    const detalhesContainer = document.getElementById('detalhes-livro');
    if (!detalhesContainer) return; 

    const urlParams = new URLSearchParams(window.location.search);
    const livroId = parseInt(urlParams.get('id')); 
    const livro = livrosParaDestaque.find(item => item.id === livroId);

    if (livro) {
        detalhesContainer.innerHTML = `
            <img src="${livro.imagemURL}" alt="Capa do livro ${livro.titulo}" style="width: 300px; display: block; margin: 20px auto;">
            <h1>${livro.titulo}</h1>
            <h2>Por: ${livro.autor}</h2>
            <p><strong>Resumo:</strong> ${livro.resenha}</p>
            <p><strong>Detalhes Completos:</strong> ${livro.descricaoCompleta}</p>
            <a href="index.html">← Voltar para a página inicial</a>
        `;
    } else {
        detalhesContainer.innerHTML = '<h1>Livro não encontrado.</h1>';
    }
}

// ===========================================
// 4. INICIAÇÃO: O ponto de partida
// ===========================================

document.addEventListener('DOMContentLoaded', () => {
    // Tenta renderizar os cards na página inicial
    renderizarCardsNaInicial();
    
    // Tenta renderizar os detalhes na página de detalhes
    renderizarDetalhesDoLivro();
});