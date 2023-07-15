import { FormStepper } from "./FormStepper";
import { SubTotal } from "./SubTotal";
import { SalesHeaderContainer, TitleContainer } from "./style";

export function SalesHeader() {
   return (
      <SalesHeaderContainer>
         <TitleContainer>
            <h1>Vendas</h1>
            <h2>Nova venda</h2>
         </TitleContainer>
         <FormStepper />
         <SubTotal />
      </SalesHeaderContainer>
   );
}
