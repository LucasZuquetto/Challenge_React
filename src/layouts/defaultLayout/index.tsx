import { Header } from "../../components/header";
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
