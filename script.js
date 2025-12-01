document.addEventListener('DOMContentLoaded', () => {

    // --- Variáveis Globais e Configurações Iniciais ---
    
    // Dados Fictícios de Animes
    const topShowsData = [
        { id: 1, title: "Jujutsu Kaisen", sinopse: "Yuji Itadori se junta a um clube de ocultismo, mas depois de engolir um dedo amaldiçoado, ele é possuído por Sukuna, o Rei das Maldições, e se torna um feiticeiro Jujutsu.", imageUrl: "assets/media/img/jujutsu.jpg" },
        { id: 2, title: "Bleach: TYBW", sinopse: "O clímax épico da saga Bleach. Ichigo e a Soul Society enfrentam Yhwach e os Quincies na Guerra Sangrenta dos Mil Anos.", imageUrl: "assets/media/img/bleach.jpg" },
        { id: 3, title: "Spy x Family", sinopse: "Um espião, uma assassina e uma garota com poderes psíquicos formam uma família falsa para cumprir uma missão secreta de paz mundial.", imageUrl: "assets/media/img/Spy.jpg" },
        { id: 4, title: "Chainsaw Man", sinopse: "Denji, um jovem caçador de demônios, funde-se com seu demônio de estimação, Pochita, e se torna o Chainsaw Man.", imageUrl: "assets/media/img/Chainsaw.jpg" },
        { id: 5, title: "Attack on Titan", sinopse: "Em um mundo onde a humanidade vive cercada por muros para se proteger de gigantes humanóides, Eren Jager jura vingança após perder sua mãe em um ataque.", imageUrl: "assets/media/img/attackontitan.jpg" },
        { id: 6, title: "One Piece", sinopse: "Monkey D. Luffy e sua tripulação, os Piratas do Chapéu de Palha, navegam em busca do tesouro One Piece para que Luffy se torne o Rei dos Piratas.", imageUrl: "assets/media/img/onepiece.jpg" },
        { id: 7, title: "Frieren: Beyond", sinopse: "A elfa maga Frieren, que vive por milênios, reflete sobre a mortalidade humana e embarca em uma nova jornada após a morte de seus companheiros de aventura.", imageUrl: "assets/media/img/Frieren.jpg" },
        { id: 8, title: "Oshi no Ko", sinopse: "Um médico e sua paciente renascem como os filhos gêmeos de sua idol favorita, Ai Hoshino, e mergulham no lado sombrio da indústria do entretenimento.", imageUrl: "assets/media/img/oshinoko.jpg" },
        { id: 9, title: "My Hero Academia", sinopse: "Em um mundo de super-heróis e superpoderes (Quirks), Izuku Midoriya, nascido sem poderes, herda o poder de seu ídolo All Might e se matricula em uma escola de heróis.", imageUrl: "assets/media/img/Myhero.jpg" },
        { id: 10, title: "Hunter x Hunter", sinopse: "Gon Freecss deixa sua ilha natal para se tornar um Hunter e encontrar seu pai, embarcando em aventuras com novos amigos e desafios mortais.", imageUrl: "assets/media/img/hunterxhunter.jpg" },
        { id: 11, title: "Demon Slayer: Arco da vontade inabalável", sinopse: "Tanjiro Kamado junta-se ao Corpo de Extermínio de Demônios para vingar sua família e tentar transformar sua irmã, Nezuko, de volta em humana.", imageUrl: "assets/media/img/demonslayer.jpg"},
        { id: 12, title: "Dragon Ball:Clássico", sinopse: "As aventuras do jovem Goku e seus amigos em busca das lendárias Esferas do Dragão, capazes de realizar qualquer desejo.", imageUrl:"assets/media/img/dragonball.jpg"}
    ];

    localStorage.setItem('animeDeckShows', JSON.stringify(topShowsData));
    
    // Elementos da Página Principal
    const showsGrid = document.querySelector('.shows-grid');
    const cards = []; 
    const cursor = document.getElementById('cursor-tracker');

    // Elementos do Modal de Animes
    const detalhesModal = document.getElementById('detalhes-modal');
    const detalhesTitulo = document.getElementById('detalhes-titulo');
    const detalhesSinopse = document.getElementById('detalhes-sinopse');
    const detalhesImagem = document.getElementById('detalhes-imagem');
    const minhaListaBtn = document.getElementById('minha-lista-btn'); // NOVO ID

    // Elementos de Autenticação e Perfil
    const profileButton = document.getElementById('profile-icon-btn');
    const profileMenu = document.getElementById('profile-dropdown-menu');
    const loginRegisterModal = document.getElementById('login-register-modal');
    const profileModal = document.getElementById('profile-modal');
    const settingsModal = document.getElementById('settings-modal');
    const myListModal = document.getElementById('my-list-modal'); // NOVO MODAL

    // Formulários
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const profileSettingsForm = document.getElementById('profile-settings-form');
    const appSettingsForm = document.getElementById('app-settings-form');
    
    // Variável para armazenar o ID do anime atualmente exibido no modal
    let currentAnimeId = null;

    // ----------------------------------------------------------------------
    // --- FUNÇÕES DE UTILIDADE ---
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
        // Inclui o novo modal na lista de fechamento
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


    // ----------------------------------------------------------------------
    // --- LÓGICA DE MINHA LISTA ---
    // ----------------------------------------------------------------------

    /**
     * Atualiza o estado do botão Minha Lista no modal de detalhes.
     */
    function updateMinhaListaBtn(animeId) {
        const user = getCurrentUser();
        // Se não houver usuário logado, mantém o estado padrão
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
            // Remover
            myList.splice(index, 1);
            alert('Removido da Minha Lista.');
        } else {
            // Adicionar
            myList.push(idInt);
            alert('Adicionado à Minha Lista!');
        }

        user.myList = myList;
        users[currentUserId] = user;
        localStorage.setItem('animeDeckUsers', JSON.stringify(users));

        // Atualiza o texto do botão
        updateMinhaListaBtn(animeId);
    }

    // Event listener para o botão "Minha Lista" no modal de detalhes
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
        listContent.innerHTML = ''; // Limpa a lista antiga

        if (!user || user.myList.length === 0) {
            listContent.innerHTML = '<p class="empty-list-msg">Sua lista está vazia! Adicione alguns animes através do modal de detalhes.</p>';
            return;
        }

        const allAnimes = JSON.parse(localStorage.getItem('animeDeckShows') || '[]');
        // Filtra apenas os animes que estão na lista do usuário
        const userList = allAnimes.filter(anime => user.myList.includes(anime.id));

        const listGrid = document.createElement('div');
        listGrid.classList.add('shows-grid', 'list-grid');

        userList.forEach(anime => {
            const card = createShowCard(anime);
            
            // Cria o botão de remover
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remover';
            removeBtn.classList.add('btn-remove-list');
            removeBtn.setAttribute('data-id', anime.id);

            // Evento para remover ao clicar no botão
            removeBtn.addEventListener('click', () => {
                toggleAnimeInMyList(anime.id);
                // Recarrega a lista para mostrar a remoção
                loadMyList(); 
            });
            
            // Remove o evento de clique do card (para não abrir o modal de detalhes)
            card.removeEventListener('click', mostrarDetalhes); 

            const cardWrapper = document.createElement('div');
            cardWrapper.classList.add('list-card-wrapper');
            cardWrapper.appendChild(card);
            cardWrapper.appendChild(removeBtn);
            listGrid.appendChild(cardWrapper);
        });

        listContent.appendChild(listGrid);
    }
    
    // Evento para abrir o modal Minha Lista
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


    // ----------------------------------------------------------------------
    // --- LÓGICA DE AUTENTICAÇÃO E PERFIL (Adaptação para Minha Lista) ---
    // ----------------------------------------------------------------------

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
            myList: [], // Inicializa a Minha Lista
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
    });


    // ... (O restante da lógica de Profile e Settings permanece o mesmo) ...

    // Evento de clique no ícone do Perfil para abrir/fechar o menu dropdown
    profileButton.addEventListener('click', (e) => {
        e.stopPropagation();
        if (profileMenu.style.display === 'block') {
            profileMenu.style.display = 'none';
        } else {
            updateProfileMenu();
            profileMenu.style.display = 'block';
        }
    });
    // Fechar o dropdown se clicar fora dele
    document.addEventListener('click', (e) => {
        if (!profileMenu.contains(e.target) && e.target !== profileButton) {
            profileMenu.style.display = 'none';
        }
    });


    // Abre os Modais de Login/Registro
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
        const currentUserId = localStorage.getItem('currentUserId');
        const users = JSON.parse(localStorage.getItem('animeDeckUsers'));
        const user = users[currentUserId];

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
        const currentUserId = localStorage.getItem('currentUserId');
        const users = JSON.parse(localStorage.getItem('animeDeckUsers'));
        const user = users[currentUserId];

        if (user) {
            const settings = user.appSettings;
            document.getElementById('settings-theme').value = settings.theme || 'dark';
            document.getElementById('settings-quality').value = settings.quality || 'auto';
            openModal(settingsModal);
        }
    });

    // Salva as Configurações do Aplicativo.
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
        
        alert('Configurações de Aplicativo salvas com sucesso!');
        closeModal(settingsModal);
    });


    // ----------------------------------------------------------------------
    // --- LÓGICA DE ANIME DETALHES ---
    // ----------------------------------------------------------------------

    // Preenche a grade principal com os cartões
    topShowsData.forEach(show => {
        const card = createShowCard(show);
        showsGrid.appendChild(card);
        cards.push(card); 
    });

    // Rastreamento do Mouse
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // FUNÇÃO PRINCIPAL: Carregar e Mostrar Detalhes do Anime (MODIFICADA)
    function mostrarDetalhes(animeId) {
        const dadosSalvos = JSON.parse(localStorage.getItem('animeDeckShows') || '[]');
        const animeSelecionado = dadosSalvos.find(anime => anime.id === parseInt(animeId));

        if (animeSelecionado) {
            // Define o ID do anime atual para ser usado pela função Minha Lista
            currentAnimeId = animeId; 
            
            detalhesTitulo.textContent = animeSelecionado.title;
            detalhesSinopse.textContent = animeSelecionado.sinopse;
            detalhesImagem.src = animeSelecionado.imageUrl;
            detalhesImagem.alt = animeSelecionado.title;
            
            // NOVO: Atualiza o estado do botão 'Minha Lista'
            updateMinhaListaBtn(animeId);

            openModal(detalhesModal);
        } else {
            console.error("Anime não encontrado com ID:", animeId);
            alert("Erro ao carregar detalhes do anime.");
        }
    }

    // Event Listeners (Hover/Clique)
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2)'; 
            cursor.style.background = 'radial-gradient(circle, rgba(247, 56, 89, 0.5), rgba(247, 56, 89, 0))';
        });

        card.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))';
        });

        card.addEventListener('click', function() {
            const idDoAnime = this.getAttribute('data-id');
            mostrarDetalhes(idDoAnime);
        });
    });


    // Event Listeners para Fechar Todos os Modais (Botão X ou ESC)
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

    // Inicializa o estado de autenticação ao carregar a página
    updateProfileMenu();
});