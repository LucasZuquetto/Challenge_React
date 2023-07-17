import { useRef, useState } from "react";
import { UploadBoxForm } from "./style";
import { BsArrowUpCircle } from "react-icons/bs";
import { FileUploaded } from "../FileUploaded";

export function UploadBox() {
   const [dragActive, setDragActive] = useState(false);
   const inputRef = useRef<HTMLInputElement>(null);
   const [files, setFiles] = useState<any>([]);

   function handleDrag(e: any) {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
         setDragActive(true);
      } else if (e.type === "dragleave") {
         setDragActive(false);
      }
   }
   function handleDrop(e: any) {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      console.log(e.dataTransfer.files);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
         setFiles([...files, e.dataTransfer.files[0]]);
      }
   }
   function handleChange(e: any) {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
         setFiles([...files, e.target.files[0]]);
      }
   }

   return (
      <UploadBoxForm
         onSubmit={(e) => e.preventDefault()}
         onDragEnter={handleDrag}
      >
         <input
            accept="image/png,image/jpeg,application/pdf,application/msword,application/vnd.ms-excel"
            ref={inputRef}
            onChange={handleChange}
            id="input-file-upload"
            type="file"
         />
         {files.map(
            (file: { name: string; lastModified: number }, index: number) => (
               <FileUploaded
                  files={files}
                  lastModified={file.lastModified}
                  setFiles={setFiles}
                  key={index}
                  name={file.name}
               />
            )
         )}
         <label htmlFor="input-file-upload">
            {dragActive ? (
               <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
               >
                  <p> Arraste aqui</p>
               </div>
            ) : (
               <>
                  <div>
                     <p>
                        Arraste para dentro ou <span>clique</span> para
                        selecionar um arquivo
                     </p>
                     <h6>Formatos suportados: PDF, Word, JPG, XLS e PNG</h6>
                  </div>
                  <button
                     onClick={() => {
                        inputRef.current?.click();
                     }}
                  >
                     <BsArrowUpCircle fontSize={"22px"} color={"#4B8DB5"} />
                  </button>
               </>
            )}
         </label>
      </UploadBoxForm>
   );
}
