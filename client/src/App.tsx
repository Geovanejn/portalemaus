import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/lib/auth";
import LoginPage from "@/pages/login";
import AdminPage from "@/pages/admin";
import VotePage from "@/pages/vote";
import ResultsPage from "@/pages/results";
import VerifyPage from "@/pages/verify";
import PortalHome from "@/pages/portal/PortalHome";
import Devotionals from "@/pages/portal/Devotionals";
import PrayerRequests from "@/pages/portal/PrayerRequests";
import Events from "@/pages/portal/Events";
import Board from "@/pages/portal/Board";

function Router() {
  const { isAuthenticated, isAdmin, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    );
  }

  return (
    <Switch>
      {/* Páginas públicas do portal */}
      <Route path="/portal" component={PortalHome} />
      <Route path="/portal/devocionais" component={Devotionals} />
      <Route path="/portal/oracao" component={PrayerRequests} />
      <Route path="/portal/programacoes" component={Events} />
      <Route path="/portal/diretoria" component={Board} />
      <Route path="/verificar/:hash" component={VerifyPage} />
      <Route path="/results" component={ResultsPage} />

      {/* Rotas de votação (requerem autenticação) */}
      {!isAuthenticated ? (
        <>
          <Route path="/login" component={LoginPage} />
          <Route path="/">
            <Redirect to="/portal" />
          </Route>
        </>
      ) : isAdmin ? (
        <>
          <Route path="/admin" component={AdminPage} />
          <Route path="/vote" component={VotePage} />
          <Route path="/">
            <Redirect to="/portal" />
          </Route>
        </>
      ) : (
        <>
          <Route path="/vote" component={VotePage} />
          <Route path="/">
            <Redirect to="/portal" />
          </Route>
        </>
      )}
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
