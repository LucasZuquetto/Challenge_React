import { ContentTitle } from "../../components/ContentTitle";
import { Line } from "../../components/Line";
import { NextAndBackButtons } from "../../components/NextAndBackButtons";
import { SalesHeader } from "../../components/SalesHeader";
import { UploadBox } from "./components/UploadBox";
import { AttachFileContainer, AttachFileContent } from "./style";

export function AttachFilePage() {
   return (
      <AttachFileContainer>
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
