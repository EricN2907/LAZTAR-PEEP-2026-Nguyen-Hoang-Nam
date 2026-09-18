"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Radio, Disc, Play, Heart, Headphones, ChevronRight, PlayCircle, Star, MessageCircle, CheckCircle, Clock, Volume2, VolumeX } from "lucide-react";
import { statistics, genres, topVibers, steps, testimonials, suggestedVibes, trendingTracks } from "@/data/mockData";
import Link from "next/link";

export default function Home() {
  // Audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const getGenreIcon = (id: number) => {
    switch (id) {
      case 1: return <Disc className="w-12 h-12 text-cyan-400" />;
      case 2: return <Headphones className="w-12 h-12 text-amber-500" />;
      case 3: return <Play className="w-12 h-12 text-emerald-400" />;
      case 4: return <Radio className="w-12 h-12 text-pink-500" />;
      default: return <Music className="w-12 h-12 text-gray-400" />;
    }
  };

  return (
    <main className="bg-[#0a0a10] text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden relative min-h-screen">
      
      {/* --- BACKGROUND MUSIC PLAYER --- */}
      {/* Nguồn nhạc Lofi không bản quyền từ Pixabay */}
      <audio 
        ref={audioRef} 
        loop 
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3" 
      />

      {/* Floating Audio Controller */}
      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
          isPlaying 
            ? "bg-gradient-to-r from-cyan-500 to-violet-600 shadow-cyan-500/50" 
            : "bg-white/10 backdrop-blur-md border border-white/20 text-gray-300"
        }`}
      >
        {isPlaying ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Disc className="w-8 h-8 text-white" />
          </motion.div>
        ) : (
          <VolumeX className="w-7 h-7" />
        )}
        
        {/* Animated equalizer waves when playing */}
        {isPlaying && (
          <div className="absolute -top-2 -right-2 flex gap-1">
            <motion.span animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-1 bg-cyan-400 rounded-full"></motion.span>
            <motion.span animate={{ height: [8, 4, 16, 8] }} transition={{ repeat: Infinity, duration: 0.7 }} className="w-1 bg-violet-400 rounded-full"></motion.span>
            <motion.span animate={{ height: [4, 16, 4] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1 bg-fuchsia-400 rounded-full"></motion.span>
          </div>
        )}
      </motion.button>

      {/* Background Animated Neon Glows */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none" 
      />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-24 px-6 lg:pt-52 lg:pb-32 flex flex-col items-center justify-center text-center">
        <div 
          className="absolute inset-0 z-0 opacity-[0.15]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1470229722913-7c090be5c520?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a10]/80 to-[#0a0a10] z-0" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold rounded-full text-sm mb-6 uppercase tracking-widest backdrop-blur-md"
          >
            🎵 Trải nghiệm âm nhạc không giới hạn
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-[1.1] text-white"
          >
            Find Your Rhythm. <br />
            <motion.span 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 bg-[length:200%_auto]"
            >
              Connect Your Vibe.
            </motion.span> 
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light"
          >
            Kết nối với những tâm hồn đồng điệu. Dù bạn đam mê quẩy EDM, chill cùng Lo-fi, hay phiêu lãng với Indie acoustic.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/players">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-lg rounded-full shadow-xl flex items-center justify-center gap-2 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
                <Heart className="w-5 h-5 group-hover:animate-ping absolute opacity-0 group-hover:opacity-100" />
                <Heart className="w-5 h-5 relative z-10" /> Tìm Vibe-Mate Ngay
              </motion.button>
            </Link>
            <motion.button 
              onClick={togglePlay}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-bold text-lg rounded-full border border-white/20 hover:border-white/40 flex items-center justify-center gap-2 transition-colors"
            >
              <PlayCircle className={`w-5 h-5 ${isPlaying ? 'text-cyan-400' : ''}`} /> 
              {isPlaying ? "Tạm Dừng Nhạc" : "Nghe Thử Nhạc"}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* --- STATISTICS SECTION --- */}
      <section className="py-16 relative bg-white/5 backdrop-blur-md border-y border-white/10 z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {statistics.map((stat, idx) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="text-5xl md:text-6xl font-black text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                {stat.value}
              </div>
              <div className="text-cyan-400 font-bold uppercase tracking-wider text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SUGGESTED VIBES / PLAYLISTS --- */}
      <section className="py-24 px-6 relative z-10 bg-[#0a0a10]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-4 tracking-tight flex items-center gap-3">
                <span className="text-fuchsia-500">Playlist</span> Tâm Trạng
              </h2>
              <p className="text-gray-400 text-lg">Khám phá các playlist được AI gợi ý dựa trên cảm xúc của bạn hôm nay.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {suggestedVibes.map((vibe, idx) => (
              <motion.div
                key={vibe.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, type: "spring", stiffness: 50 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl"
              >
                <div className="aspect-square relative overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    src={vibe.image} 
                    alt={vibe.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a10] via-black/40 to-transparent" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      className="w-16 h-16 bg-fuchsia-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-fuchsia-500/50"
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </motion.div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-white mb-2">{vibe.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {vibe.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-bold px-2 py-1 bg-white/20 backdrop-blur-md rounded-md text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{vibe.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRENDING TRACKS LIST --- */}
      <section className="py-24 px-6 relative z-10 bg-[#0f0f16] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
          >
            <div>
              <h2 className="text-4xl font-black mb-4 tracking-tight">
                Nhạc Đang <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="text-cyan-400">Thịnh Hành</motion.span>
              </h2>
              <p className="text-gray-400 text-lg">Top 10 giai điệu được nghe và ghép đôi nhiều nhất trên nền tảng tuần này.</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-3">
            {trendingTracks.map((track, idx) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05, type: "spring", stiffness: 50 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="group flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-cyan-500/30 transition-all cursor-pointer relative overflow-hidden"
              >
                {/* Glow effect inside row on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div className="flex items-center gap-4 w-2/3 relative z-10">
                  <span className="w-6 text-center text-gray-500 font-bold group-hover:hidden">{idx + 1}</span>
                  <motion.div whileHover={{ scale: 1.2 }} className="w-6 hidden group-hover:flex justify-center">
                    <Play className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  </motion.div>
                  <img src={track.cover} alt={track.title} className="w-12 h-12 rounded object-cover shadow-md group-hover:shadow-cyan-500/50 transition-shadow" />
                  <div>
                    <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors truncate">{track.title}</h4>
                    <p className="text-sm text-gray-400 truncate">{track.artist}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between w-1/3 relative z-10">
                  <span className="hidden sm:block text-xs uppercase font-bold tracking-wider px-3 py-1 bg-white/5 text-gray-300 rounded-full border border-white/10 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition-colors">
                    {track.genre}
                  </span>
                  <span className="text-gray-400 font-medium group-hover:text-white transition-colors">{track.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GENRES SYSTEM --- */}
      <section className="py-24 px-6 relative z-10 bg-[#0a0a10] border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black mb-4 tracking-tight"
          >
            Khám Phá Theo <span className="text-violet-500">Tần Số Âm Nhạc</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">Từ không khí sôi động của Lễ hội EDM đến góc phòng ngủ văng vẳng tiếng Lo-fi mưa rơi.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {genres.map((genre, idx) => (
              <motion.div 
                key={genre.id} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.05 }}
                className={`group relative bg-[#13131a] border border-white/10 p-8 rounded-2xl cursor-pointer transition-all duration-300 ${genre.glow}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${genre.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`} />
                
                <motion.div 
                  className="flex justify-center mb-6"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {getGenreIcon(genre.id)}
                </motion.div>
                <h3 className={`font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${genre.color} mb-2`}>
                  {genre.name}
                </h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">{genre.artists}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="py-24 px-6 bg-[#0a0a10]">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-600 via-blue-600 to-violet-700 rounded-[2rem] p-12 md:p-16 text-center text-white shadow-2xl shadow-cyan-900/40 relative overflow-hidden group"
          >
            {/* Animated background blobs inside banner */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" 
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-32 -left-32 w-96 h-96 bg-fuchsia-400/20 rounded-full blur-3xl pointer-events-none" 
            />
            
            <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10">Bạn Đã Sẵn Sàng Bật Nhạc?</h2>
            <p className="text-cyan-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
              Đừng nghe nó một mình. Đồng bộ ứng dụng âm nhạc ngay để kết nối với hàng nghìn Vibe-Mate trên toàn cầu.
            </p>
            <motion.button 
              whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-violet-700 font-black text-lg rounded-full shadow-xl flex items-center gap-3 mx-auto relative z-10 hover:bg-gray-100 transition-all"
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                <Disc className="w-6 h-6" /> 
              </motion.div>
              Tham Gia Ngay
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
