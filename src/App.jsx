import Loading from "./components/Loading";
import Protien from "./components/Protien";
import About from "./components/About";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { createBrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Loading />
      <Header />
      <Protien />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
