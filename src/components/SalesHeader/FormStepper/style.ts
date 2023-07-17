import styled from "styled-components";

export const FormStepperContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 57px;
   border-radius: 20px;
   div {
      height: 100%;
      display: flex;
      border-radius: 20px;
      div:first-child {
         border-radius: 20px;
      }
      div {
         font-size: 14px;
         font-weight: 700;
         color: white;
         background-color: #63d391;
         width: 150px;
         border-radius: 20px;
         display: flex;
         justify-content: center;
         align-items: center;
      }
      @media (max-width: 1100px) {
         div {
            width: 13vw;
         }
      }
      @media (max-width: 800px) {
         & > div {
            width: 18vw;
         }
      }
   }
`;
