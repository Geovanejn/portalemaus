import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PortalNavbar from "@/components/PortalNavbar";

export default function Events() {
  const mockEventos = [
    {
      id: 1,
      titulo: "Retiro Espiritual 2025",
      descricao: "Três dias de renovação espiritual, comunhão e louvor. Prepare-se para um encontro transformador com Deus!",
      data: "2025-11-15",
      hora: "18:00",
      dataFim: "2025-11-17",
      local: "Chácara Recanto da Paz",
      endereco: "Rodovia SP-330, Km 45",
      vagas: 50,
      inscritos: 32,
      imagem: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800"
    },
    {
      id: 2,
      titulo: "Culto de Jovens",
      descricao: "Encontro semanal de louvor, pregação da palavra e comunhão entre jovens. Venha renovar sua fé!",
      data: "2025-11-09",
      hora: "19:00",
      dataFim: "2025-11-09",
      local: "Igreja Presbiteriana Emaús",
      endereco: "Rua das Flores, 123 - Centro",
      vagas: null,
      inscritos: null,
      imagem: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800"
    },
    {
      id: 3,
      titulo: "Ação Social - Distribuição de Alimentos",
      descricao: "Vamos juntos levar esperança e alimento para famílias necessitadas. Seja voluntário!",
      data: "2025-11-12",
      hora: "14:00",
      dataFim: "2025-11-12",
      local: "Comunidade Vila Esperança",
      endereco: "Avenida dos Trabalhadores, s/n",
      vagas: 20,
      inscritos: 15,
      imagem: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800"
    },
    {
      id: 4,
      titulo: "Estudo Bíblico - Livro de Efésios",
      descricao: "Aprofunde-se na palavra com estudos semanais sobre a carta aos Efésios.",
      data: "2025-11-13",
      hora: "20:00",
      dataFim: "2025-11-13",
      local: "Online via Zoom",
      endereco: "Link será enviado por e-mail",
      vagas: null,
      inscritos: null,
      imagem: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
    }
  ];

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const isMultiDay = (inicio: string, fim: string) => {
    return inicio !== fim;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <PortalNavbar />

      <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Calendar className="h-12 w-12 text-orange-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent" data-testid="text-page-title">
              Programações
            </h1>
          </div>
          <p className="text-xl text-gray-300">
            Fique por dentro dos próximos eventos e atividades
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mockEventos.map((evento) => (
            <Card key={evento.id} className="overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all bg-white border border-gray-200" data-testid={`card-evento-${evento.id}`}>
              {/* Imagem */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={evento.imagem}
                  alt={evento.titulo}
                  className="w-full h-full object-cover"
                />
                {isMultiDay(evento.data, evento.dataFim) && (
                  <Badge className="absolute top-4 right-4 bg-orange-500">
                    Vários dias
                  </Badge>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-2xl text-orange-600">
                  {evento.titulo}
                </CardTitle>
                <CardDescription className="text-base">
                  {evento.descricao}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Data e Hora */}
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">
                      {formatDate(evento.data)}
                      {isMultiDay(evento.data, evento.dataFim) && ` até ${formatDate(evento.dataFim)}`}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {evento.hora}
                    </p>
                  </div>
                </div>

                {/* Local */}
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">{evento.local}</p>
                    <p className="text-sm text-gray-600">{evento.endereco}</p>
                  </div>
                </div>

                {/* Vagas */}
                {evento.vagas && (
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-orange-500" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">
                        {evento.inscritos}/{evento.vagas} inscritos
                      </p>
                      <div className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-orange-500 rounded-full"
                          style={{
                            width: `${(evento.inscritos! / evento.vagas) * 100}%`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <Button className="w-full" data-testid={`button-inscrever-${evento.id}`}>
                  {evento.vagas ? "Fazer Inscrição" : "Participar"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
