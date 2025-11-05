import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const projects = [
  {
    id: 1,
    title: 'Digital Experience',
    category: 'Interactive',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80'
  },
  {
    id: 2,
    title: 'Brand Identity',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80'
  },
  {
    id: 3,
    title: 'Web Platform',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80'
  },
  {
    id: 4,
    title: 'Creative Campaign',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80'
  },
  {
    id: 5,
    title: '3D Visualization',
    category: 'Interactive',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80'
  },
  {
    id: 6,
    title: 'Motion Graphics',
    category: 'Animation',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80'
  }
];

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            ACTIVE THEORY
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-sm tracking-wide hover:text-gray-400 transition-colors">WORK</a>
            <a href="#about" className="text-sm tracking-wide hover:text-gray-400 transition-colors">ABOUT</a>
            <a href="#contact" className="text-sm tracking-wide hover:text-gray-400 transition-colors">CONTACT</a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex items-center justify-center animate-fade-in">
          <div className="flex flex-col items-center gap-8 text-center">
            <a href="#work" onClick={() => setIsMenuOpen(false)} className="text-4xl font-light tracking-wide hover:text-gray-400 transition-colors">WORK</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-4xl font-light tracking-wide hover:text-gray-400 transition-colors">ABOUT</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-4xl font-light tracking-wide hover:text-gray-400 transition-colors">CONTACT</a>
          </div>
        </div>
      )}

      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
        <div className="container mx-auto px-6 z-20 text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 animate-fade-in-up">
            CREATIVE
            <br />
            EXCELLENCE
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide animate-fade-in delay-100">
            Digital experiences that inspire
          </p>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-gray-400" />
        </div>
      </section>

      <section id="work" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16">
            SELECTED WORK
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div>
                    <p className="text-sm text-gray-400 mb-2">{project.category}</p>
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">
            ABOUT US
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-8">
            We are a creative studio specializing in interactive digital experiences. 
            Our team combines artistry with technology to create work that engages and inspires.
          </p>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
            From web platforms to immersive installations, we push the boundaries 
            of what's possible in digital design.
          </p>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
            LET'S WORK
            <br />
            TOGETHER
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Ready to create something extraordinary?
          </p>
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-200 text-lg px-12 py-6 rounded-none font-bold tracking-wide transition-all hover:scale-105"
          >
            GET IN TOUCH
          </Button>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold tracking-tight">
            ACTIVE THEORY
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              <Icon name="Linkedin" size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
