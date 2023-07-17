import { useNavigate } from "react-router-dom";
import { NextAndBackButtonsContainer } from "./style";

export function NextAndBackButtons({
   urlNext,
   urlBack,
}: {
   urlNext: string;
   urlBack: string;
}) {
   const navigate = useNavigate();
   return (
      <NextAndBackButtonsContainer>
         <button onClick={() => navigate(urlNext)}>Continuar</button>
         <button onClick={() => navigate(urlBack)}>Voltar</button>
      </NextAndBackButtonsContainer>
   );
}
