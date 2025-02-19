
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TechInsights from "./pages/TechInsights";
import ArticleDetail from "./pages/ArticleDetail";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1,
    },
  },
});

const AppContent = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <TooltipProvider>
            <Index />
            <Toaster />
            <Sonner />
          </TooltipProvider>
        } />
        <Route path="/tech-insights" element={
          <TooltipProvider>
            <TechInsights />
            <Toaster />
            <Sonner />
          </TooltipProvider>
        } />
        <Route path="/articles/:slug" element={
          <TooltipProvider>
            <ArticleDetail />
            <Toaster />
            <Sonner />
          </TooltipProvider>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
};

export default App;
