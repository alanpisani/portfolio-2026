import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Main from "../components/Main/Main";
import { useEffect } from "react";

export default function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
