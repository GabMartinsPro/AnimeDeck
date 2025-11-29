document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Dados Fictícios (Simulando a API) ---
    // ATENÇÃO: Use URLs de imagens reais ou placeholders. 
    // Aqui estou usando um serviço de placeholder (via.placeholder)
    const topShowsData = [
        { id: 1, title: "Jujutsu Kaisen", imageUrl: "assets/media/img/jujutsu.jpg" },
        { id: 2, title: "Bleach: TYBW", imageUrl: "assets/media/img/bleach.jpg" },
        { id: 3, title: "Spy x Family", imageUrl: "assets/media/img/Spy.jpg" },
        { id: 4, title: "Chainsaw Man", imageUrl: "assets/media/img/Chainsaw.jpg" },
        { id: 5, title: "Attack on Titan", imageUrl: "assets/media/img/attackontitan.jpg" },
        { id: 6, title: "One Piece", imageUrl: "assets/media/img/onepiece.jpg" },
        { id: 7, title: "Frieren: Beyond", imageUrl: "assets/media/img/Frieren.jpg" },
        { id: 8, title: "Oshi no Ko", imageUrl: "assets/media/img/oshinoko.jpg" },
        { id: 9, title: "My Hero Academia", imageUrl: "assets/media/img/Myhero.jpg" },
        { id: 10, title: "Hunter x Hunter", imageUrl: "assets/media/img/hunterxhunter.jpg" },
        { id: 11, title: "Demon Slayer: Arco da vontade inabalável", imageUrl: "assets/media/img/demonslayer.jpg"},
        { id: 12, title: "Dragon Ball:Clássico", imageUrl:"assets/media/img/dragonball.jpg"}
    ];

    // --- 2. Injeção Dinâmica de Cartões ---
    const showsGrid = document.querySelector('.shows-grid');
    const cards = []; // Array para armazenar os novos cartões

    function createShowCard(show) {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('show-card');
        cardDiv.setAttribute('data-id', show.id); 

        cardDiv.innerHTML = `
            <img src="${show.imageUrl}" alt="${show.title}">
            <p>${show.title}</p>
        `;
        return cardDiv;
    }

    topShowsData.forEach(show => {
        const card = createShowCard(show);
        showsGrid.appendChild(card);
        cards.push(card); // Adiciona ao array para o efeito de mouse
    });

    // --- 3. Efeito de Mouse (Custom Cursor) e Interatividade ---
    const cursor = document.getElementById('cursor-tracker');

    // Rastreamento do Mouse
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Animação e Clique nos Cartões (usando o array 'cards' preenchido)
    cards.forEach(card => {
        // Hover
        card.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2)'; 
            cursor.style.background = 'radial-gradient(circle, rgba(247, 56, 89, 0.5), rgba(247, 56, 89, 0))'; // Cor de destaque
        });

        // Fim do Hover
        card.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))'; // Volta ao normal
        });

        // Clique
        card.addEventListener('click', () => {
            const showTitle = card.querySelector('p').textContent;
            alert(`Preparando a página de resumo de ${showTitle}! (Esta seria a próxima tela para Trailer e Músicas)`);
            // Aqui você faria uma navegação: window.location.href = `resumo.html?id=${card.getAttribute('data-id')}`;
        });
    });

});