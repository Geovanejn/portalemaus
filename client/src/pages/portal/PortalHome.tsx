import { Link } from "wouter";
import { Calendar, Heart, BookOpen, Users, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PortalNavbar from "@/components/PortalNavbar";
import { useState, useEffect } from "react";

export default function PortalHome() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const bannerMessages = [
    {
      icon: "📢",
      text: "Próximo Culto de Jovens - Sábado às 19h na Igreja Presbiteriana",
      color: "bg-orange-500"
    },
    {
      icon: "🙏",
      text: "Semana de Oração - Participe das 6h às 7h todos os dias",
      color: "bg-orange-600"
    },
    {
      icon: "🎉",
      text: "Retiro Espiritual 2025 - Inscrições abertas! 15-17 de Novembro",
      color: "bg-orange-500"
    },
    {
      icon: "📖",
      text: "Novos devocionais disponíveis - Confira as reflexões da semana",
      color: "bg-orange-600"
    },
    {
      icon: "✨",
      text: "Siga @umpemaus no Instagram para ficar por dentro de tudo!",
      color: "bg-orange-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % bannerMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bannerMessages.length]);

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

      {/* Animated Banner */}
      <div className="relative overflow-hidden bg-gray-900">
        {bannerMessages.map((banner, index) => (
          <div
            key={index}
            className="text-white py-3 px-4 text-center font-medium transition-all duration-500 absolute w-full"
            style={{ 
              position: index === currentBannerIndex ? 'relative' : 'absolute',
              opacity: index === currentBannerIndex ? 1 : 0,
              transform: index === currentBannerIndex ? 'translateY(0)' : 'translateY(-100%)'
            }}
            data-testid={`banner-message-${index}`}
          >
            <span className="text-lg mr-2">{banner.icon}</span>
            {banner.text}
            <span className="ml-2 text-orange-400">•</span>
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-6xl md:text-7xl animate-pulse">🔥</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight" data-testid="text-hero-title">
            Bem-vindo à <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">UMP Emaús</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-6 font-semibold text-gray-300">
            União de Mocidade Presbiteriana
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-400">
            Um espaço de fé, comunhão e crescimento espiritual para jovens
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portal/devocionais">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold px-8 py-6 text-lg shadow-lg shadow-orange-500/30"
                data-testid="button-hero-devocionais"
              >
                📖 Ver Devocionais
              </Button>
            </Link>
            <Link href="/portal/programacoes">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-gray-600 text-gray-200 hover:bg-gray-800 hover:border-orange-400 hover:text-orange-400 font-bold px-8 py-6 text-lg"
                data-testid="button-hero-programacoes"
              >
                📅 Próximas Programações
              </Button>
            </Link>
          </div>
        </div>
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
