import AdminLayout from "@/components/admin/AdminLayout";
import MainLayout from "@/components/layout/MainLayout";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AdminCampaigns from "./pages/admin/AdminCampaigns";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLiveSessions from "./pages/admin/AdminLiveSessions";
import AdminLiveStats from "./pages/admin/AdminLiveStats";
import AdminPosts from "./pages/admin/AdminPosts";
import AdminPrayers from "./pages/admin/AdminPrayers";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminSiteContent from "./pages/admin/AdminSiteContent";
import AdminTestimonials from "./pages/admin/AdminTestimonials";
import AdminUsers from "./pages/admin/AdminUsers";
import BlogPostPage from "./pages/BlogPostPage";
import ImpactPage from "./pages/ImpactPage";
import Index from "./pages/Index";
import LibraryPage from "./pages/LibraryPage";
import NotFound from "./pages/NotFound";
import PrayPage from "./pages/PrayPage";
import ProfilePage from "./pages/ProfilePage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import WordPage from "./pages/WordPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AuthProvider>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/pray" element={<PrayPage />} />
              <Route path="/impact" element={<ImpactPage />} />
              <Route path="/word" element={<WordPage />} />
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/word/:slug" element={<BlogPostPage />} />
              <Route path="/about" element={<AboutPage />} />
              {/* <Route path="/give" element={<GivePage />} /> */}
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="live-stats" element={<AdminLiveStats />} />
              <Route path="posts" element={<AdminPosts />} />
              <Route path="prayers" element={<AdminPrayers />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="settings" element={<AdminSettings />} />
              <Route path="campaigns" element={<AdminCampaigns />} />
              <Route path="site-content" element={<AdminSiteContent />} />
              <Route path="live-sessions" element={<AdminLiveSessions />} />
              <Route path="testimonials" element={<AdminTestimonials />} />
            </Route>
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
