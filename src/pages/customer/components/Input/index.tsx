import { InputContainer } from "./style";

interface InputProps {
    label:string,
    placeholder:string
}

export function Input({label,placeholder} : InputProps) {
   return (
      <InputContainer>
         <label htmlFor="">{label}</label>
         <input placeholder={placeholder} type="text" name="" id="" />
      </InputContainer>
   );
}
