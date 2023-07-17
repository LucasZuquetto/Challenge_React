import { styled } from "styled-components";

export const NextAndBackButtonsContainer = styled.div`
   display: flex;
   gap: 10px;
   button:hover {
      filter: brightness(95%);
   }
   button:first-child {
      cursor: pointer;
      width: 140px;
      font-weight: 700;
      font-size: 13px;
      color: white;
      background-color: #63d391;
      border: none;
      border-radius: 5px;
      height: 32px;
   }
   button:last-child {
      cursor: pointer;
      width: 80px;
      font-weight: 700;
      font-size: 13px;
      color: #205266;
      background-color: white;
      border: none;
      border-radius: 5px;
      height: 32px;
      text-decoration: underline;
   }
`;
