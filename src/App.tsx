import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { headerNavData } from "./data/headerNavData";

function App() {
  const [section, setSection] = useState("Inicio");

  return (
    <>
      <Header onNavigate={setSection} currentSession={section}/>
      <Main>
        {headerNavData.map(
          (item, index) => section === item.name && <item.component key={index}/>,
        )}
      </Main>
      <Footer />
    </>
  );
}

export default App;
