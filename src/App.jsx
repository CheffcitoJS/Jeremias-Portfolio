import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services';
import { NavBar } from "./components/NavBar.jsx";
import { Banner } from "./components/Banner.jsx";
import { Projects } from "./components/Projects.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;