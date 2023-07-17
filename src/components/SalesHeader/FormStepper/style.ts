import styled from "styled-components";

export const FormStepperContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 57px;
   border-radius: 20px;
   div {
      height: 100%;
      background-color: blue;
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
         width: 10rem;
         border-radius: 0 20px 20px 0;
         display: flex;
         justify-content: center;
         align-items: center;
      }
   }
`;
