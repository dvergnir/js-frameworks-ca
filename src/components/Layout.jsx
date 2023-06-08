import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { LayoutWrapper, MainContent } from "../style";

export default function Layout() {
  return (
    <LayoutWrapper>
      <Header>
        <img
          src="https://th.bing.com/th/id/R.2bfcf7a95ead6f73e2a6afd3420cd4a7?rik=wWE8A0uQlrzk%2bg&pid=ImgRaw&r=0"
          alt="logo"
          className="logo"
        ></img>
      </Header>
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer>Copyright: 2023 Benjamin Løndal - </Footer>
    </LayoutWrapper>
  );
}
