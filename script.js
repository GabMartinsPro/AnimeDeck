document.addEventListener('DOMContentLoaded', () => {

    // --- Variáveis Globais e Configurações Iniciais ---
    
    // Dados Fictícios de Animes para a Grade "Top 10 Shows"
    const topShowsData = [
        // ... (Dados existentes de 1 a 12) ...
        { 
            id: 1, 
            title: "Jujutsu Kaisen", 
            sinopse: "Yuji Itadori se junta a um clube de ocultismo, mas depois de engolir um dedo amaldiçoado, ele é possuído por Sukuna, o Rei das Maldições, e se torna um feiticeiro Jujutsu.", 
            imageUrl: "assets/media/img/jujutsu.jpg",
            tagline: "O Rei das Maldições tem pressa.", 
            genero: "Ação, Sobrenatural, Escolar", 
            duracao: "2 Temporadas", 
            estudio: "MAPPA",
            watchUrl: "https://www.crunchyroll.com/series/GR9P0P52R/jujutsu-kaisen",
            trailerUrl: "https://www.youtube.com/watch?v=pkKu9hLT-t8"
        },
        { 
            id: 2, 
            title: "Bleach: TYBW", 
            sinopse: "O clímax épico da saga Bleach. Ichigo e a Soul Society enfrentam Yhwach e os Quincies na Guerra Sangrenta dos Mil Anos.", 
            imageUrl: "assets/media/img/bleach.jpg",
            tagline: "A Guerra Sangrenta dos Mil Anos começou.", 
            genero: "Ação, Fantasia, Shounen", 
            duracao: "4 Partes", 
            estudio: "Pierrot",
            watchUrl: "https://www.starplus.com/series/bleach-a-guerra-sangrenta-de-mil-anos/3F9j8Q4l1GzF",
            trailerUrl: "https://www.youtube.com/watch?v=T_g_y4d5i6E"
        },
        { 
            id: 3, 
            title: "Spy x Family", 
            sinopse: "Um espião, uma assassina e uma garota com poderes psíquicos formam uma família falsa para cumprir uma missão secreta de paz mundial.", 
            imageUrl: "assets/media/img/Spy.jpg",
            tagline: "Uma família de mentira, missões reais.", 
            genero: "Comédia, Espionagem", 
            duracao: "2 Temporadas", 
            estudio: "Wit Studio, CloverWorks",
            watchUrl: "https://www.crunchyroll.com/series/GZJH3DSW1/spy-x-family",
            trailerUrl: "https://www.youtube.com/watch?v=FjI1K8m7-4A"
        },
        { 
            id: 4, 
            title: "Chainsaw Man", 
            sinopse: "Denji, um jovem caçador de demônios, funde-se com seu demônio de estimação, Pochita, e se torna o Chainsaw Man.", 
            imageUrl: "assets/media/img/Chainsaw.jpg",
            tagline: "Sangue e serras pelo seu futuro.", 
            genero: "Ação, Fantasia Sombria", 
            duracao: "1 Temporada", 
            estudio: "MAPPA",
            watchUrl: "https://www.crunchyroll.com/series/G0XHWMDW1/chainsaw-man",
            trailerUrl: "https://www.youtube.com/watch?v=O1b6f0e2D9Y"
        },
        { 
            id: 5, 
            title: "Attack on Titan", 
            sinopse: "Em um mundo onde a humanidade vive cercada por muros para se proteger de gigantes humanóides, Eren Jager jura vingança após perder sua mãe em um ataque.", 
            imageUrl: "assets/media/img/attackontitan.jpg",
            tagline: "Pela sobrevivência da humanidade.", 
            genero: "Ação, Militar, Drama", 
            duracao: "4 Temporadas", 
            estudio: "Wit Studio, MAPPA",
            watchUrl: "https://www.crunchyroll.com/series/GR75QYRN6/attack-on-titan",
            trailerUrl: "https://www.youtube.com/watch?v=MtbK21E6lI8"
        },
        { 
            id: 6, 
            title: "One Piece", 
            sinopse: "Monkey D. Luffy e sua tripulação, os Piratas do Chapéu de Palha, navegam em busca do tesouro One Piece para que Luffy se torne o Rei dos Piratas.", 
            imageUrl: "assets/media/img/onepiece.jpg",
            tagline: "O maior tesouro do mundo te espera.", 
            genero: "Ação, Aventura, Fantasia", 
            duracao: "1000+ Episódios", 
            estudio: "Toei Animation",
            watchUrl: "https://www.crunchyroll.com/series/GRMGS9VCR/one-piece",
            trailerUrl: "https://www.youtube.com/watch?v=hS0Hq8BvY5w"
        },
        { 
            id: 7, 
            title: "Frieren: Beyond", 
            sinopse: "A elfa maga Frieren, que vive por milênios, reflete sobre a mortalidade humana e embarca em uma nova jornada após a morte de seus companheiros de aventura.", 
            imageUrl: "assets/media/img/Frieren.jpg",
            tagline: "Refletindo sobre a mortalidade.", 
            genero: "Fantasia, Slice of Life", 
            duracao: "1 Temporada", 
            estudio: "Madhouse",
            watchUrl: "https://www.crunchyroll.com/series/GGEAJYB0J/frieren-beyond-journeys-end",
            trailerUrl: "https://www.youtube.com/watch?v=34d7y7_X2hQ"
        },
        { 
            id: 8, 
            title: "Oshi no Ko", 
            sinopse: "Um médico e sua paciente renascem como os filhos gêmeos de sua idol favorita, Ai Hoshino, e mergulham no lado sombrio da indústria do entretenimento.", 
            imageUrl: "assets/media/img/oshinoko.jpg",
            tagline: "O brilho e a escuridão dos Idols.", 
            genero: "Drama, Slice of Life", 
            duracao: "1 Temporada", 
            estudio: "Doga Kobo",
            watchUrl: "https://www.hidive.com/tv/oshi-no-ko",
            trailerUrl: "https://www.youtube.com/watch?v=eKFW4u5Jd2Y"
        },
        { 
            id: 9, 
            title: "My Hero Academia", 
            sinopse: "Em um mundo de super-heróis e superpoderes (Quirks), Izuku Midoriya, nascido sem poderes, herda o poder de seu ídolo All Might e se matricula em uma escola de heróis.", 
            imageUrl: "assets/media/img/Myhero.jpg",
            tagline: "Seja um herói, custe o que custar.", 
            genero: "Ação, Superpoderes", 
            duracao: "7 Temporadas", 
            estudio: "Bones",
            watchUrl: "https://www.crunchyroll.com/series/GRVN0M1AY/my-hero-academia",
            trailerUrl: "https://www.youtube.com/watch?v=EPd71gV4tqY"
        },
        { 
            id: 10, 
            title: "Hunter x Hunter", 
            sinopse: "Gon Freecss deixa sua ilha natal para se tornar um Hunter e encontrar seu pai, embarcando em aventuras com novos amigos e desafios mortais.", 
            imageUrl: "assets/media/img/hunterxhunter.jpg",
            tagline: "A jornada para encontrar o pai.", 
            genero: "Aventura, Fantasia", 
            duracao: "148 Episódios", 
            estudio: "Madhouse",
            watchUrl: "https://www.crunchyroll.com/series/GRVR2QJ7R/hunter-x-hunter",
            trailerUrl: "https://www.youtube.com/watch?v=kU_x_T2jNws"
        },
        { 
            id: 11, 
            title: "Demon Slayer: Arco da vontade inabalável", 
            sinopse: "Tanjiro Kamado junta-se ao Corpo de Extermínio de Demônios para vingar sua família e tentar transformar sua irmã, Nezuko, de volta em humana.", 
            imageUrl: "assets/media/img/demonslayer.jpg",
            tagline: "Caçar demônios é o seu destino.", 
            genero: "Ação, Sobrenatural, Histórico", 
            duracao: "4 Temporadas", 
            estudio: "Ufotable",
            watchUrl: "https://www.crunchyroll.com/series/GR9P3V93R/demon-slayer-kimetsu-no-yaiba",
            trailerUrl: "https://www.youtube.com/watch?v=F1S3gH5y_D8"
        },
        { 
            id: 12, 
            title: "Dragon Ball:Clássico", 
            sinopse: "As aventuras do jovem Goku e seus amigos em busca das lendárias Esferas do Dragão, capazes de realizar qualquer desejo.", 
            imageUrl:"assets/media/img/dragonball.jpg",
            tagline: "Embarque na jornada em busca das Esferas.", 
            genero: "Aventura, Artes Marciais, Comédia", 
            duracao: "153 Episódios", 
            estudio: "Toei Animation",
            watchUrl: "https://www.crunchyroll.com/series/G68D7ZKKR/dragon-ball",
            trailerUrl: "https://www.youtube.com/watch?v=r0w2J36o2e8"
        }
    ];

    // Dados Fictícios de Filmes (NOVO)
    const topMoviesData = [
        { 
            id: 201, 
            title: "Jujutsu Kaisen 0", 
            sinopse: "Yuta Okkotsu, um estudante do ensino médio que ganha uma maldição poderosa, é recrutado por Gojo Satoru para a Escola Jujutsu para aprender a controlar seu poder.", 
            imageUrl: "assets/media/img/jjk0.jpg", 
            tagline: "A história do Feiticeiro Jujutsu zero.", 
            genero: "Ação, Sobrenatural, Filme", 
            duracao: "1h 45min", 
            estudio: "MAPPA",
            watchUrl: "#",
            trailerUrl: "https://www.youtube.com/watch?v=F8-fV7t1h6Q"
        },
        { 
            id: 202, 
            title: "Suzume", 
            sinopse: "Uma garota chamada Suzume ajuda um jovem misterioso a fechar portas em ruínas por todo o Japão que causam desastres.", 
            imageUrl: "assets/media/img/suzume.jpg", 
            tagline: "A história de uma jovem em um mundo de portas.", 
            genero: "Fantasia, Aventura, Romance", 
            duracao: "2h 02min", 
            estudio: "CoMix Wave Films",
            watchUrl: "#",
            trailerUrl: "https://www.youtube.com/watch?v=FgN_z9tE73o"
        },
        { 
            id: 203, 
            title: "One Piece Film Red", 
            sinopse: "A tripulação do Chapéu de Palha visita uma ilha onde Uta, a cantora mais amada do mundo, fará seu primeiro show ao vivo.", 
            imageUrl: "assets/media/img/opred.jpg", 
            tagline: "A voz que pode mudar o mundo.", 
            genero: "Ação, Música, Fantasia", 
            duracao: "1h 55min", 
            estudio: "Toei Animation",
            watchUrl: "#",
            trailerUrl: "https://www.youtube.com/watch?v=t-Pq_W_N2aY"
        }
    ];

    // Dados Fictícios de Animes da Temporada (NOVO)
    const seasonalShowsData = [
        { 
            id: 301, 
            title: "Dungeon Meshi", 
            sinopse: "Um grupo de aventureiros entra em uma masmorra para salvar a irmã de um membro e, para economizar dinheiro, decide cozinhar e comer os monstros do local.", 
            imageUrl: "assets/media/img/dungeon.jpg", 
            tagline: "Monstros: um prato cheio.", 
            genero: "Fantasia, Comédia, Culinária", 
            duracao: "1 Temporada", 
            estudio: "Trigger",
            watchUrl: "#",
            trailerUrl: "https://www.youtube.com/watch?v=l_q7pQ4M_eM"
        },
        { 
            id: 302, 
            title: "Solo Leveling", 
            sinopse: "O caçador mais fraco, Jinwoo, ganha um poder misterioso após uma experiência de quase morte e embarca em uma jornada para se tornar o mais forte.", 
            imageUrl: "assets/media/img/sololeveling.jpg", 
            tagline: "O mais fraco agora é o mais forte.", 
            genero: "Ação, Fantasia, Sobrenatural", 
            duracao: "1 Temporada", 
            estudio: "A-1 Pictures",
            watchUrl: "#",
            trailerUrl: "https://www.youtube.com/watch?v=uwjW4t0b85o"
        },
        { 
            id: 303, 
            title: "Mashle: Magic and Muscles", 
            sinopse: "Em um mundo onde a magia é tudo, um jovem sem poderes compensa sua falta de habilidade mágica com músculos e força física.", 
            imageUrl: "assets/media/img/mashle.jpg", 
            tagline: "Magia? Eu uso a força bruta.", 
            genero: "Comédia, Fantasia, Escolar", 
            duracao: "2 Temporadas", 
            estudio: "A-1 Pictures",
            watchUrl: "#",
            trailerUrl: "https://www.youtube.com/watch?v=uG7kUe0l_2Q"
        }
    ];

    // Dados Fictícios de Animes para o Hero Banner (Exclusivo)
    const bannerShowsData = [
        // ... (Dados existentes de 101 a 104) ...
        { 
            id: 101, 
            title: "Tokyo Ghoul", 
            sinopse: "Kaneki Ken se torna um meio-ghoul após um encontro com um predador. Ele deve aprender a viver no submundo de Tóquio, escondendo sua identidade.", 
            imageUrl: "assets/media/img/tokyoghoul.png", 
            tagline: "O terror noturno de Tóquio.", 
            genero: "Fantasia Sombria, Ação, Mistério", 
            duracao: "4 Temporadas", 
            estudio: "Pierrot",
            watchUrl: "#",
            trailerUrl: "#"
        },
        { 
            id: 102, 
            title: "Death Note", 
            sinopse: "Um estudante encontra um caderno que pode matar qualquer pessoa cujo nome seja escrito nele. Ele decide usá-lo para limpar o mundo do mal.", 
            imageUrl: "assets/media/img/deathnote.jpeg", 
            tagline: "A justiça está nas suas mãos.", 
            genero: "Mistério, Sobrenatural, Policial", 
            duracao: "37 Episódios", 
            estudio: "Madhouse",
            watchUrl: "#",
            trailerUrl: "#"
        },
        { 
            id: 103, 
            title: "Haikyuu!!", 
            sinopse: "O pequeno Shouyou Hinata está determinado a se tornar um grande jogador de vôlei e se junta ao clube de sua escola, superando sua altura com pura garra.", 
            imageUrl: "assets/media/img/haikyuu.jpeg", 
            tagline: "Voando alto, apesar da altura.", 
            genero: "Esportes, Comédia, Escolar", 
            duracao: "4 Temporadas", 
            estudio: "Production I.G",
            watchUrl: "#",
            trailerUrl: "#"
        },
        { 
            id: 104, 
            title: "Vinland Saga", 
            sinopse: "Thorfinn, um jovem viking em busca de vingança pela morte de seu pai, junta-se ao bando de seu assassino enquanto busca o paraíso: Vinland.", 
            imageUrl: "assets/media/img/vinlandsaga.jpg", 
            tagline: "Pela paz em um mundo de guerra.", 
            genero: "Aventura, Histórico, Drama", 
            duracao: "2 Temporadas", 
            estudio: "Wit Studio, MAPPA",
            watchUrl: "#",
            trailerUrl: "#"
        }
    ];

    // ATUALIZAÇÃO: Armazena todos os shows no localStorage
    localStorage.setItem('animeDeckShows', JSON.stringify(topShowsData.concat(bannerShowsData).concat(topMoviesData).concat(seasonalShowsData)));
    
    // Elementos da Página Principal
    // ATUALIZAÇÃO: Agora a busca só renderiza no showsGrid principal.
    const showsGrid = document.querySelector('.top-shows .shows-grid'); 
    const moviesGrid = document.getElementById('top-movies-grid'); // NOVO
    const seasonalGrid = document.getElementById('seasonal-shows-grid'); // NOVO
    let cards = []; 
    const cursor = document.getElementById('cursor-tracker');
    
    // ... (restante das variáveis de elementos) ...
    // ELEMENTOS DO BANNER 
    const searchInput = document.querySelector('.search-bar input'); 
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const bannerImage = document.querySelector('.banner-image');
    const bannerTitle = document.querySelector('.show-info h2');

    // Elementos do Modal de Animes
    const detalhesModal = document.getElementById('detalhes-modal');
    const detalhesTitulo = document.getElementById('detalhes-titulo');
    const detalhesSinopse = document.getElementById('detalhes-sinopse');
    const detalhesImagem = document.getElementById('detalhes-imagem');
    const minhaListaBtn = document.getElementById('minha-lista-btn'); 
    
    const trailerLink = document.getElementById('btn-trailer-link');
    const assistirLink = document.getElementById('btn-assistir-link'); 

    const detalhesTagline = document.getElementById('detalhes-tagline');
    const detalhesGenero = document.getElementById('detalhes-genero');
    const detalhesDuracao = document.getElementById('detalhes-duracao');
    const detalhesEstudio = document.getElementById('detalhes-estudio');

    // Elementos do Modal de Login/Registro e Perfil
    const loginRegisterModal = document.getElementById('login-register-modal');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const profileModal = document.getElementById('profile-modal');
    const settingsModal = document.getElementById('settings-modal');
    const myListModal = document.getElementById('my-list-modal');
    const profileButton = document.getElementById('profile-icon-btn'); 
    const profileMenu = document.getElementById('profile-dropdown-menu'); 
    const profileSettingsForm = document.getElementById('profile-settings-form');
    const appSettingsForm = document.getElementById('app-settings-form');


    // Variável de estado
    let currentAnimeId = null;
    let currentBannerIndex = 0; 

    // ----------------------------------------------------------------------
    // --- FUNÇÕES DE UTILIDADE E RENDERIZAÇÃO ---
    // ----------------------------------------------------------------------

    function openModal(modalElement) {
        modalElement.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        setTimeout(() => modalElement.classList.add('is-visible'), 10);
    }

    function closeModal(modalElement) {
        modalElement.classList.remove('is-visible');
        setTimeout(() => {
            modalElement.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    function closeAllModals() {
        [detalhesModal, loginRegisterModal, profileModal, settingsModal, myListModal].forEach(modal => {
            if (modal && modal.classList.contains('is-visible')) {
                closeModal(modal);
            }
        });
    }

    /**
     * Obtém o objeto do usuário logado.
     */
    function getCurrentUser() {
        const currentUserId = localStorage.getItem('currentUserId');
        if (!currentUserId) return null;

        const users = JSON.parse(localStorage.getItem('animeDeckUsers') || '{}');
        return users[currentUserId];
    }
    
    /**
     * Cria um cartão de anime (mantido para ser usado na lista).
     */
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

    // Funções auxiliares para os event listeners (necessário para remover/reatachar)
    function cardMouseEnter() {
        cursor.style.transform = 'translate(-50%, -50%) scale(2)'; 
        cursor.style.background = 'radial-gradient(circle, rgba(247, 56, 89, 0.5), rgba(247, 56, 89, 0))';
    }
    
    function cardMouseLeave() {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))';
    }
    
    function cardClick() {
        const idDoAnime = this.getAttribute('data-id');
        mostrarDetalhes(idDoAnime);
    }
    
    /**
     * Anexa os event listeners (hover/click) aos cartões.
     * ATUALIZAÇÃO: Aceita um seletor de grid para anexar aos cartões daquela seção.
     */
    function attachCardListeners(gridSelector = '.shows-grid') {
        const currentCards = Array.from(document.querySelectorAll(`${gridSelector} .show-card`));
        
        // Remove listeners de todos os cartões (incluindo os novos nas outras seções)
        document.querySelectorAll('.show-card').forEach(card => {
            card.removeEventListener('mouseenter', cardMouseEnter);
            card.removeEventListener('mouseleave', cardMouseLeave);
            card.removeEventListener('click', cardClick);
        });

        // Adiciona listeners aos cartões da grade especificada (ou todas)
        currentCards.forEach(card => {
            card.addEventListener('mouseenter', cardMouseEnter);
            card.addEventListener('mouseleave', cardMouseLeave);
            card.addEventListener('click', cardClick);
        });
        
        // Atualiza a lista global de cards (agora menos usada)
        cards = Array.from(document.querySelectorAll('.shows-grid .show-card')); 
    }
    
    /**
     * Renderiza a lista de animes em uma grade específica.
     * ATUALIZAÇÃO: Função genérica para renderizar em qualquer grid.
     */
    function renderShows(containerElement, showsToRender) {
        containerElement.innerHTML = ''; // Limpa a grade

        if (showsToRender.length === 0) {
            containerElement.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 20px;">Nenhum item encontrado.</p>';
            return;
        }

        showsToRender.forEach(show => {
            const card = createShowCard(show);
            containerElement.appendChild(card);
        });
        
        // Anexa listeners para todos os cartões após a renderização.
        // Chamado no final da inicialização para cobrir todas as grades.
    }


    // ----------------------------------------------------------------------
    // --- LÓGICA DE BUSCA (FILTRAGEM) ---
    // ----------------------------------------------------------------------
    
    // ATUALIZAÇÃO: Agora a busca filtra em todos os dados e só renderiza no grid principal.
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        // Concatena todos os dados para a busca.
        const allSearchableData = topShowsData.concat(topMoviesData).concat(seasonalShowsData);

        if (searchTerm.length > 0) {
            const filteredShows = allSearchableData.filter(anime => 
                anime.title.toLowerCase().includes(searchTerm) || 
                anime.sinopse.toLowerCase().includes(searchTerm) ||
                anime.genero.toLowerCase().includes(searchTerm)
            );
            
            // Renderiza apenas no grid principal e oculta os outros temporariamente
            document.querySelector('.top-shows h2').textContent = `Resultados da Busca para "${e.target.value}"`;
            document.querySelector('.top-shows a').style.display = 'none';
            document.getElementById('top-movies-section').style.display = 'none';
            document.getElementById('seasonal-shows-section').style.display = 'none';

            renderShows(showsGrid, filteredShows);
            attachCardListeners(); // Reanexa listeners após a renderização da busca
            
        } else {
            // Volta para a visualização padrão.
            document.querySelector('.top-shows h2').textContent = 'Top 10 Shows';
            document.querySelector('.top-shows a').style.display = 'inline';
            document.getElementById('top-movies-section').style.display = 'block';
            document.getElementById('seasonal-shows-section').style.display = 'block';

            renderShows(showsGrid, topShowsData); // Inicializa a grade principal.
            renderShows(moviesGrid, topMoviesData); // Inicializa a grade de filmes.
            renderShows(seasonalGrid, seasonalShowsData); // Inicializa a grade da temporada.
            attachCardListeners('.shows-grid'); // Anexa listeners a todas as grades.
        }
    });
    
    // ----------------------------------------------------------------------
    // --- LÓGICA DO HERO BANNER INTERATIVO ---
    // ----------------------------------------------------------------------

    /**
     * Atualiza o Hero Banner com os dados do anime no índice atual.
     */
    function updateBanner(index) {
        const show = bannerShowsData[index];
        if (show) {
            bannerImage.style.opacity = 0; 
            setTimeout(() => {
                bannerImage.src = show.imageUrl;
                bannerImage.alt = show.title;
                bannerTitle.textContent = show.title;
                bannerImage.style.opacity = 1; 
            }, 150); 
        }
    }

    /**
     * Lógica de navegação do Banner (próximo item).
     */
    rightArrow.addEventListener('click', () => {
        currentBannerIndex++;
        if (currentBannerIndex >= bannerShowsData.length) {
            currentBannerIndex = 0; 
        }
        updateBanner(currentBannerIndex);
    });

    /**
     * Lógica de navegação do Banner (item anterior).
     */
    leftArrow.addEventListener('click', () => {
        currentBannerIndex--;
        if (currentBannerIndex < 0) {
            currentBannerIndex = bannerShowsData.length - 1; 
        }
        updateBanner(currentBannerIndex);
    });
    
    // ----------------------------------------------------------------------
    // --- LÓGICA DE TEMA (NOVO) ---
    // ----------------------------------------------------------------------

    /**
     * Aplica o tema (dark ou light) ao elemento body.
     */
    function applyTheme(theme) {
        if (theme === 'light') {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
    }

    // ----------------------------------------------------------------------
    // --- LÓGICA DE AUTENTICAÇÃO E MODAIS ---
    // ----------------------------------------------------------------------


    /**
     * Atualiza o estado do botão Minha Lista no modal de detalhes.
     */
    function updateMinhaListaBtn(animeId) {
        const user = getCurrentUser();
        if (!user) {
            minhaListaBtn.textContent = '+ Minha Lista';
            minhaListaBtn.classList.remove('in-list');
            return;
        }

        const myList = user.myList || [];
        const isInList = myList.includes(parseInt(animeId));

        if (isInList) {
            minhaListaBtn.textContent = '✔️ Na Minha Lista';
            minhaListaBtn.classList.add('in-list');
        } else {
            minhaListaBtn.textContent = '+ Minha Lista';
            minhaListaBtn.classList.remove('in-list');
        }
    }

    /**
     * Adiciona ou remove um anime da lista do usuário.
     */
    function toggleAnimeInMyList(animeId) {
        const currentUserId = localStorage.getItem('currentUserId');
        if (!currentUserId) {
            alert('Você precisa estar logado para adicionar à sua lista.');
            openModal(loginRegisterModal);
            return;
        }

        const users = JSON.parse(localStorage.getItem('animeDeckUsers'));
        const user = users[currentUserId];
        let myList = user.myList || [];
        const idInt = parseInt(animeId);

        const index = myList.indexOf(idInt);

        if (index > -1) {
            myList.splice(index, 1);
            alert('Removido da Minha Lista.');
        } else {
            myList.push(idInt);
            alert('Adicionado à Minha Lista!');
        }

        user.myList = myList;
        users[currentUserId] = user;
        localStorage.setItem('animeDeckUsers', JSON.stringify(users));

        updateMinhaListaBtn(animeId);
    }

    minhaListaBtn.addEventListener('click', () => {
        if (currentAnimeId) {
            toggleAnimeInMyList(currentAnimeId);
        }
    });

    /**
     * Carrega e exibe a lista de animes salvos no modal.
     */
    function loadMyList() {
        const user = getCurrentUser();
        const listContent = document.getElementById('my-list-content');
        listContent.innerHTML = ''; 

        if (!user || user.myList.length === 0) {
            listContent.innerHTML = '<p class="empty-list-msg">Sua lista está vazia! Adicione alguns animes através do modal de detalhes.</p>';
            return;
        }

        const allAnimes = topShowsData.concat(bannerShowsData).concat(topMoviesData).concat(seasonalShowsData); // ATUALIZAÇÃO: Inclui todos os dados
        const userList = allAnimes.filter(anime => user.myList.includes(anime.id));

        const listGrid = document.createElement('div');
        listGrid.classList.add('shows-grid', 'list-grid');

        userList.forEach(anime => {
            const card = createShowCard(anime);
            
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remover';
            removeBtn.classList.add('btn-remove-list');
            removeBtn.setAttribute('data-id', anime.id);

            removeBtn.addEventListener('click', () => {
                toggleAnimeInMyList(anime.id);
                loadMyList(); 
            });
            
            card.addEventListener('click', cardClick); 

            const cardWrapper = document.createElement('div');
            cardWrapper.classList.add('list-card-wrapper');
            cardWrapper.appendChild(card);
            cardWrapper.appendChild(removeBtn);
            listGrid.appendChild(cardWrapper);
        });

        listContent.appendChild(listGrid);
    }
    
    document.getElementById('menu-my-list-btn').addEventListener('click', () => {
        profileMenu.style.display = 'none';
        if (getCurrentUser()) {
            loadMyList();
            openModal(myListModal);
        } else {
            alert('Você precisa estar logado para ver sua lista.');
            openModal(loginRegisterModal);
        }
    });

    /**
     * Verifica e atualiza o menu do perfil com base no estado de login.
     */
    function updateProfileMenu() {
        const currentUserId = localStorage.getItem('currentUserId');
        const isLoggedIn = !!currentUserId;

        document.getElementById('logged-out-options').style.display = isLoggedIn ? 'none' : 'block';
        document.getElementById('logged-in-options').style.display = isLoggedIn ? 'block' : 'none';

        profileMenu.style.display = 'none';
    }

    /**
     * Simula o registro de um novo usuário (Inicializa myList: []).
     */
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const displayName = e.target.display_name.value || email.split('@')[0];

        const users = JSON.parse(localStorage.getItem('animeDeckUsers') || '{}');

        if (users[email]) {
            alert('Erro: Este email já está registrado.');
            return;
        }

        users[email] = { 
            email, 
            password, 
            displayName,
            myList: [], 
            appSettings: { theme: 'dark', quality: 'auto' } 
        };
        localStorage.setItem('animeDeckUsers', JSON.stringify(users));
        
        alert('Registro efetuado com sucesso! Faça o login.');
        e.target.reset();
        document.getElementById('login-tab-btn').click(); 
    });

    /**
     * Simula o login de um usuário.
     */
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const users = JSON.parse(localStorage.getItem('animeDeckUsers') || '{}');
        const user = users[email];

        if (user && user.password === password) {
            localStorage.setItem('currentUserId', email);
            alert(`Bem-vindo, ${user.displayName}!`);
            closeModal(loginRegisterModal);
            updateProfileMenu();
            // APLICA O TEMA DO USUÁRIO NO LOGIN
            applyTheme(user.appSettings.theme); 
        } else {
            alert('Email ou senha incorretos.');
        }
    });

    /**
     * Lógica de Logout.
     */
    document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.removeItem('currentUserId');
        alert('Você foi desconectado.');
        updateProfileMenu();
        profileMenu.style.display = 'none';
        // Volta para o tema padrão (Dark) no logout
        applyTheme('dark'); 
    });


    profileButton.addEventListener('click', (e) => {
        e.stopPropagation();
        if (profileMenu.style.display === 'block') {
            profileMenu.style.display = 'none';
        } else {
            updateProfileMenu();
            profileMenu.style.display = 'block';
        }
    });
    document.addEventListener('click', (e) => {
        if (!profileMenu.contains(e.target) && e.target !== profileButton) {
            profileMenu.style.display = 'none';
        }
    });


    document.getElementById('menu-login-btn').addEventListener('click', () => {
        profileMenu.style.display = 'none';
        openModal(loginRegisterModal);
    });
    document.getElementById('menu-register-btn').addEventListener('click', () => {
        profileMenu.style.display = 'none';
        document.getElementById('register-tab-btn').click(); 
        openModal(loginRegisterModal);
    });


    // Abre e Preenche o modal 'Meu Perfil'.
    document.getElementById('menu-profile-btn').addEventListener('click', () => {
        profileMenu.style.display = 'none';
        const user = getCurrentUser();

        if (user) {
            document.getElementById('profile-display-name').value = user.displayName;
            document.getElementById('profile-email').value = user.email;
            openModal(profileModal);
        }
    });

    // Salva as Configurações de Perfil.
    profileSettingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const currentUserId = localStorage.getItem('currentUserId');
        const users = JSON.parse(localStorage.getItem('animeDeckUsers'));
        const user = users[currentUserId];
        
        const newDisplayName = e.target['profile-display-name'].value;
        user.displayName = newDisplayName;
        
        users[currentUserId] = user;
        localStorage.setItem('animeDeckUsers', JSON.stringify(users));
        
        alert('Configurações de Perfil salvas com sucesso!');
        closeModal(profileModal);
    });


    // Abre e Preenche o modal 'Configurações do Aplicativo'.
    document.getElementById('menu-settings-btn').addEventListener('click', () => {
        profileMenu.style.display = 'none';
        const user = getCurrentUser();

        if (user) {
            const settings = user.appSettings;
            // PREENCHE OS VALORES ATUAIS
            document.getElementById('settings-theme').value = settings.theme || 'dark';
            document.getElementById('settings-quality').value = settings.quality || 'auto';
            openModal(settingsModal);
        }
    });

    // Salva as Configurações do Aplicativo e aplica o tema (MODIFICADO)
    appSettingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const currentUserId = localStorage.getItem('currentUserId');
        const users = JSON.parse(localStorage.getItem('animeDeckUsers'));
        const user = users[currentUserId];

        const newSettings = {
            theme: e.target['settings-theme'].value,
            quality: e.target['settings-quality'].value
        };
        
        user.appSettings = newSettings;
        
        users[currentUserId] = user;
        localStorage.setItem('animeDeckUsers', JSON.stringify(users));
        
        // APLICA O NOVO TEMA IMEDIATAMENTE
        applyTheme(newSettings.theme); 

        alert('Configurações de Aplicativo salvas com sucesso!');
        closeModal(settingsModal);
    });


    // ----------------------------------------------------------------------
    // --- LÓGICA DE ANIME DETALHES E INICIALIZAÇÃO ---
    // ----------------------------------------------------------------------

    function mostrarDetalhes(animeId) {
        // ATUALIZAÇÃO: Busca em todos os dados
        const allAnimes = topShowsData.concat(bannerShowsData).concat(topMoviesData).concat(seasonalShowsData);
        const animeSelecionado = allAnimes.find(anime => anime.id === parseInt(animeId));

        if (animeSelecionado) {
            currentAnimeId = animeId; 
            
            detalhesTitulo.textContent = animeSelecionado.title;
            detalhesSinopse.textContent = animeSelecionado.sinopse;
            detalhesImagem.src = animeSelecionado.imageUrl;
            detalhesImagem.alt = animeSelecionado.title;

            trailerLink.href = animeSelecionado.trailerUrl || '#';
            assistirLink.href = animeSelecionado.watchUrl || '#';

            detalhesTagline.textContent = animeSelecionado.tagline || "Disponível agora!";
            detalhesGenero.innerHTML = `<strong>Gênero:</strong> ${animeSelecionado.genero || 'N/A'}`;
            detalhesDuracao.innerHTML = `<strong>Duração:</strong> ${animeSelecionado.duracao || 'N/A'}`;
            detalhesEstudio.innerHTML = `<strong>Estúdio:</strong> ${animeSelecionado.estudio || 'N/A'}`;
            
            updateMinhaListaBtn(animeId);

            openModal(detalhesModal);
        } else {
            console.error("Anime não encontrado com ID:", animeId);
            alert("Erro ao carregar detalhes do anime.");
        }
    }

    document.querySelectorAll('.fechar-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            closeModal(e.target.closest('.modal-overlay'));
        });
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal(overlay);
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    // --- INICIALIZAÇÃO DA APLICAÇÃO ---
    
    function initializeApp() {
        // 1. Inicializa o tema do usuário (ou Dark por padrão)
        const initialUser = getCurrentUser();
        const initialTheme = initialUser ? initialUser.appSettings.theme : 'dark';
        applyTheme(initialTheme);
        
        // 2. Inicializa as grades
        renderShows(showsGrid, topShowsData); 
        renderShows(moviesGrid, topMoviesData); // NOVO
        renderShows(seasonalGrid, seasonalShowsData); // NOVO
        
        // 3. Anexa Listeners a todas as grades renderizadas
        attachCardListeners();
        
        // 4. Inicializa o estado de autenticação
        updateProfileMenu();
        
        // 5. Inicializa o banner com o primeiro show da nova lista
        updateBanner(currentBannerIndex); 
    }
    
    initializeApp();
});