import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Loading from "./components/Loading";
import Protien from "./components/Protien";
import About from "./components/About";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
