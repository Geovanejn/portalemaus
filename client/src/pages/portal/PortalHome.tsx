import { Link } from "wouter";
import { Calendar, Heart, BookOpen, Users, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PortalNavbar from "@/components/PortalNavbar";

export default function PortalHome() {
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
    <div className="min-h-screen bg-gray-50">
      <PortalNavbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" data-testid="text-hero-title">
            Bem-vindo à UMP Emaús
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            União de Mocidade Presbiteriana
          </p>
          <p className="text-lg max-w-2xl mx-auto">
            Um espaço de fé, comunhão e crescimento espiritual para jovens
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Link href="/portal/devocionais">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" data-testid="card-devocionais">
              <CardContent className="pt-6 text-center">
                <BookOpen className="h-12 w-12 text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold text-lg">Devocionais</h3>
                <p className="text-sm text-gray-600">Reflexões diárias</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/portal/oracao">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" data-testid="card-oracao">
              <CardContent className="pt-6 text-center">
                <Heart className="h-12 w-12 text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold text-lg">Pedidos de Oração</h3>
                <p className="text-sm text-gray-600">Compartilhe seu pedido</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/portal/programacoes">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" data-testid="card-programacoes">
              <CardContent className="pt-6 text-center">
                <Calendar className="h-12 w-12 text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold text-lg">Programações</h3>
                <p className="text-sm text-gray-600">Próximos eventos</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/portal/diretoria">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" data-testid="card-diretoria">
              <CardContent className="pt-6 text-center">
                <Users className="h-12 w-12 text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold text-lg">Diretoria</h3>
                <p className="text-sm text-gray-600">Conheça nossa equipe</p>
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
              <Button variant="outline" data-testid="button-ver-mais-devocionais">
                Ver Todos
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockDevocionais.map((dev) => (
              <Card key={dev.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-orange-600">{dev.titulo}</CardTitle>
                  <CardDescription>{dev.versiculo}</CardDescription>
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
              <Button variant="outline" data-testid="button-ver-mais-programacoes">
                Ver Todas
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockProgramacoes.map((prog) => (
              <Card key={prog.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{prog.titulo}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
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
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 UMP Emaús - União de Mocidade Presbiteriana
          </p>
          <p className="text-sm text-gray-500 mt-2">
            "Porque de Deus somos cooperadores" - 1 Coríntios 3:9
          </p>
        </div>
      </footer>
    </div>
  );
}
