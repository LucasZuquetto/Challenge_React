import styled from "styled-components";

export const SubTotalContainer = styled.div`
   display: flex;
   justify-content: flex-end;
   background-color: white;
   height: 50px;
   margin: 32px 0;
   border-radius: 20px;
   div {
      padding: 9px 32px 9px 32px;
      gap: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #205266;
      border-radius: 20px;
      h3 {
         color: white;
         font-weight: 700;
         font-size: 16px;
      }
      span {
         color: #63d391;
         font-size: 20px;
         font-weight: 700;
         margin-right: 40px;
      }
   }
`;
