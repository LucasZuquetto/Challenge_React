import { Dispatch } from "react";
import { FileUploadedContainer } from "./style";
import { BsTrash3 } from "react-icons/bs";
import { toast } from "react-toastify";

export function FileUploaded({
   name,
   setFiles,
   lastModified,
   files,
}: {
   name: string;
   setFiles: Dispatch<any>;
   lastModified: number;
   files: any;
}) {
   function handleDelete() {
      const newArray = files.filter(
         (file: any) => file.lastModified != lastModified
      );
      setFiles(newArray);

      toast.success("Arquivo excluído com Sucesso", {
         position: toast.POSITION.TOP_RIGHT,
      });
   }

   return (
      <FileUploadedContainer>
         <span> {name}</span>
         <BsTrash3 onClick={handleDelete} color={"red"} fontSize={"22px"} />
      </FileUploadedContainer>
   );
}
