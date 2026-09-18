"use client";

import { motion } from "framer-motion";
import { Music, Radio, Disc, Play, Heart, Headphones, ChevronRight, PlayCircle, Star, MessageCircle, CheckCircle, Clock } from "lucide-react";
import { statistics, genres, topVibers, steps, testimonials, suggestedVibes, trendingTracks } from "@/data/mockData";
import Link from "next/link";

export default function Home() {
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
    <main className="bg-[#0a0a10] text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden relative">
      
      {/* Background Neon Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

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
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-[1.1] text-white"
          >
            Find Your Rhythm. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500">
              Connect Your Vibe.
            </span> 
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light"
          >
            Kết nối với những tâm hồn đồng điệu. Dù bạn đam mê quẩy EDM, chill cùng Lo-fi, hay phiêu lãng với Indie acoustic, sẽ luôn có người chờ để nghe nhạc cùng bạn.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/players">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-lg rounded-full shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5" /> Tìm Vibe-Mate Ngay
              </motion.button>
            </Link>
            <Link href="/features">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-gray-300 font-bold text-lg rounded-full border border-white/20 hover:border-white/40 flex items-center justify-center gap-2 transition-colors"
              >
                <PlayCircle className="w-5 h-5" /> Cách Hoạt Động
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- STATISTICS SECTION --- */}
      <section className="py-16 relative bg-white/5 backdrop-blur-md border-y border-white/10 z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {statistics.map((stat, idx) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl md:text-6xl font-black text-white mb-2">
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-4 tracking-tight">
                <span className="text-fuchsia-500">Playlist</span> Tâm Trạng
              </h2>
              <p className="text-gray-400 text-lg">Khám phá các playlist được AI gợi ý dựa trên cảm xúc của bạn hôm nay.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {suggestedVibes.map((vibe, idx) => (
              <motion.div
                key={vibe.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={vibe.image} 
                    alt={vibe.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-sm">
                    <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-black shadow-lg shadow-cyan-500/50">
                      <Play className="w-8 h-8 ml-1" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{vibe.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {vibe.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-bold px-2 py-1 bg-white/20 backdrop-blur-md rounded-md text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 line-clamp-2">{vibe.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRENDING TRACKS LIST (NEW SECTION) --- */}
      <section className="py-24 px-6 relative z-10 bg-[#0f0f16] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-4 tracking-tight">
                Nhạc Đang <span className="text-cyan-400">Thịnh Hành</span>
              </h2>
              <p className="text-gray-400 text-lg">Top 10 giai điệu được nghe và ghép đôi nhiều nhất trên nền tảng tuần này.</p>
            </motion.div>
            <motion.button 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-cyan-400 hover:text-cyan-300 font-bold text-sm flex items-center gap-1 transition-colors"
            >
              Phát Toàn Bộ <PlayCircle className="w-4 h-4" />
            </motion.button>
          </div>

          <div className="flex flex-col gap-3">
            {/* Table Header */}
            <div className="flex items-center justify-between px-4 pb-2 border-b border-white/10 text-gray-500 text-xs font-bold uppercase tracking-wider">
              <div className="flex items-center gap-4 w-2/3">
                <span className="w-6 text-center">#</span>
                <span>Bài Hát</span>
              </div>
              <div className="flex items-center justify-between w-1/3">
                <span className="hidden sm:block">Thể Loại</span>
                <Clock className="w-4 h-4" />
              </div>
            </div>

            {/* Track List */}
            {trendingTracks.map((track, idx) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4 w-2/3">
                  <span className="w-6 text-center text-gray-500 font-bold group-hover:hidden">{idx + 1}</span>
                  <Play className="w-6 h-6 text-cyan-400 hidden group-hover:block drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  <img src={track.cover} alt={track.title} className="w-12 h-12 rounded object-cover shadow-md" />
                  <div>
                    <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors truncate">{track.title}</h4>
                    <p className="text-sm text-gray-400 truncate">{track.artist}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between w-1/3">
                  <span className="hidden sm:block text-xs uppercase font-bold tracking-wider px-3 py-1 bg-white/5 text-gray-300 rounded-full border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                    {track.genre}
                  </span>
                  <span className="text-gray-400 font-medium">{track.duration}</span>
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -8 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`group relative bg-[#13131a] border border-white/10 p-8 rounded-2xl cursor-pointer transition-all duration-300 ${genre.glow}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${genre.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`} />
                
                <div className="flex justify-center mb-6">
                  {getGenreIcon(genre.id)}
                </div>
                <h3 className={`font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${genre.color} mb-2`}>
                  {genre.name}
                </h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest">{genre.artists}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <section className="py-24 px-6 relative z-10 bg-[#0a0a10]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-black tracking-tight mb-4"
            >
              Làm Sao Để <span className="text-cyan-400">Match Vibe?</span>
            </motion.h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Chỉ cần 3 bước đơn giản để hòa vào cộng đồng âm nhạc đa sắc màu.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 text-[120px] font-black text-white/5 pointer-events-none">
                  {step.id}
                </div>
                <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
                <p className="text-gray-400 relative z-10">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VIBE FINDER (PLAYERS) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-4 tracking-tight">
              Tìm Thấy <span className="text-cyan-400">Vibe-Mate</span> Của Bạn
            </h2>
            <p className="text-gray-400 text-lg">Những người có độ tương thích cao với gu âm nhạc của bạn.</p>
          </motion.div>
          <Link href="/players">
            <motion.button 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-cyan-400 hover:text-cyan-300 font-bold text-sm flex items-center gap-1 transition-colors"
            >
              Xem tất cả Vibe-mate <ChevronRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topVibers.map((viber, idx) => (
            <motion.div 
              key={viber.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group bg-[#13131a] border border-white/10 hover:border-cyan-500/50 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <img src={viber.avatar} alt={viber.name} className="w-14 h-14 rounded-full border-2 border-white/10 group-hover:border-cyan-400 transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">{viber.name}</h3>
                  <p className="text-xs text-gray-400 font-medium mt-1">Match: <span className="text-cyan-400">{viber.match}</span></p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {viber.genres.map(g => (
                  <span key={g} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-white/10 text-gray-300 rounded-md">
                    {g}
                  </span>
                ))}
              </div>

              <div className="bg-[#0a0a10] p-4 rounded-xl mb-6 border border-white/5 flex-grow">
                <p className="text-[10px] text-gray-500 mb-1 font-bold uppercase">Bản nhạc đang nghe</p>
                <p className="font-bold text-sm text-violet-400 flex items-center gap-2 truncate">
                  <Music className="w-3 h-3 flex-shrink-0" /> <span className="truncate">{viber.favorite}</span>
                </p>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-white/5 text-gray-300 font-bold text-sm rounded-xl flex items-center justify-center gap-2 group-hover:bg-cyan-500 group-hover:text-black transition-all mt-auto"
              >
                <MessageCircle className="w-4 h-4" /> Bắt chuyện
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-24 px-6 bg-[#0f0f16] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black tracking-tight mb-4">
              Cộng Đồng <span className="text-violet-500">Chia Sẻ</span>
            </h2>
            <p className="text-gray-400 text-lg">Hàng ngàn tình bạn (và cả tình yêu) đã nảy nở từ VibeMatch.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="bg-[#13131a] p-8 rounded-3xl border border-white/10"
              >
                <div className="flex gap-1 text-cyan-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 italic leading-relaxed">"{review.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border border-white/20" />
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="py-24 px-6 bg-[#0a0a10]">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-600 to-violet-700 rounded-[2rem] p-12 md:p-16 text-center text-white shadow-2xl shadow-cyan-900/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-400/20 rounded-full blur-3xl" />
            
            <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10">Bạn Đã Sẵn Sàng Bật Nhạc?</h2>
            <p className="text-cyan-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
              Dù là một bài hát xập xình hay một bản nhạc buồn, đừng nghe nó một mình. Đồng bộ ứng dụng âm nhạc ngay để kết nối thế giới.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-violet-700 font-black text-lg rounded-full shadow-xl flex items-center gap-3 mx-auto relative z-10 hover:bg-gray-100 transition-colors"
            >
              <Disc className="w-6 h-6 animate-spin-slow" /> Đồng Bộ Thư Viện Nhạc
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
