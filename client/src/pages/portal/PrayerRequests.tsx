import { useState } from "react";
import { Heart, Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import PortalNavbar from "@/components/PortalNavbar";

export default function PrayerRequests() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    igreja: "",
    pedido: ""
  });

  const mockPedidos = [
    {
      id: 1,
      nome: "Maria S.",
      pedido: "Pedido de sabedoria para decisões importantes",
      data: "2025-11-05"
    },
    {
      id: 2,
      nome: "João P.",
      pedido: "Oração pela saúde da minha mãe",
      data: "2025-11-04"
    },
    {
      id: 3,
      nome: "Ana L.",
      pedido: "Força para superar momentos difíceis",
      data: "2025-11-04"
    },
    {
      id: 4,
      nome: "Carlos M.",
      pedido: "Direção de Deus para novo emprego",
      data: "2025-11-03"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pedido recebido!",
      description: "Sua solicitação de oração foi enviada. Estaremos orando por você! 🙏",
    });
    setFormData({ nome: "", email: "", igreja: "", pedido: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PortalNavbar />

      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Heart className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-bold" data-testid="text-page-title">
              Pedidos de Oração
            </h1>
          </div>
          <p className="text-xl text-orange-100">
            Compartilhe seus pedidos conosco. Estamos orando por você!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Deixe seu Pedido</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e nossa equipe estará orando por você
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="nome">Nome *</Label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Seu nome"
                    required
                    data-testid="input-nome"
                  />
                </div>

                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    required
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="igreja">Igreja (opcional)</Label>
                  <Input
                    id="igreja"
                    value={formData.igreja}
                    onChange={(e) => setFormData({ ...formData, igreja: e.target.value })}
                    placeholder="Nome da sua igreja"
                    data-testid="input-igreja"
                  />
                </div>

                <div>
                  <Label htmlFor="pedido">Seu Pedido de Oração *</Label>
                  <Textarea
                    id="pedido"
                    value={formData.pedido}
                    onChange={(e) => setFormData({ ...formData, pedido: e.target.value })}
                    placeholder="Compartilhe seu pedido..."
                    rows={6}
                    required
                    data-testid="input-pedido"
                  />
                </div>

                <Button type="submit" className="w-full" data-testid="button-submit">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Pedido
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Lista de Pedidos */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Heart className="h-6 w-6 text-orange-500" />
              Pedidos Recentes
            </h2>
            <div className="space-y-4">
              {mockPedidos.map((pedido) => (
                <Card key={pedido.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <Heart className="h-5 w-5 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-gray-900">{pedido.nome}</span>
                          <span className="text-xs text-gray-500">
                            {new Date(pedido.data).toLocaleDateString('pt-BR')}
                          </span>
                        </div>
                        <p className="text-gray-600">{pedido.pedido}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="text-sm text-orange-800 text-center">
                🙏 Sua privacidade é importante. Apenas membros autenticados podem ver informações completas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
