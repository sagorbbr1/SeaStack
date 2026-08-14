import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import { ActiveSectionProvider } from "./context/ActiveSectionContext";

import BackToTop from "./components/ui/BackToTop";
import ScrollProgress from "./components/ui/ScrollProgress";
import Loader from "./components/ui/Loader";
import CustomCursor from "./components/ui/CustomCursor";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminMessages from "./pages/AdminMessages";

import ProtectedRoute from "./routes/ProtectedRoute";
import AdminLayout from "./components/admin/AdminLayout";
import NotFound from "./pages/NotFound";
import AdminProjects from "./pages/AdminProjects";
import AdminProjectForm from "./pages/AdminProjectForm";
import AdminBlogs from "./pages/AdminBlogs";
import AdminBlogForm from "./pages/AdminBlogForm";
import SingleBlog from "./pages/SingleBlog";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ActiveSectionProvider>
          <Loader />
          {/* <CustomCursor /> */}
          <ScrollProgress />

          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route
  path="/blog/:slug"
  element={<SingleBlog />}
/>

            {/* Admin Login */}
            <Route
              path="/admin/login"
              element={<AdminLogin />}
            />

            {/* Protected Admin */}
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
                <Route path="/admin/projects" element={<AdminProjects />} />
                <Route path="/admin/projects/add" element={<AdminProjectForm />} />

<Route
  path="/admin/projects/edit/:id"
  element={<AdminProjectForm />}
/>

<Route path="/admin/blogs" element={<AdminBlogs />} />
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