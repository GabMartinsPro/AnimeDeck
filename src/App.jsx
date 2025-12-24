import React, { useState, useEffect } from 'react';
// Alterado para HashRouter para garantir compatibilidade com GitHub Pages
import { HashRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Moon, Sun, User, Star, Play, Music, ChevronLeft, LogOut, Zap, X, Volume2 } from 'lucide-react';

// --- NAVBAR ---
const Navbar = ({ isDark, setIsDark, setSearchTerm, user, setUser }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('loggedUser');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b dark:border-slate-800 p-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <Link to="/" className="text-2xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">AnimeDeck</Link>
        <div className="flex-1 max-w-md relative">
          <Search className="absolute left-3 top-2.5 size-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Pesquisar animes..." 
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 focus:ring-2 ring-indigo-500 outline-none dark:text-white" 
          />
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-slate-600" />}
          </button>
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold dark:text-white hidden md:block">Olá, {user.username}</span>
              <button onClick={handleLogout} className="text-red-500 p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-indigo-700 transition">
              <User size={18} /> Entrar
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

// --- PLAYER DE MÚSICA ---
const MusicPlayer = ({ track, setTrack }) => {
  if (!track) return null;

  const videoId = track.split(' ').join('+');
  const embedUrl = `https://www.youtube.com/embed?listType=search&list=${videoId}&autoplay=1`;

  return (
    <motion.div 
      initial={{ y: 100 }} 
      animate={{ y: 0 }} 
      className="fixed bottom-6 right-6 z-[60] w-80 bg-white dark:bg-slate-900 shadow-2xl rounded-3xl border dark:border-slate-800 overflow-hidden"
    >
      <div className="p-4 bg-indigo-600 text-white flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Volume2 size={20} className="animate-pulse" />
          <span className="text-xs font-bold truncate w-40">A tocar: {track}</span>
        </div>
        <button onClick={() => setTrack(null)}><X size={20}/></button>
      </div>
      <div className="aspect-video">
        <iframe 
          width="100%" 
          height="100%" 
          src={embedUrl} 
          title="Music Player" 
          allow="autoplay"
          frameBorder="0"
        ></iframe>
      </div>
    </motion.div>
  );
};

// --- PÁGINA DE DETALHES ---
const Details = ({ setActiveTrack }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [anime, setAnime] = useState(null);
  const [themes, setThemes] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
      .then(res => res.json())
      .then(data => setAnime(data.data));
    fetch(`https://api.jikan.moe/v4/anime/${id}/themes`)
      .then(res => res.json())
      .then(data => setThemes(data.data));
  }, [id]);

  if (!anime) return <div className="h-screen flex items-center justify-center dark:text-white font-bold">Carregando detalhes...</div>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 max-w-7xl mx-auto pb-32">
      <button onClick={() => navigate(-1)} className="mb-8 flex items-center gap-2 text-indigo-500 font-bold hover:scale-105 transition-transform">
        <ChevronLeft size={24}/> Voltar
      </button>

      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-6">
          <img 
            src={anime.images.jpg.large_image_url} 
            className="rounded-[2.5rem] shadow-2xl w-full border-4 border-white dark:border-slate-800" 
            alt={anime.title}
          />
          {anime.trailer?.embed_url && (
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-video border dark:border-slate-800">
              <iframe 
                className="w-full h-full" 
                src={anime.trailer.embed_url.replace("autoplay=1", "autoplay=0")} 
                allowFullScreen
                title="Trailer"
              ></iframe>
            </div>
          )}
        </div>

        <div className="lg:col-span-8 space-y-8 dark:text-white">
          <h1 className="text-5xl font-black">{anime.title}</h1>
          <div className="flex gap-4">
            <span className="bg-yellow-500 text-black px-4 py-1 rounded-full font-bold flex items-center gap-1">
              <Star size={16} fill="black"/> {anime.score || 'N/A'}
            </span>
            <span className="bg-indigo-600 text-white px-4 py-1 rounded-full font-bold uppercase text-xs">
              {anime.status}
            </span>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border dark:border-slate-800 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Sinopse</h2>
            <p className="text-slate-600 dark:text-slate-400 italic leading-relaxed">
              {anime.synopsis || "Sinopse não disponível."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-3xl border dark:border-slate-800">
              <h3 className="font-bold text-indigo-500 mb-4 flex items-center gap-2"><Music size={20}/> Aberturas</h3>
              <div className="space-y-2">
                {themes?.openings?.length > 0 ? themes.openings.map((s, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b last:border-0 dark:border-slate-800 text-sm">
                    <span className="truncate pr-2">{s}</span>
                    <button 
                      onClick={() => setActiveTrack(`${anime.title} Opening ${s}`)} 
                      className="p-2 bg-indigo-600 text-white rounded-full hover:scale-110 transition shrink-0"
                    >
                      <Play size={12} fill="currentColor"/>
                    </button>
                  </div>
                )) : <p className="text-xs text-slate-500">Nenhuma abertura listada.</p>}
              </div>
            </div>
            
            <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-3xl border dark:border-slate-800">
              <h3 className="font-bold text-purple-500 mb-4 flex items-center gap-2"><Music size={20}/> Encerramentos</h3>
              <div className="space-y-2">
                {themes?.endings?.length > 0 ? themes.endings.map((s, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b last:border-0 dark:border-slate-800 text-sm">
                    <span className="truncate pr-2">{s}</span>
                    <button 
                      onClick={() => setActiveTrack(`${anime.title} Ending ${s}`)} 
                      className="p-2 bg-purple-600 text-white rounded-full hover:scale-110 transition shrink-0"
                    >
                      <Play size={12} fill="currentColor"/>
                    </button>
                  </div>
                )) : <p className="text-xs text-slate-500">Nenhum encerramento listado.</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- AUTH ---
const Auth = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleAction = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (isLogin) {
      const found = users.find(u => u.email === formData.email && u.password === formData.password);
      if (found) { 
        localStorage.setItem('loggedUser', JSON.stringify(found)); 
        setUser(found); 
        navigate('/'); 
      } else {
        alert("E-mail ou senha incorretos!");
      }
    } else {
      const exists = users.find(u => u.email === formData.email);
      if(exists) return alert("E-mail já cadastrado!");
      
      users.push(formData); 
      localStorage.setItem('users', JSON.stringify(users));
      alert("Cadastro realizado com sucesso!"); 
      setIsLogin(true);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-2xl w-full max-w-md border dark:border-slate-800">
        <h2 className="text-4xl font-black dark:text-white text-center mb-8">{isLogin ? 'Login' : 'Registo'}</h2>
        <form className="space-y-4" onSubmit={handleAction}>
          {!isLogin && (
            <input 
              type="text" 
              placeholder="Nome" 
              required 
              className="w-full p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 dark:text-white outline-none focus:ring-2 ring-indigo-500" 
              onChange={e => setFormData({...formData, username: e.target.value})} 
            />
          )}
          <input 
            type="email" 
            placeholder="E-mail" 
            required 
            className="w-full p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 dark:text-white outline-none focus:ring-2 ring-indigo-500" 
            onChange={e => setFormData({...formData, email: e.target.value})} 
          />
          <input 
            type="password" 
            placeholder="Senha" 
            required 
            className="w-full p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 dark:text-white outline-none focus:ring-2 ring-indigo-500" 
            onChange={e => setFormData({...formData, password: e.target.value})} 
          />
          <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-colors">
            {isLogin ? 'Entrar' : 'Cadastrar'}
          </button>
        </form>
        <button onClick={() => setIsLogin(!isLogin)} className="w-full mt-6 text-indigo-500 font-bold hover:underline">
          {isLogin ? 'Criar conta' : 'Já tenho conta'}
        </button>
      </motion.div>
    </div>
  );
};

// --- HOME ---
const Home = ({ searchTerm }) => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url = searchTerm 
      ? `https://api.jikan.moe/v4/anime?q=${searchTerm}` 
      : `https://api.jikan.moe/v4/top/anime?limit=12`;
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setAnimes(data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [searchTerm]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-black dark:text-white mb-8 flex items-center gap-2">
        <Zap className="text-yellow-500" /> Explorar
      </h2>
      
      {loading ? (
        <div className="text-center py-20 dark:text-white font-bold">Buscando animes...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {animes.length > 0 ? animes.map(anime => (
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <motion.div 
                whileHover={{ y: -10 }} 
                className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-xl border dark:border-slate-800 h-full flex flex-col"
              >
                <img src={anime.images.jpg.large_image_url} className="w-full h-72 object-cover" alt={anime.title} />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-black dark:text-white truncate text-lg mb-2">{anime.title}</h3>
                  <div className="flex justify-between items-center mt-auto text-sm text-slate-500 font-medium">
                    <span className="flex items-center gap-1 text-yellow-500 font-bold">
                      <Star size={14} fill="currentColor"/> {anime.score || '0.0'}
                    </span>
                    <span>{anime.year || 'N/A'}</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          )) : <div className="col-span-full text-center dark:text-white">Nenhum anime encontrado.</div>}
        </div>
      )}
    </div>
  );
};

// --- APP PRINCIPAL ---
export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTrack, setActiveTrack] = useState(null);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('loggedUser');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => { 
    document.documentElement.classList.toggle('dark', isDark); 
  }, [isDark]);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <Navbar isDark={isDark} setIsDark={setIsDark} setSearchTerm={setSearchTerm} user={user} setUser={setUser} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/login" element={<Auth setUser={setUser} />} />
            <Route path="/anime/:id" element={<Details setActiveTrack={setActiveTrack} />} />
          </Routes>
        </main>

        <MusicPlayer track={activeTrack} setTrack={setActiveTrack} />

        <footer className="p-10 text-center text-slate-500 mt-10 border-t dark:border-slate-900">
          <p className="font-bold text-indigo-600 mb-1">AnimeDeck &copy; 2025</p>
          <p className="text-xs">Desenvolvido com React & Tailwind</p>
        </footer>
      </div>
    </Router>
  );
}