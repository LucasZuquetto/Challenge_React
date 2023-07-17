import { styled } from "styled-components";

export const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   font-size: 13px;
   font-weight: 700;
   color: #205266;
   input {
    width: 135px;
      height: 32px;
      border: 1px solid #c6d5db;
      padding: 5px 14px 5px 14px;
      box-sizing: border-box;
      border-radius: 5px;
      color: #205266;
      font-weight: 500;
   }
   input:focus {
      outline: none;
   }
   input::placeholder {
      font-weight: 500;
      color: #c6d5db;
   }
`;
