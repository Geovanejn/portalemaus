import { useState } from "react";
import { BookOpen, Search, Calendar, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PortalNavbar from "@/components/PortalNavbar";

export default function Devotionals() {
  const [searchTerm, setSearchTerm] = useState("");

  const mockDevocionais = [
    {
      id: 1,
      titulo: "A Fé que Move Montanhas",
      versiculo: "Mateus 17:20",
      autor: "Ana Silva",
      data: "2025-11-05",
      conteudo: "Se tiverdes fé como um grão de mostarda, direis a este monte: Passa daqui para acolá - e ele passará. Nada vos será impossível. A fé genuína não é medida pelo tamanho, mas pela sua autenticidade..."
    },
    {
      id: 2,
      titulo: "O Amor Nunca Falha",
      versiculo: "1 Coríntios 13:8",
      autor: "João Santos",
      data: "2025-11-04",
      conteudo: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. O amor verdadeiro transcende circunstâncias e permanece firme mesmo diante das adversidades..."
    },
    {
      id: 3,
      titulo: "Confiança em Deus",
      versiculo: "Provérbios 3:5-6",
      autor: "Maria Oliveira",
      data: "2025-11-03",
      conteudo: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas..."
    },
    {
      id: 4,
      titulo: "A Paz que Excede Todo Entendimento",
      versiculo: "Filipenses 4:7",
      autor: "Pedro Costa",
      data: "2025-11-02",
      conteudo: "E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e as vossas mentes em Cristo Jesus. Em meio ao caos do mundo..."
    },
    {
      id: 5,
      titulo: "Renovação da Força",
      versiculo: "Isaías 40:31",
      autor: "Sofia Almeida",
      data: "2025-11-01",
      conteudo: "Mas os que esperam no Senhor renovam as suas forças, sobem com asas como águias, correm e não se cansam, caminham e não se fatigam..."
    },
    {
      id: 6,
      titulo: "O Bom Pastor",
      versiculo: "Salmos 23:1",
      autor: "Lucas Ferreira",
      data: "2025-10-31",
      conteudo: "O Senhor é o meu pastor, nada me faltará. Ele me faz repousar em pastos verdejantes, leva-me para junto das águas de descanso..."
    }
  ];

  const filteredDevocionais = mockDevocionais.filter((dev) =>
    dev.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dev.versiculo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dev.autor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <PortalNavbar />

      <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="h-12 w-12 text-orange-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent" data-testid="text-page-title">
              Devocionais
            </h1>
          </div>
          <p className="text-xl text-gray-300">
            Reflexões diárias para fortalecer sua fé
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Buscar devocionais..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              data-testid="input-search"
            />
          </div>
        </div>

        {/* Devocionais Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDevocionais.map((dev) => (
            <Card key={dev.id} className="hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group bg-white border border-gray-200" data-testid={`card-devocional-${dev.id}`}>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="bg-gradient-to-br from-orange-400 to-yellow-400 group-hover:from-orange-500 group-hover:to-yellow-500 transition-all rounded-full w-12 h-12 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-orange-500" />
                    {new Date(dev.data).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <CardTitle className="text-xl text-gray-800 group-hover:text-orange-600 transition-colors">
                  {dev.titulo}
                </CardTitle>
                <CardDescription className="font-medium text-orange-600">
                  {dev.versiculo}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {dev.conteudo}
                </p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="h-4 w-4" />
                    <span>{dev.autor}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700">
                    Ler mais →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDevocionais.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              Nenhum devocional encontrado
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
