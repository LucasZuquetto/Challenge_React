import { UploadBoxContainer } from "./style";
import { BsArrowUpCircle } from "react-icons/bs";

export function UploadBox() {
   return (
      <UploadBoxContainer>
         <div>
            <p>
               Arraste para dentro ou <span>clique</span> para selecionar um
               arquivo
            </p>
            <h6>Formatos suportados: PDF, Word, JPG, XLS e PNG</h6>
         </div>
         <div>
            <BsArrowUpCircle fontSize={"22px"} color={"#4B8DB5"} />
         </div>
      </UploadBoxContainer>
   );
}
