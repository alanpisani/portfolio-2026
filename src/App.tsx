import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { headerNavData } from "./data/headerNavData";
import { usePreloadImg } from "./hooks/usePreloadImg";

function App() {
  const [section, setSection] = useState("Inicio");

  usePreloadImg();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [section]);

  return (
    <>
      <Header onNavigate={setSection} currentSession={section} />
      <Main>
        {headerNavData.map(
          (item, index) =>
            section === item.name && <item.component key={index} />,
        )}
      </Main>
      <Footer />
    </>
  );
}

export default App;
