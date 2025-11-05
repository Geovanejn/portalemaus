import { Link } from "wouter";
import { Calendar, Heart, BookOpen, Users, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PortalNavbar from "@/components/PortalNavbar";
import { useState, useEffect } from "react";

export default function PortalHome() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const heroSlides = [
    {
      title: "A Fé que Move Montanhas",
      subtitle: "Devocional Recente",
      description: "Se tiverdes fé como um grão de mostarda, direis a este monte: Passa daqui para acolá, e há de passar",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop",
      cta: "Ler Devocional"
    },
    {
      title: "Retiro Espiritual 2025",
      subtitle: "Próxima Programação",
      description: "15-17 de Novembro - Três dias de renovação espiritual no Recanto da Paz",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&h=600&fit=crop",
      cta: "Ver Detalhes"
    },
    {
      title: "Inscrições Abertas",
      subtitle: "Retiro Espiritual",
      description: "Vagas limitadas! Garanta sua inscrição para o Retiro Espiritual 2025",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1200&h=600&fit=crop",
      cta: "Inscreva-se Agora"
    },
    {
      title: "Siga-nos no Instagram",
      subtitle: "Última Postagem",
      description: "Confira nossos momentos de comunhão, eventos e mensagens inspiradoras",
      image: "https://images.unsplash.com/photo-1509909756405-be0199881695?w=1200&h=600&fit=crop",
      cta: "Ver no Instagram"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const mockDevocionais = [
    {
      id: 1,
      titulo: "A Fé que Move Montanhas",
      versiculo: "Mateus 17:20",
      autor: "Ana Silva",
      data: "2025-11-05",
      preview: "Se tiverdes fé como um grão de mostarda, direis a este monte..."
    },
    {
      id: 2,
      titulo: "O Amor Nunca Falha",
      versiculo: "1 Coríntios 13:8",
      autor: "João Santos",
      data: "2025-11-04",
      preview: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria..."
    },
    {
      id: 3,
      titulo: "Confiança em Deus",
      versiculo: "Provérbios 3:5-6",
      autor: "Maria Oliveira",
      data: "2025-11-03",
      preview: "Confia no Senhor de todo o teu coração e não te estribes..."
    }
  ];

  const mockProgramacoes = [
    {
      id: 1,
      titulo: "Retiro Espiritual 2025",
      data: "15-17 de Novembro",
      local: "Chácara Recanto da Paz",
      descricao: "Três dias de renovação espiritual e comunhão"
    },
    {
      id: 2,
      titulo: "Culto de Jovens",
      data: "Todo Sábado às 19h",
      local: "Igreja Presbiteriana",
      descricao: "Louvor, pregação e comunhão"
    }
  ];

  const mockInstagram = [
    { id: 1, imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400" },
    { id: 2, imageUrl: "https://images.unsplash.com/photo-1509909756405-be0199881695?w=400" },
    { id: 3, imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
    { id: 4, imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400" },
    { id: 5, imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400" },
    { id: 6, imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400" }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <PortalNavbar />

      {/* Hero Banner - Grande e Rotativo */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-700 ease-in-out"
            style={{
              transform: index === currentSlideIndex 
                ? 'translateX(0)' 
                : index < currentSlideIndex 
                  ? 'translateX(-100%)' 
                  : 'translateX(100%)',
              opacity: index === currentSlideIndex ? 1 : 0,
            }}
            data-testid={`hero-slide-${index}`}
          >
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-800/80 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-16 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl mx-auto md:mx-0 md:ml-12 text-center md:text-left">
                  {/* Title with gradient */}
                  <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-2 md:mb-4 text-white tracking-tight animate-fade-in">
                    <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </h1>
                  
                  {/* Subtitle */}
                  <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-orange-300 mb-2 md:mb-4">
                    {slide.subtitle}
                  </p>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-lg md:text-xl text-gray-300 mb-4 md:mb-8 leading-relaxed line-clamp-2 md:line-clamp-none">
                    {slide.description}
                  </p>
                  
                  {/* CTA Button */}
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold px-6 md:px-10 py-3 md:py-6 text-sm md:text-lg shadow-2xl shadow-orange-500/40 transform hover:scale-105 transition-all"
                    data-testid={`button-hero-cta-${index}`}
                  >
                    {slide.cta} →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlideIndex(index)}
              className={`transition-all duration-300 ${
                index === currentSlideIndex
                  ? 'w-12 h-3 bg-gradient-to-r from-orange-500 to-yellow-500'
                  : 'w-3 h-3 bg-gray-400 hover:bg-gray-300'
              } rounded-full`}
              data-testid={`slide-indicator-${index}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/70 text-white p-3 rounded-full backdrop-blur-sm transition-all z-10"
          data-testid="button-prev-slide"
        >
          <span className="text-2xl">‹</span>
        </button>
        <button
          onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/70 text-white p-3 rounded-full backdrop-blur-sm transition-all z-10"
          data-testid="button-next-slide"
        >
          <span className="text-2xl">›</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Link href="/portal/devocionais">
            <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer bg-white border border-gray-200 hover:border-orange-400 group" data-testid="card-devocionais">
              <CardContent className="pt-6 text-center">
                <div className="bg-gradient-to-br from-orange-400 to-yellow-400 group-hover:from-orange-500 group-hover:to-yellow-500 transition-all rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1 text-gray-800 group-hover:text-orange-600 transition-colors">Devocionais</h3>
                <p className="text-sm text-gray-500">Reflexões diárias</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/portal/oracao">
            <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer bg-white border border-gray-200 hover:border-orange-400 group" data-testid="card-oracao">
              <CardContent className="pt-6 text-center">
                <div className="bg-gradient-to-br from-orange-400 to-yellow-400 group-hover:from-orange-500 group-hover:to-yellow-500 transition-all rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1 text-gray-800 group-hover:text-orange-600 transition-colors">Pedidos de Oração</h3>
                <p className="text-sm text-gray-500">Compartilhe seu pedido</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/portal/programacoes">
            <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer bg-white border border-gray-200 hover:border-orange-400 group" data-testid="card-programacoes">
              <CardContent className="pt-6 text-center">
                <div className="bg-gradient-to-br from-orange-400 to-yellow-400 group-hover:from-orange-500 group-hover:to-yellow-500 transition-all rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1 text-gray-800 group-hover:text-orange-600 transition-colors">Programações</h3>
                <p className="text-sm text-gray-500">Próximos eventos</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/portal/diretoria">
            <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer bg-white border border-gray-200 hover:border-orange-400 group" data-testid="card-diretoria">
              <CardContent className="pt-6 text-center">
                <div className="bg-gradient-to-br from-orange-400 to-yellow-400 group-hover:from-orange-500 group-hover:to-yellow-500 transition-all rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1 text-gray-800 group-hover:text-orange-600 transition-colors">Diretoria</h3>
                <p className="text-sm text-gray-500">Conheça nossa equipe</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Devocionais Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900" data-testid="text-section-devocionais">
              Últimos Devocionais
            </h2>
            <Link href="/portal/devocionais">
              <Button variant="outline" className="border-gray-300 hover:border-orange-400 hover:text-orange-600" data-testid="button-ver-mais-devocionais">
                Ver Todos
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockDevocionais.map((dev) => (
              <Card key={dev.id} className="hover:shadow-xl transition-all hover:-translate-y-1 bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-800 flex items-center gap-2">
                    <span className="text-orange-500">📖</span>
                    {dev.titulo}
                  </CardTitle>
                  <CardDescription className="text-orange-600 font-medium">{dev.versiculo}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{dev.preview}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{dev.autor}</span>
                    <span>{new Date(dev.data).toLocaleDateString('pt-BR')}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Programações Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900" data-testid="text-section-programacoes">
              Próximas Programações
            </h2>
            <Link href="/portal/programacoes">
              <Button variant="outline" className="border-gray-300 hover:border-orange-400 hover:text-orange-600" data-testid="button-ver-mais-programacoes">
                Ver Todas
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockProgramacoes.map((prog) => (
              <Card key={prog.id} className="hover:shadow-xl transition-all hover:-translate-y-1 bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-800 flex items-center gap-2">
                    <span className="text-orange-500">📅</span>
                    {prog.titulo}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4 text-orange-500" />
                    {prog.data}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{prog.descricao}</p>
                  <p className="text-sm text-gray-500">📍 {prog.local}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Instagram Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2" data-testid="text-section-instagram">
              <Instagram className="h-8 w-8 text-pink-500" />
              Siga-nos no Instagram
            </h2>
            <a
              href="https://instagram.com/umpemaus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" data-testid="button-instagram">
                @umpemaus
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mockInstagram.map((post) => (
              <div
                key={post.id}
                className="aspect-square rounded-lg overflow-hidden hover:opacity-80 transition-opacity cursor-pointer"
              >
                <img
                  src={post.imageUrl}
                  alt="Instagram post"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <span className="text-5xl">🔥</span>
            </div>
            <h3 className="text-2xl font-bold text-orange-400 mb-2">UMP Emaús</h3>
            <p className="text-gray-300 mb-4">
              União de Mocidade Presbiteriana
            </p>
          </div>
          
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-400 mb-2">
              © 2025 UMP Emaús - Todos os direitos reservados
            </p>
            <p className="text-sm text-orange-300 font-semibold italic">
              "Porque de Deus somos cooperadores" - 1 Coríntios 3:9
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
