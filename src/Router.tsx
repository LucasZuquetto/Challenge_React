import { Navigate, Route, Routes } from "react-router-dom";
import { CustomerPage } from "./pages/customer";
import { AttachFilePage } from "./pages/attachFile";
import { DefaultLayout } from "./layouts/defaultLayout";

export function Router() {
   return (
      <Routes>
         <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Navigate to="/cliente" />}/>
            <Route path="/cliente" element={<CustomerPage />} />
            <Route path="/anexar-arquivo" element={<AttachFilePage />} />
         </Route>
      </Routes>
   );
}
