import { Routes, Route, HashRouter, Navigate} from "react-router-dom";
import Home from "./pages/home/Home";
import NoPage from "./pages/error/NoPage";
import About from "./pages/About/About";
import LogementCard from "./pages/logement/LogementCard.js";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<LogementCard />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>

  );
}

export default App;
