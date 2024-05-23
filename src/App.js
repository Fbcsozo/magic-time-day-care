import Navbar from "./components/Nav-bar/navbar";
import Home from "./components/Home/home";
import Whoweare from "./components/QuemSomos/quemsomos";
import Galery from "./components/Galeria/galeria";
import Contact from "./components/Contato/contato"
import Structure from "./components/Estrutura/estrutura";
import "./App.css";
import Activity from "./components/Atividades/atividades";

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <Structure />
      <Whoweare />
      <Activity />
      <Galery />
      <Contact />
    </div>

  );

}

export default App;
