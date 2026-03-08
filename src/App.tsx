import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import Dashboard from "./pages/Dashboard";
import Setup from "./pages/Setup";
import ResumeBuilder from "./pages/ResumeBuilder";
import ProfileOptimizer from "./pages/ProfileOptimizer";
import RoleClarity from "./pages/RoleClarity";
import AtsChecker from "./pages/AtsChecker";
import CoverLetterGenerator from "./pages/CoverLetterGenerator";
import SmartApply from "./pages/SmartApply";
import RunHistory from "./pages/RunHistory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/profile-optimizer" element={<ProfileOptimizer />} />
            <Route path="/role-clarity" element={<RoleClarity />} />
            <Route path="/ats-checker" element={<AtsChecker />} />
            <Route path="/cover-letter" element={<CoverLetterGenerator />} />
            <Route path="/smart-apply" element={<SmartApply />} />
            <Route path="/run-history" element={<RunHistory />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
