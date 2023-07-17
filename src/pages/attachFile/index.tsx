import { ToastContainer } from "react-toastify";
import { ContentTitle } from "../../components/ContentTitle";
import { Line } from "../../components/Line";
import { NextAndBackButtons } from "../../components/NextAndBackButtons";
import { SalesHeader } from "../../components/SalesHeader";
import { UploadBox } from "./components/UploadBox";
import { AttachFileContainer, AttachFileContent } from "./style";
import "react-toastify/dist/ReactToastify.css";

export function AttachFilePage() {
   return (
      <AttachFileContainer>
         <ToastContainer autoClose={3000} />
         <SalesHeader />
         <AttachFileContent>
            <ContentTitle title={"Anexar arquivos"} />
            <UploadBox />
            <Line />
            <NextAndBackButtons urlBack="/cliente" urlNext="/anexar-arquivo" />
         </AttachFileContent>
      </AttachFileContainer>
   );
}
