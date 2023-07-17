import styled from "styled-components";

export const LayoutContainer = styled.div`
   max-width: 100vw;
   min-height: calc(100vh - 80px);
   margin: 80px 0 0 28vw;

   display: flex;
   flex-direction: column;
   background-color: #f0f4f5;
   @media (max-width: 800px) {
      margin: 80px 0 0 0;
   }
`;
