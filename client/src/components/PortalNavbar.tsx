import { Link, useLocation } from "wouter";
import { LogOut, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/lib/auth";
import logoUrl from "@assets/EMAÚS v3 sem fundo_1762038215610.png";

export default function PortalNavbar() {
  const [location] = useLocation();
  const { user, logout } = useAuth();

  const navLinks = [
    { href: "/portal", label: "Home" },
    { href: "/portal/devocionais", label: "Devocionais" },
    { href: "/portal/oracao", label: "Oração" },
    { href: "/portal/programacoes", label: "Programações" },
    { href: "/portal/diretoria", label: "Diretoria" },
    { href: "/admin", label: "Votação" },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 border-b border-gray-600 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/portal" className="flex items-center space-x-2" data-testid="link-home">
              <img src={logoUrl} alt="UMP Emaús" className="h-10 w-10" />
              <span className="font-bold text-xl bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent hidden sm:inline">
                UMP Emaús
              </span>
            </Link>

            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location === link.href
                      ? "text-orange-400 bg-gray-900"
                      : "text-gray-300 hover:text-orange-400 hover:bg-gray-900"
                  }`}
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 hover:bg-gray-900"
                    data-testid="button-user-menu"
                  >
                    {user.photoUrl ? (
                      <img
                        src={user.photoUrl}
                        alt={user.fullName}
                        className="h-8 w-8 rounded-full object-cover ring-2 ring-orange-400"
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center text-white font-semibold">
                        {user.fullName.charAt(0)}
                      </div>
                    )}
                    <span className="hidden sm:inline font-medium">
                      {user.fullName.split(" ")[0]}
                    </span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <Link href="/portal/perfil">
                    <DropdownMenuItem data-testid="link-profile">
                      <User className="mr-2 h-4 w-4" />
                      Meu Perfil
                    </DropdownMenuItem>
                  </Link>
                  {user.isAdmin && (
                    <Link href="/admin">
                      <DropdownMenuItem data-testid="link-admin">
                        Admin
                      </DropdownMenuItem>
                    </Link>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={logout}
                    data-testid="button-logout"
                    className="text-red-600"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <Button 
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold"
                  data-testid="button-login"
                >
                  Entrar
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden border-t border-gray-600">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location === link.href
                  ? "text-orange-400 bg-gray-900"
                  : "text-gray-300 hover:text-orange-400 hover:bg-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
