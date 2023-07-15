import { FormStepperContainer } from "./style";

export function FormStepper() {
   const steps = [
      "Produto",
      "Cliente",
      "Anexar Arquivo",
      "Pagamentos",
      "Contrato",
   ];
   return <FormStepperContainer>
    {steps.map((step, i) => <div>{i+1} {step}</div>)}
   </FormStepperContainer>;
}
