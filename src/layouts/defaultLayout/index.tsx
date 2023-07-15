import { Header } from "../../components/Header/index.tsx";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./style.ts";

export function DefaultLayout() {
   return (
      <LayoutContainer>
         <Header />
         <Outlet />
      </LayoutContainer>
   );
}
