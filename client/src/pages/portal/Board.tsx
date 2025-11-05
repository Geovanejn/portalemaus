import { Mail, Phone, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PortalNavbar from "@/components/PortalNavbar";

export default function Board() {
  const mockDiretoria = [
    {
      id: 1,
      nome: "Geovane Nascimento",
      cargo: "Presidente",
      email: "presidente@umpemaus.com.br",
      telefone: "(11) 98765-4321",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      id: 2,
      nome: "Ana Paula Silva",
      cargo: "Vice-Presidente",
      email: "vice@umpemaus.com.br",
      telefone: "(11) 98765-4322",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
    },
    {
      id: 3,
      nome: "João Pedro Santos",
      cargo: "Secretário",
      email: "secretario@umpemaus.com.br",
      telefone: "(11) 98765-4323",
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
    },
    {
      id: 4,
      nome: "Maria Fernanda Costa",
      cargo: "Tesoureira",
      email: "tesouraria@umpemaus.com.br",
      telefone: "(11) 98765-4324",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    },
    {
      id: 5,
      nome: "Lucas Oliveira",
      cargo: "Coordenador de Louvor",
      email: "louvor@umpemaus.com.br",
      telefone: "(11) 98765-4325",
      foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"
    },
    {
      id: 6,
      nome: "Juliana Almeida",
      cargo: "Coordenadora de Espiritualidade",
      email: "espiritualidade@umpemaus.com.br",
      telefone: "(11) 98765-4326",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <PortalNavbar />

      <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Users className="h-12 w-12 text-orange-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent" data-testid="text-page-title">
              Diretoria Atual
            </h1>
          </div>
          <p className="text-xl text-gray-300">
            Conheça os membros da nossa diretoria 2025/2026
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Presidente destaque */}
        <div className="mb-12">
          <Card className="overflow-hidden border-2 border-orange-400 bg-white hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-64 md:h-auto">
                <img
                  src={mockDiretoria[0].foto}
                  alt={mockDiretoria[0].nome}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="md:col-span-2 p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-3">
                    {mockDiretoria[0].cargo}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {mockDiretoria[0].nome}
                  </h2>
                </div>
                <div className="space-y-3">
                  <a
                    href={`mailto:${mockDiretoria[0].email}`}
                    className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>{mockDiretoria[0].email}</span>
                  </a>
                  <a
                    href={`tel:${mockDiretoria[0].telefone}`}
                    className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>{mockDiretoria[0].telefone}</span>
                  </a>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Demais membros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDiretoria.slice(1).map((membro) => (
            <Card key={membro.id} className="overflow-hidden hover:shadow-xl transition-shadow" data-testid={`card-membro-${membro.id}`}>
              <div className="relative h-64">
                <img
                  src={membro.foto}
                  alt={membro.nome}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg">{membro.nome}</h3>
                  <p className="text-orange-300 text-sm">{membro.cargo}</p>
                </div>
              </div>
              <CardContent className="p-6 space-y-3">
                <a
                  href={`mailto:${membro.email}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{membro.email}</span>
                </a>
                <a
                  href={`tel:${membro.telefone}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>{membro.telefone}</span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Informações adicionais */}
        <div className="mt-12 bg-orange-50 border border-orange-200 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Quer falar com a diretoria?
          </h3>
          <p className="text-gray-600 mb-4">
            Entre em contato diretamente com qualquer membro da equipe pelos canais acima
          </p>
          <p className="text-sm text-gray-500">
            Gestão 2025/2026 - Unidos pela fé, crescendo em amor
          </p>
        </div>
      </div>
    </div>
  );
}
