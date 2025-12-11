document.addEventListener('DOMContentLoaded', () => {

    // --- Variáveis Globais e Configurações Iniciais ---
    
    // NOVO: Adicione 'year' para ordenação!
    const topShowsData = [
        { 
            id: 1, 
            title: "Jujutsu Kaisen", 
            sinopse: "Yuji Itadori se junta a um clube de ocultismo, mas depois de engolir um dedo amaldiçoado, ele é possuído por Sukuna, o Rei das Maldições, e se torna um feiticeiro Jujutsu.", 
            imageUrl: "assets/media/img/jujutsu.jpg",
            tagline: "O Rei das Maldições tem pressa.", 
            genero: "Ação, Sobrenatural, Escolar", 
            duracao: "2 Temporadas", 
            estudio: "MAPPA",
            year: 2020, // NOVO
            rating: "★★★★★", // NOVO
            watchUrl: "https://www.crunchyroll.com/series/GR9P0P52R/jujutsu-kaisen",
            trailerUrl: "https://www.youtube.com/watch?v=pkKu9hLT-t8"
        },
        { 
            id: 2, 
            title: "Bleach: TYBW", 
            sinopse: "O clímax épico da saga Bleach. Ichigo e a Soul Society enfrentam Yhwach e os Quincies na Guerra Sangrenta dos Mil Anos.", 
            imageUrl: "assets/media/img/bleach.jpg",
            tagline: "A Guerra Sangrenta dos Mil Anos começou.", 
            genero: "Ação, Fantasia, Shonen", 
            duracao: "2 Partes", 
            estudio: "Pierrot",
            year: 2022, // NOVO
            rating: "★★★★☆", // NOVO
            watchUrl: "https://www.starplus.com/series/bleach-a-guerra-sangrenta-de-mil-anos/50YhHk9U5t4w",
            trailerUrl: "https://www.youtube.com/watch?v=XQ7Q5237wBc"
        },
        { 
            id: 3, 
            title: "Attack on Titan", 
            sinopse: "Depois que sua cidade natal é destruída e sua mãe é morta, Eren Yeager jura limpar a Terra dos Titãs.", 
            imageUrl: "assets/media/img/aot.jpg",
            tagline: "O mundo é cruel, mas lindo.", 
            genero: "Ação, Drama, Fantasia Sombria", 
            duracao: "4 Temporadas", 
            estudio: "Wit Studio/MAPPA",
            year: 2013, // NOVO
            rating: "★★★★★", // NOVO
            watchUrl: "https://www.crunchyroll.com/series/GR75QYQK6/attack-on-titan",
            trailerUrl: "https://www.youtube.com/watch?v=MGr-5Rz06xQ"
        },
        { 
            id: 4, 
            title: "Frieren e a Jornada para o Além", 
            sinopse: "A elfa maga Frieren reflete sobre a mortalidade e o legado após a derrota do Rei Demônio, embarcando em uma nova jornada.", 
            imageUrl: "assets/media/img/frieren.jpg",
            tagline: "O tempo passa para todos... menos para ela.", 
            genero: "Fantasia, Aventura, Drama", 
            duracao: "1 Temporada", 
            estudio: "Madhouse",
            year: 2023, // NOVO
            rating: "★★★★★", // NOVO
            watchUrl: "https://www.crunchyroll.com/series/GEXHGW7QE/frieren-beyond-journeys-end",
            trailerUrl: "https://www.youtube.com/watch?v=x9I8IeM-g3g"
        },
        { 
            id: 5, 
            title: "Boku no Hero Academia", 
            sinopse: "Em um mundo onde superpoderes são comuns, um garoto sem individualidade se esforça para se tornar o maior herói de todos.", 
            imageUrl: "assets/media/img/mha.jpg",
            tagline: "O futuro está em suas mãos.", 
            genero: "Ação, Escolar, Superpoderes", 
            duracao: "7 Temporadas", 
            estudio: "Bones",
            year: 2016, // NOVO
            rating: "★★★★☆", // NOVO
            watchUrl: "https://www.crunchyroll.com/series/GRVJDGMXR/my-hero-academia",
            trailerUrl: "https://www.youtube.com/watch?v=rC94X9vS_q8"
        },
        { 
            id: 6, 
            title: "Solo Leveling", 
            sinopse: "O caçador mais fraco do mundo recebe uma segunda chance e embarca em uma jornada para se tornar o mais forte.", 
            imageUrl: "assets/media/img/sololeveling.jpg",
            tagline: "De 'caçador fraco' a 'o único invencível'.", 
            genero: "Ação, Fantasia, Aventura", 
            duracao: "1 Temporada", 
            estudio: "A-1 Pictures",
            year: 2024, // NOVO
            rating: "★★★★☆", // NOVO
            watchUrl: "https://www.crunchyroll.com/series/GNGH0GW3V/solo-leveling",
            trailerUrl: "https://www.youtube.com/watch?v=9_b_r1qL29E"
        },
        { 
            id: 7, 
            title: "Demon Slayer", 
            sinopse: "Tanjiro, um garoto que teve sua família massacrada, se junta aos Caçadores de Demônios para transformar sua irmã de volta em humana.", 
            imageUrl: "assets/media/img/demonslayer.jpg",
            tagline: "Torne-se a lâmina que corta o mal.", 
            genero: "Ação, Sobrenatural, Fantasia", 
            duracao: "4 Temporadas", 
            estudio: "ufotable",
            year: 2019, // NOVO
            rating: "★★★★★", // NOVO
            watchUrl: "https://www.crunchyroll.com/series/GR9P3V54R/demon-slayer-kimetsu-no-yaiba",
            trailerUrl: "https://www.youtube.com/watch?v=VX_Yc06R2Qc"
        },
        { 
            id: 8, 
            title: "One Piece", 
            sinopse: "Monkey D. Luffy e sua tripulação, os Piratas do Chapéu de Palha, navegam em busca do tesouro supremo, o One Piece.", 
            imageUrl: "assets/media/img/onepiece.jpg",
            tagline: "O Rei dos Piratas serei eu!", 
            genero: "Ação, Aventura, Fantasia", 
            duracao: "1000+ Episódios", 
            estudio: "Toei Animation",
            year: 1999, // NOVO
            rating: "★★★★★", // NOVO
            watchUrl: "https://www.crunchyroll.com/series/GRNDQDwYR/one-piece",
            trailerUrl: "https://www.youtube.com/watch?v=wgCqK8GfLvw"
        },
        { 
            id: 9, 
            title: "Chainsaw Man", 
            sinopse: "Denji, um jovem endividado, se funde com um demônio-motosserra e se torna um caçador de demônios oficial.", 
            imageUrl: "assets/media/img/csm.jpg",
            tagline: "Corte o passado, construa o futuro.", 
            genero: "Ação, Fantasia Sombria, Sobrenatural", 
            duracao: "1 Temporada", 
            estudio: "MAPPA",
            year: 2022, // NOVO
            rating: "★★★★☆", // NOVO
            watchUrl: "https://www.crunchyroll.com/series/G9VMWM1MW/chainsaw-man",
            trailerUrl: "https://www.youtube.com/watch?v=d_x5yqS3LpU"
        },
        { 
            id: 10, 
            title: "Spy x Family", 
            sinopse: "Um espião, uma assassina e uma telepata formam uma família falsa para cumprir uma missão secreta.", 
            imageUrl: "assets/media/img/spyxfamily.jpg",
            tagline: "Uma família comum... exceto que não.", 
            genero: "Comédia, Ação, Slice of Life", 
            duracao: "2 Temporadas", 
            estudio: "Wit Studio/CloverWorks",
            year: 2022, // NOVO
            rating: "★★★★★", // NOVO
            watchUrl: "https://www.crunchyroll.com/series/G9VHN9PP4/spy-x-family",
            trailerUrl: "https://www.youtube.com/watch?v=z4IeT-D90O0"
        },
        { 
            id: 11, 
            title: "Re: Zero", 
            sinopse: "Subaru Natsuki é invocado para um outro mundo e ganha a habilidade de voltar no tempo após a morte.", 
            imageUrl: "assets/media/img/rezero.jpg",
            tagline: "Começar de novo, de novo e de novo.", 
            genero: "Isekai, Fantasia, Drama", 
            duracao: "2 Temporadas", 
            estudio: "White Fox",
            year: 2016, // NOVO
            rating: "★★★★☆", // NOVO
            watchUrl: "https://www.crunchyroll.com/series/G6KQ032V6/re-zero--starting-life-in-another-world-",
            trailerUrl: "https://www.youtube.com/watch?v=z8S12B5-1f8"
        }
    ];

    const topMoviesData = [
        { 
            id: 101, 
            title: "Suzume", 
            sinopse: "Suzume, uma garota de 17 anos, precisa viajar por várias ruínas no Japão para fechar portas que causam desastres.", 
            imageUrl: "assets/media/img/suzume.jpg",
            tagline: "As portas da calamidade estão abertas.", 
            genero: "Aventura, Fantasia, Drama", 
            duracao: "2h 2m", 
            estudio: "CoMix Wave Films",
            year: 2022, // NOVO
            rating: "★★★★★", // NOVO
            watchUrl: "https://www.crunchyroll.com/pt-br/movie/833314/suzume",
            trailerUrl: "https://www.youtube.com/watch?v=z59XqS9Yj3w"
        },
        { 
            id: 102, 
            title: "Demon Slayer: To the Swordsmith Village", 
            sinopse: "Uma compilação dos momentos finais do Arco do Distrito do Entretenimento e o primeiro episódio estendido do Arco da Vila dos Ferreiros.", 
            imageUrl: "assets/media/img/ds_movie.jpg",
            tagline: "Novas batalhas aguardam.", 
            genero: "Ação, Fantasia", 
            duracao: "1h 50m", 
            estudio: "ufotable",
            year: 2023, // NOVO
            rating: "★★★★☆", // NOVO
            watchUrl: "https://www.crunchyroll.com/pt-br/series/GR9P3V54R/demon-slayer-kimetsu-no-yaiba",
            trailerUrl: "https://www.youtube.com/watch?v=z59XqS9Yj3w"
        },
        { 
            id: 103, 
            title: "One Piece Film: Red", 
            sinopse: "Luffy e sua tripulação visitam uma ilha onde a cantora mais popular do mundo, Uta, filha de Shanks, fará um show ao vivo.", 
            imageUrl: "assets/media/img/op_red.jpg",
            tagline: "A voz que pode mudar o mundo.", 
            genero: "Ação, Aventura, Música", 
            duracao: "1h 55m", 
            estudio: "Toei Animation",
            year: 2022, // NOVO
            rating: "★★★★☆", // NOVO
            watchUrl: "https://www.netflix.com/title/81617411",
            trailerUrl: "https://www.youtube.com/watch?v=B7bH4f9oH1U"
        }
    ];

    const seasonalShowsData = [
        { 
            id: 201, 
            title: "Kaiju No. 8", 
            sinopse: "Kafka Hibino, um homem que sonha em se juntar à Força de Defesa, ganha o poder de se transformar em um Kaiju.", 
            imageUrl: "assets/media/img/kaiju.jpg",
            tagline: "Ele é a arma que o mundo precisa, e o monstro que eles temem.", 
            genero: "Ação, Sci-Fi, Shonen", 
            duracao: "Estreando", 
            estudio: "Production I.G",
            year: 2024, // NOVO
            rating: "★★★★☆", // NOVO
            watchUrl: "https://www.crunchyroll.com/series/GNQL0GQ92/kaiju-no-8",
            trailerUrl: "https://www.youtube.com/watch?v=7h2K_mFv8jM"
        },
        { 
            id: 202, 
            title: "Wind Breaker", 
            sinopse: "Haruka Sakura, um calouro delinquente, chega a uma escola conhecida por sua força na proteção da cidade.", 
            imageUrl: "assets/media/img/windbreaker.jpg",
            tagline: "Delinquentes se tornam heróis da cidade.", 
            genero: "Ação, Escolar, Shonen", 
            duracao: "Estreando", 
            estudio: "CloverWorks",
            year: 2024, // NOVO
            rating: "★★★★☆", // NOVO
            watchUrl: "https://www.crunchyroll.com/series/G8WH0G4M7/wind-breaker",
            trailerUrl: "https://www.youtube.com/watch?v=J_D3z5X91o4"
        },
        { 
            id: 203, 
            title: "Black Butler: Public School Arc", 
            sinopse: "Ciel e Sebastian se infiltram na prestigiosa Weston College para investigar o desaparecimento de estudantes.", 
            imageUrl: "assets/media/img/blackbutler.jpg",
            tagline: "O mordomo é, como sempre, impecável.", 
            genero: "Mistério, Sobrenatural, Histórico", 
            duracao: "Estreando", 
            estudio: "CloverWorks",
            year: 2024, // NOVO
            rating: "★★★★☆", // NOVO
            watchUrl: "https://www.crunchyroll.com/series/G6VNJ2Y0R/black-butler",
            trailerUrl: "https://www.youtube.com/watch?v=T_5XkFv8jM4"
        }
    ];
    
    // Simulação de dados para o banner (usando os mesmos do Top Shows)
    const bannerShowsData = [
        topShowsData[6], // Demon Slayer
        topShowsData[0], // Jujutsu Kaisen
        topShowsData[3]  // Frieren
    ];
    
    let currentBannerIndex = 0;
    
    // --- Referências DOM ---
    const showsGrid = document.getElementById('top-shows-grid');
    const moviesGrid = document.getElementById('top-movies-grid');
    const seasonalGrid = document.getElementById('seasonal-shows-grid');
    const detailModal = document.getElementById('details-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalTagline = document.getElementById('modal-tagline');
    const modalGenero = document.getElementById('modal-genero');
    const modalDuracao = document.getElementById('modal-duracao');
    const modalEstudio = document.getElementById('modal-estudio');
    const modalSinopse = document.getElementById('modal-sinopse');
    const modalRating = document.getElementById('modal-rating'); // NOVO
    const watchNowBtn = document.getElementById('watch-now-btn');
    const addToListBtn = document.getElementById('add-to-list-btn');

    const searchInput = document.getElementById('search-input');
    
    // --- Referências aos Botões e Menus de Autenticação/Configurações ---
    const profileIconBtn = document.getElementById('profile-icon-btn');
    const profileDropdown = document.getElementById('profile-dropdown-menu');
    const loggedOutOptions = document.getElementById('logged-out-options');
    const loggedInOptions = document.getElementById('logged-in-options');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const profileModal = document.getElementById('profile-modal');
    const settingsModal = document.getElementById('settings-modal');
    const myListModal = document.getElementById('my-list-modal');
    // ... (outras refs de autenticação e settings) ...
    
    // --- Referências aos Filtros (NOVO) ---
    const topShowsSort = document.getElementById('top-shows-sort');
    const topShowsFilter = document.getElementById('top-shows-filter');
    const topMoviesSort = document.getElementById('top-movies-sort');
    const seasonalShowsSort = document.getElementById('seasonal-shows-sort');
    
    // --- Referências ao Menu Hamburger (NOVO) ---
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const mainNav = document.getElementById('main-nav');

    // --- Lógica do Hamburger Menu (NOVO) ---
    menuToggleBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        // Fecha o dropdown do perfil se estiver aberto
        if (profileDropdown.classList.contains('active')) {
            profileDropdown.classList.remove('active');
        }
    });

    // --- Funções Auxiliares (Tema, Modals, Usuário) ---

    // ... (Funções get/setCurrentUser, applyTheme, open/closeModal, etc. permanecem as mesmas) ...

    function getCurrentUser() {
        const loggedInEmail = localStorage.getItem('loggedInUser');
        if (!loggedInEmail) return null;
        
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === loggedInEmail);
        return user;
    }

    function setCurrentUser(user) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const index = users.findIndex(u => u.email === user.email);
        
        if (index !== -1) {
            users[index] = user;
        } else {
            users.push(user);
        }
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    function applyTheme(theme) {
        document.body.classList.remove('dark-theme', 'light-theme');
        if (theme === 'system') {
            const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.body.classList.add(systemDark ? 'dark-theme' : 'light-theme');
        } else if (theme === 'light') {
            document.body.classList.add('light-theme');
        } else {
            // Default é dark
            document.body.classList.add('dark-theme'); 
        }
    }

    function openModal(modal) {
        closeAllModals();
        modal.classList.add('active');
    }

    function closeModal(modal) {
        modal.classList.remove('active');
    }

    function closeAllModals() {
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.classList.remove('active');
        });
        profileDropdown.classList.remove('active');
        mainNav.classList.remove('active'); // NOVO: Fecha o menu hamburger
    }


    // --- Lógica de Renderização e Filtros (MODIFICADO) ---

    function renderShows(container, data) {
        container.innerHTML = ''; // Limpa o container
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'show-card';
            card.setAttribute('data-id', item.id);
            card.setAttribute('data-list-type', container.id.split('-')[0]);

            card.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>${item.tagline}</p>
            `;
            container.appendChild(card);
        });
        attachCardListeners(); // Reanexa os listeners após renderizar
    }

    // Função de Filtragem e Ordenação (NOVO e CENTRAL)
    function filterAndSort(data, containerId, sortValue, filterValue) {
        let filteredData = [...data]; // Cria uma cópia para não alterar o original
        
        // 1. Filtragem (Apenas para Top Shows, que tem filtro de Gênero)
        if (containerId === 'top-shows-grid' && filterValue && filterValue !== 'all') {
            filteredData = filteredData.filter(item => 
                item.genero.includes(filterValue)
            );
        }

        // 2. Ordenação
        if (sortValue) {
            filteredData.sort((a, b) => {
                if (sortValue === 'title') {
                    return a.title.localeCompare(b.title);
                } else if (sortValue === 'year') {
                    // Ano decrescente (Mais novo primeiro)
                    return b.year - a.year; 
                } else if (sortValue === 'default') {
                    // Posição original (id crescente)
                    return a.id - b.id; 
                }
                return 0;
            });
        }

        renderShows(document.getElementById(containerId), filteredData);
    }

    // Função de Busca Global (MODIFICADO para usar a nova função de filtro/ordenação)
    function globalSearch() {
        const query = searchInput.value.toLowerCase();
        
        // Função interna para filtrar uma lista de dados
        const filterList = (data) => data.filter(item => 
            item.title.toLowerCase().includes(query) ||
            item.sinopse.toLowerCase().includes(query)
        );

        // Aplica o filtro nas 3 listas
        renderShows(showsGrid, filterList(topShowsData));
        renderShows(moviesGrid, filterList(topMoviesData));
        renderShows(seasonalGrid, filterList(seasonalShowsData));
        
        // Se a busca estiver vazia, renderiza com os filtros/ordenação atuais
        if (query === "") {
            applyCurrentFilters();
        }
    }
    
    // Função para aplicar os filtros atuais ao iniciar ou limpar a busca
    function applyCurrentFilters() {
        filterAndSort(topShowsData, 'top-shows-grid', topShowsSort.value, topShowsFilter.value);
        filterAndSort(topMoviesData, 'top-movies-grid', topMoviesSort.value, null); 
        filterAndSort(seasonalShowsData, 'seasonal-shows-grid', seasonalShowsSort.value, null);
    }
    
    // --- Listeners para Filtros e Ordenação (NOVO) ---
    topShowsSort.addEventListener('change', () => filterAndSort(topShowsData, 'top-shows-grid', topShowsSort.value, topShowsFilter.value));
    topShowsFilter.addEventListener('change', () => filterAndSort(topShowsData, 'top-shows-grid', topShowsSort.value, topShowsFilter.value));
    topMoviesSort.addEventListener('change', () => filterAndSort(topMoviesData, 'top-movies-grid', topMoviesSort.value, null));
    seasonalShowsSort.addEventListener('change', () => filterAndSort(seasonalShowsData, 'seasonal-shows-grid', seasonalShowsSort.value, null));

    // --- Detalhes do Modal e Manipulação da Lista ---
    
    function attachCardListeners() {
        document.querySelectorAll('.show-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = parseInt(card.getAttribute('data-id'));
                const listType = card.getAttribute('data-list-type');
                
                let data;
                if (listType === 'top') {
                    data = topShowsData;
                } else if (listType === 'movies') {
                    data = topMoviesData;
                } else if (listType === 'seasonal') {
                    data = seasonalShowsData;
                }

                const show = data.find(item => item.id === id);
                if (show) {
                    showDetailsModal(show);
                }
            });
        });
    }

    function showDetailsModal(show) {
        // Preenchimento do Modal
        modalImage.src = show.imageUrl;
        modalTitle.textContent = show.title;
        modalTagline.textContent = show.tagline;
        modalGenero.textContent = show.genero;
        modalDuracao.textContent = show.duracao;
        modalEstudio.textContent = show.estudio;
        modalSinopse.textContent = show.sinopse;
        modalRating.textContent = show.rating || "★★★★☆"; // NOVO: Usa o rating, ou padrão
        watchNowBtn.href = show.watchUrl || '#';
        addToListBtn.onclick = () => addToMyList(show);
        
        // Verifica se o item já está na lista
        const user = getCurrentUser();
        const isOnList = user && user.myList.some(item => item.id === show.id);
        
        if (isOnList) {
            addToListBtn.textContent = "✔ Na Minha Lista";
            addToListBtn.disabled = true;
        } else {
            addToListBtn.textContent = "➕ Adicionar à Minha Lista";
            addToListBtn.disabled = !user; // Desabilita se não estiver logado
        }

        openModal(detailModal);
    }

    function addToMyList(show) {
        const user = getCurrentUser();
        if (!user) {
            openModal(loginModal); 
            return;
        }

        const isOnList = user.myList.some(item => item.id === show.id);
        
        if (!isOnList) {
            user.myList.push(show);
            setCurrentUser(user);
            
            // Atualiza o botão no modal de detalhes
            const currentShowId = parseInt(document.querySelector('.show-card[data-id="'+show.id+'"]')?.getAttribute('data-id'));
            if (currentShowId === show.id) {
                addToListBtn.textContent = "✔ Na Minha Lista";
                addToListBtn.disabled = true;
            }
            alert(`"${show.title}" adicionado à sua lista!`);
        }
    }
    
    // --- Lógica do Banner (Continua o mesmo, mas usando os novos dados) ---

    // ... (updateBanner, updateBannerDots, nextBanner, prevBanner, bannerListeners) ...

    function updateBanner(index) {
        const show = bannerShowsData[index];
        const bannerImage = document.getElementById('banner-image');
        const bannerTitle = document.getElementById('banner-title');
        const bannerSynopsis = document.getElementById('banner-synopsis');
        const bannerWatchBtn = document.getElementById('banner-watch-btn');
        const bannerDetailsBtn = document.getElementById('banner-details-btn');
        const dotsContainer = document.getElementById('banner-dots-container');

        bannerImage.src = show.imageUrl;
        bannerTitle.textContent = show.title;
        bannerSynopsis.textContent = show.sinopse;
        bannerWatchBtn.href = show.watchUrl || '#';
        
        // Passa o show para o botão de detalhes (abre o modal)
        bannerDetailsBtn.onclick = () => showDetailsModal(show);

        updateBannerDots();
    }
    
    function updateBannerDots() {
        const dotsContainer = document.getElementById('banner-dots-container');
        dotsContainer.innerHTML = '';
        bannerShowsData.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'dot';
            if (index === currentBannerIndex) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                currentBannerIndex = index;
                updateBanner(currentBannerIndex);
            });
            dotsContainer.appendChild(dot);
        });
    }

    function nextBanner() {
        currentBannerIndex = (currentBannerIndex + 1) % bannerShowsData.length;
        updateBanner(currentBannerIndex);
    }

    function prevBanner() {
        currentBannerIndex = (currentBannerIndex - 1 + bannerShowsData.length) % bannerShowsData.length;
        updateBanner(currentBannerIndex);
    }

    // Anexa listeners do banner (apenas na inicialização)
    document.getElementById('banner-prev').addEventListener('click', prevBanner);
    document.getElementById('banner-next').addEventListener('click', nextBanner);

    // Auto-slide do banner
    setInterval(nextBanner, 5000); 

    
    // --- Lógica de Pesquisa (MODIFICADO para chamar globalSearch) ---
    searchInput.addEventListener('input', globalSearch);
    document.getElementById('search-btn').addEventListener('click', globalSearch);
    
    // --- Lógica do Perfil e Autenticação (Mantém a lógica) ---

    // ... (updateProfileMenu, showMyList, etc.) ...
    
    function updateProfileMenu() {
        const user = getCurrentUser();
        if (user) {
            loggedOutOptions.style.display = 'none';
            loggedInOptions.style.display = 'block';
            document.getElementById('profile-username-display').textContent = user.username;
            document.getElementById('profile-email-display').textContent = user.email;
            document.getElementById('profile-member-since').textContent = user.memberSince;
        } else {
            loggedOutOptions.style.display = 'block';
            loggedInOptions.style.display = 'none';
        }
    }
    
    function showMyList() {
        const user = getCurrentUser();
        const listContainer = document.getElementById('my-list-content');
        listContainer.innerHTML = '';
        
        if (!user || user.myList.length === 0) {
            listContainer.innerHTML = '<p class="error-msg" style="color:#aaa;">Sua lista está vazia. Adicione animes para acompanhá-los!</p>';
            return;
        }

        user.myList.forEach(item => {
            const card = document.createElement('div');
            card.className = 'show-card';
            card.setAttribute('data-id', item.id);
            // Simplesmente renderiza o card sem lógica complexa de listType no modal
            card.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>Status: Adicionado</p>
            `;
            // Adiciona um listener para remover (Exemplo simples)
            card.addEventListener('click', () => {
                if (confirm(`Remover "${item.title}" da sua lista?`)) {
                    removeFromMyList(item.id, user.email);
                }
            });
            listContainer.appendChild(card);
        });
    }

    function removeFromMyList(itemId, userEmail) {
        const user = getCurrentUser();
        if (user && user.email === userEmail) {
            user.myList = user.myList.filter(item => item.id !== itemId);
            setCurrentUser(user);
            showMyList(); // Atualiza a lista
        }
    }

    // --- Listeners de Eventos (Dropdown, Login/Logout, Modais) ---

    profileIconBtn.addEventListener('click', () => {
        profileDropdown.classList.toggle('active');
        mainNav.classList.remove('active'); // NOVO: Garante que o menu hamburger fecha
    });

    document.getElementById('menu-login-btn').addEventListener('click', () => openModal(loginModal));
    document.getElementById('menu-register-btn').addEventListener('click', () => openModal(registerModal));
    document.getElementById('menu-profile-btn').addEventListener('click', () => openModal(profileModal));
    document.getElementById('menu-settings-btn').addEventListener('click', () => openModal(settingsModal));
    document.getElementById('menu-mylist-btn').addEventListener('click', () => {
        showMyList();
        openModal(myListModal);
    });
    
    // Listener de Logout (Exemplo)
    document.getElementById('menu-logout-btn').addEventListener('click', () => {
        if (confirm("Deseja realmente sair?")) {
            localStorage.removeItem('loggedInUser');
            updateProfileMenu();
            applyTheme('dark'); // Volta para o tema padrão
            closeAllModals();
        }
    });

    // ... (Listeners de Forms de Login/Registro/Settings/Perfil) ...

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);
        const message = document.getElementById('login-message');

        if (user) {
            localStorage.setItem('loggedInUser', email);
            message.textContent = 'Login bem-sucedido!';
            updateProfileMenu();
            applyTheme(user.appSettings.theme);
            setTimeout(() => {
                closeModal(loginModal);
                message.textContent = '';
            }, 500);
        } else {
            message.textContent = 'Email ou senha inválidos.';
        }
    });

    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const message = document.getElementById('register-message');

        if (users.some(u => u.email === email)) {
            message.textContent = 'Este email já está cadastrado.';
            return;
        }
        
        const newUser = {
            username,
            email,
            password,
            memberSince: new Date().toLocaleDateString('pt-BR'),
            myList: [],
            appSettings: { theme: 'dark', quality: 'auto', emailNotify: true }
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('loggedInUser', email);

        message.textContent = 'Registro bem-sucedido! Você está logado.';
        updateProfileMenu();
        applyTheme('dark');
        setTimeout(() => {
            closeModal(registerModal);
            message.textContent = '';
        }, 500);
    });
    
    document.getElementById('settings-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const theme = document.getElementById('settings-theme').value;
        const quality = document.getElementById('settings-quality').value;
        const emailNotify = document.getElementById('settings-email-notify').checked;
        const user = getCurrentUser();
        
        if (user) {
            user.appSettings = { theme, quality, emailNotify };
            setCurrentUser(user);
            applyTheme(theme);
            alert('Configurações salvas!');
            closeModal(settingsModal);
        } else {
            alert('Você precisa estar logado para salvar as configurações.');
        }
    });

    // Toggle do formulário de edição de perfil
    document.getElementById('edit-profile-btn').addEventListener('click', () => {
        document.getElementById('profile-details-container').style.display = 'none';
        document.getElementById('edit-profile-btn').style.display = 'none';
        document.getElementById('edit-profile-form').style.display = 'block';

        const user = getCurrentUser();
        if (user) {
            document.getElementById('edit-username').value = user.username;
            document.getElementById('edit-email').value = user.email;
            document.getElementById('edit-password').value = ''; 
        }
    });

    document.getElementById('cancel-edit-btn').addEventListener('click', () => {
        document.getElementById('profile-details-container').style.display = 'block';
        document.getElementById('edit-profile-btn').style.display = 'block';
        document.getElementById('edit-profile-form').style.display = 'none';
    });
    
    document.getElementById('edit-profile-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const newUsername = document.getElementById('edit-username').value;
        const newEmail = document.getElementById('edit-email').value;
        const newPassword = document.getElementById('edit-password').value;
        const message = document.getElementById('edit-profile-message');
        const user = getCurrentUser();
        
        if (user) {
            let users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Verifica se o novo email já existe (excluindo o email do próprio usuário)
            if (users.some(u => u.email === newEmail && u.email !== user.email)) {
                message.textContent = 'Este novo email já está em uso.';
                return;
            }

            // Atualiza os dados
            const oldEmail = user.email;
            user.username = newUsername;
            user.email = newEmail;
            if (newPassword) {
                user.password = newPassword;
            }
            
            // Remove o usuário antigo e adiciona o atualizado
            users = users.filter(u => u.email !== oldEmail);
            users.push(user);
            
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('loggedInUser', newEmail); 
            
            message.textContent = 'Perfil atualizado com sucesso!';
            updateProfileMenu();
            setTimeout(() => {
                document.getElementById('cancel-edit-btn').click(); 
                message.textContent = '';
            }, 1000);

        } else {
            message.textContent = 'Erro: Usuário não logado.';
        }
    });


    // --- Fechamento de Modals (Geral) ---
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
        
        // 2. Inicializa as grades com filtros/ordenação padrão
        applyCurrentFilters(); 
        
        // 3. Inicializa o estado de autenticação
        updateProfileMenu();
        
        // 4. Inicializa o banner com o primeiro show da nova lista
        updateBanner(currentBannerIndex);
    }

    initializeApp();

});