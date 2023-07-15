import { SubTotalContainer } from "./style";
import { FaAngleDown } from "react-icons/fa";

export function SubTotal() {
   return (
      <SubTotalContainer>
         <div>
            <h3>SubTotal</h3>
            <span>R$ 114,75</span>
            <FaAngleDown color={"#63d391"} />
         </div>
      </SubTotalContainer>
   );
}
