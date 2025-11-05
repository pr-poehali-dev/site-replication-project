import { useState, useEffect, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'Finding Home',
    category: 'Installation',
    client: 'Google',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=90'
  },
  {
    id: 2,
    title: 'Chrome Music Lab',
    category: 'Web Experience',
    client: 'Google',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&q=90'
  },
  {
    id: 3,
    title: 'Lexus LC',
    category: 'Interactive',
    client: 'Lexus',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=90'
  },
  {
    id: 4,
    title: 'TED Countdown',
    category: 'Platform',
    client: 'TED',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=90'
  },
  {
    id: 5,
    title: 'Nike Air Max',
    category: 'Campaign',
    client: 'Nike',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=90'
  },
  {
    id: 6,
    title: 'Spotify Wrapped',
    category: 'Experience',
    client: 'Spotify',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=90'
  }
];

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Array<{x: number, y: number, vx: number, vy: number, life: number}>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      if (particles.current.length < 100) {
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current = particles.current.filter(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.01;
        
        if (p.life > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(156, 156, 156, ${p.life})`;
          ctx.fill();
          return true;
        }
        return false;
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#9C9C9C] relative overflow-x-hidden">
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-50"
      />

      <nav className="fixed top-0 left-0 right-0 z-40 mix-blend-difference">
        <div className="flex items-center justify-between p-6">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 flex flex-col items-center justify-center gap-1.5 hover:opacity-60 transition-opacity"
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          <div className="text-sm tracking-widest text-white uppercase">
            Active Theory
          </div>

          <div className="w-12"></div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-[#333] via-black to-black opacity-50"></div>
          
          <div className="relative z-10 flex items-center gap-32">
            <div className="flex flex-col gap-8 text-left">
              <a 
                href="#work" 
                onClick={() => setIsMenuOpen(false)}
                className="text-6xl md:text-8xl font-light tracking-tight text-white hover:text-[#9C9C9C] transition-colors"
              >
                Work
              </a>
              <a 
                href="#about" 
                onClick={() => setIsMenuOpen(false)}
                className="text-6xl md:text-8xl font-light tracking-tight text-white hover:text-[#9C9C9C] transition-colors"
              >
                About
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="text-6xl md:text-8xl font-light tracking-tight text-white hover:text-[#9C9C9C] transition-colors"
              >
                Contact
              </a>
            </div>

            <div 
              className="relative w-64 h-64"
              style={{
                transform: `translate(${(mousePos.x - window.innerWidth / 2) * 0.02}px, ${(mousePos.y - window.innerHeight / 2) * 0.02}px)`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#444] via-[#666] to-transparent rounded-full blur-3xl opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl font-black text-white/10">AT</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-10"
            style={{
              background: 'radial-gradient(circle, #9C9C9C 0%, transparent 70%)',
              left: `${mousePos.x - 300}px`,
              top: `${mousePos.y - 300}px`,
              transition: 'left 0.5s, top 0.5s'
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-7xl md:text-[12rem] lg:text-[16rem] font-light tracking-tighter text-white leading-none mb-8">
            Active
            <br />
            Theory
          </h1>
          <p className="text-xl md:text-2xl tracking-wide max-w-2xl mx-auto">
            Creative digital production for forward-thinking brands
          </p>
        </div>
      </section>

      <section id="work" className="py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-sm tracking-[0.3em] uppercase mb-20 text-center">
            Selected Work
          </h2>
          
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[16/9] overflow-hidden mb-8">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-[800ms] group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
                </div>
                
                <div className="flex items-start justify-between gap-8 px-4">
                  <div>
                    <h3 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-lg tracking-wide">{project.category}</p>
                  </div>
                  <div className="text-right text-sm tracking-widest pt-4">
                    <p className="text-white">{project.client}</p>
                    <p>{project.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm tracking-[0.3em] uppercase mb-20 text-center">
            About
          </h2>
          
          <p className="text-4xl md:text-5xl lg:text-6xl font-light leading-relaxed text-white/90 mb-16">
            We blend story, art & technology as an in-house team of passionate makers.
          </p>
          
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl">
            Our industry-leading web toolset consistently delivers award-winning work 
            through quality & performance. Founded in 2012, we've created experiences 
            for the world's most innovative brands.
          </p>
        </div>
      </section>

      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-white mb-12">
            Let's create
            <br />
            something
            <br />
            together
          </h2>
          
          <a 
            href="mailto:hello@activetheory.net"
            className="inline-block text-xl md:text-2xl tracking-wide text-white hover:text-[#9C9C9C] transition-colors border-b border-white hover:border-[#9C9C9C] pb-1"
          >
            hello@activetheory.net
          </a>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="tracking-widest">
            © 2024 Active Theory
          </div>
          
          <div className="flex items-center gap-8 tracking-wide">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          
          <div className="tracking-wide">
            Los Angeles / Amsterdam
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
