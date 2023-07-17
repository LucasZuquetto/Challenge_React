import { FormStepperContainer } from "./style";

export function FormStepper() {
   const steps = [
      "Produto",
      "Cliente",
      "Anexar Arquivo",
      "Pagamentos",
      "Contrato",
   ];
   return (
      <FormStepperContainer>
         <div>
            {steps.map((step, i) => (
               <div key={i}>
                  {i + 1} {step}
               </div>
            ))}
         </div>
      </FormStepperContainer>
   );
}
