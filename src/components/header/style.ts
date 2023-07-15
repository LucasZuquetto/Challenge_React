import styled from "styled-components";

export const HeaderContainer = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: #ffffff;
   height: 80px;
   width: 100vw;
   box-shadow: 0px 0px 30px 0px #0000001a;
   padding: 22px 40px 22px 40px;
   box-sizing: border-box;

   position: fixed;
   top: 0;
   left: 0;

   div:first-child {
      cursor: pointer;
      display: flex;
      justify-content: center;
      h1 {
         color: #205266;
         font-size: 30px;
         margin-top: 10px;
         span {
            font-weight: 700;
         }
      }
      div {
         height: 20px;
         width: 28px;
         display: flex;
         justify-content: center;
         align-items: center;
         background-color: #63d391;
         border-radius: 5px 5px 0 5px;
      }
   }

   div:last-child {
      display: flex;
      gap: 20px;
      div {
         cursor: pointer;
         display: flex;
         justify-content: center;
         align-items: center;
         border-radius: 50%;
         background-color: #f0f4f5;
         height: 36px;
         width: 36px;
      }
      div:hover {
         filter: brightness(95%);
      }
   }
`;
