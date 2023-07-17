import { useNavigate } from "react-router-dom";
import { ContentTitle } from "../../components/ContentTitle";
import { Input } from "../../components/Input";
import { Line } from "../../components/Line";
import { SalesHeader } from "../../components/SalesHeader";
import { CustomerContainer, CustomerContent } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

export function CustomerPage() {
   const navigate = useNavigate();
   const [states, setStates] = useState([]);
   const [selectedState, setSelectedState] = useState("");
   const [cities, setCities] = useState([]);

   useEffect(() => {
      axios
         .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
         .then(({ data }) => setStates(data));
   }, []);

   useEffect(() => {
      axios
         .get(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios`
         )
         .then(({ data }) => setCities(data));
   }, [selectedState]);

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
               <span>Estado de nascimento</span>
               <select
                  disabled={states.length === 0 ? true : false}
                  onChange={(e) => setSelectedState(e.target.value)}
               >
                  {states.map(
                     (state: { id: number; sigla: string; nome: string }) => (
                        <option key={state.id} value={state.sigla}>
                           {state.nome}
                        </option>
                     )
                  )}
               </select>
               <span>Naturalidade (Cidade de nascimento)</span>
               <select disabled={cities.length === 0 ? true : false}>
                  {cities.map((city: { id: number; nome: string }) => (
                     <option key={city.id} value={city.nome}>
                        {city.nome}
                     </option>
                  ))}
               </select>
            </div>
            <Line />
            <div>
               <span>Estado civil</span>
               <select>
                  <option value="Solteiro">Solteiro</option>
                  <option value="Casado">Casado</option>
                  <option value="Separado">Separado</option>
                  <option value="Divorciado">Divorciado</option>
                  <option value="Viúvo">Viúvo</option>
               </select>
               <span>Sexo</span>
               <select>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
               </select>
            </div>
            <Line />
            <button>Atualizar</button>
            <Line />
            <div>
               <button onClick={() => navigate("/anexar-arquivo")}>
                  Continuar
               </button>
               <button>Voltar</button>
            </div>
         </CustomerContent>
      </CustomerContainer>
   );
}
