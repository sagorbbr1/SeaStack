import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import { ActiveSectionProvider } from "./context/ActiveSectionContext";

import BackToTop from "./components/ui/BackToTop";
import ScrollProgress from "./components/ui/ScrollProgress";
import Loader from "./components/ui/Loader";
import CustomCursor from "./components/ui/CustomCursor";
import Home from "./pages/Home/Home";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminMessages from "./pages/admin/AdminMessages";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminLayout from "./components/admin/AdminLayout";
import NotFound from "./pages/NotFound/NotFound";
import AdminProjects from "./pages/admin/AdminProjects";
import AdminProjectForm from "./pages/admin/AdminProjectForm";
import AdminBlogs from "./pages/admin/AdminBlogs";
import AdminBlogForm from "./pages/admin/AdminBlogForm";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import AboutPage from "./pages/AboutPage/AboutPage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import ScrollToHash from "./components/ui/ScrollToHash";
import BlogPage from "./pages/BlogPage/BlogPage";
import ScrollToTop from "./components/ui/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ActiveSectionProvider>
          <ScrollToTop />
          <ScrollToHash />

          <Loader />
          <CustomCursor />
          <ScrollProgress />

          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/blogs" element={<BlogPage />} />

            <Route
              path="/blog/:slug"
              element={<SingleBlog />}
            />

            {/* Admin */}
            <Route
              path="/admin/login"
              element={<AdminLogin />}
            />

            <Route element={<ProtectedRoute />}>
              <Route element={<AdminLayout />}>
                <Route
                  path="/admin/dashboard"
                  element={<AdminDashboard />}
                />

                <Route
                  path="/admin/messages"
                  element={<AdminMessages />}
                />

                <Route
                  path="/admin/projects"
                  element={<AdminProjects />}
                />

                <Route
                  path="/admin/projects/add"
                  element={<AdminProjectForm />}
                />

                <Route
                  path="/admin/projects/edit/:id"
                  element={<AdminProjectForm />}
                />

                <Route
                  path="/admin/blogs"
                  element={<AdminBlogs />}
                />

                <Route
                  path="/admin/blogs/add"
                  element={<AdminBlogForm />}
                />

                <Route
                  path="/admin/blogs/edit/:id"
                  element={<AdminBlogForm />}
                />
              </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>

          <BackToTop />
        </ActiveSectionProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;