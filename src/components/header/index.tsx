import { HeaderContainer } from "./style";
import { FiChevronsRight } from "react-icons/fi";
import { FaRegUser, FaRegBell } from "react-icons/fa";

export function Header() {
   return (
      <HeaderContainer>
         <div>
            <div>
               <FiChevronsRight color={"#FFFFFF"} fontSize={"20px"} />
            </div>
            <h1>
               <span>mk</span>next
            </h1>
         </div>
         <div>
            <div>
               <FaRegBell color={"#205266"} fontSize={"20px"} />
            </div>
            <div>
               <FaRegUser color={"#205266"} fontSize={"20px"} />
            </div>
         </div>
      </HeaderContainer>
   );
}
