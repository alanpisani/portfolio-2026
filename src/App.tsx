import { usePreloadImg } from "./hooks/usePreloadImg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Hero from "./components/Main/sections/Hero/Hero";
import AboutMe from "./components/Main/sections/AboutMe/AboutMe";
import Projects from "./components/Main/sections/Projects/Projects";
import Technologies from "./components/Main/sections/Technologies/Technologies";

function App() {
  
  usePreloadImg();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />}/>
          <Route path="acerca" element={<AboutMe />}/>
          <Route path="proyectos" element={<Projects />}/>
          <Route path="tecnologias" element={<Technologies />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
