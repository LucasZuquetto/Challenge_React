import { ContentTitle } from "../../components/ContentTitle";
import { Input } from "../../components/Input";
import { Line } from "../../components/Line";
import { SalesHeader } from "../../components/SalesHeader";
import { CustomerContainer, CustomerContent } from "./style";

export function CustomerPage() {
   return (
      <CustomerContainer>
         <SalesHeader />
         <CustomerContent>
            <ContentTitle title={"Buscar Cliente"} />
            <span>Buscar Cliente</span>
            <div>
               <select name="searchPeople">
                  <option value="0">Antonio José dos Santos</option>
                  <option value="1">Lucas Zuquetto</option>
               </select>
               <button>Buscar</button>
               <button>Adicionar pessoas</button>
            </div>
            <Line />
            <div>
               <div>
                  <Input
                     label="Nome completo"
                     placeholder="Antônio José dos Santos"
                  />
               </div>
               <div>
                  <Input label="CPF" placeholder="407.495.188-98" />
                  <Input label="IE/RG" placeholder="34.420.078-0" />
                  <Input label="Órgão emissor" placeholder="SSP" />
               </div>
               <div>
                  <Input label="Telefone" placeholder="(11) 0000-000" />
                  <Input label="Celular" placeholder="(11) 0000-000" />
               </div>
            </div>
            <Line />
            <div>
               <div>
                  <Input label="Data de nascimento" placeholder="17/04/1995" />
               </div>
               <div>
                  <Input label="Nacionalidade" placeholder="Brasileira" />
               </div>
               <div>
                  <Input label="Estado de Nascimento" placeholder="São Paulo" />
               </div>
               <div>
                  <Input
                     label="Naturalidade (Cidade de nascimento)"
                     placeholder="São Paulo"
                  />
               </div>
            </div>
            <Line />
            <div>
               <div>
                  <Input
                     label="Estado civil"
                     placeholder="Casado (a)"
                  />
               </div>
               <div>
                  <Input
                     label="Sexo"
                     placeholder="Masculino"
                  />
               </div>
            </div>
            <Line />
         </CustomerContent>
      </CustomerContainer>
   );
}
