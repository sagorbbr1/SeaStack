import { ThemeProvider } from "./context/ThemeContext";
import BackToTop from "./components/ui/BackToTop";
import ScrollProgress from "./components/ui/ScrollProgress";
import Home from "./pages/Home";
import { ActiveSectionProvider } from "./context/ActiveSectionContext";
import Loader from "./components/ui/Loader";
import CustomCursor from "./components/ui/CustomCursor";

function App() {
  
  return  <ThemeProvider>
  <ActiveSectionProvider>
          <Loader />
            <CustomCursor />
    <ScrollProgress />
    <Home />
    <BackToTop />
  </ActiveSectionProvider>
  </ThemeProvider>

  
  
}

export default App;