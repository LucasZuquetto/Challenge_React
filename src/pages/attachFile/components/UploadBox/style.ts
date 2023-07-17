import { styled } from "styled-components";

export const UploadBoxForm = styled.form`
   input {
      display: none;
   }

   label {
      min-height: 60px;
      width: 427px;
      border: 2px dashed #205266;
      border-radius: 4px;
      padding: 13px 16px 13px 16px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      div:first-child {
         width: 80%;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         text-align: center;
         font-size: 12px;
         gap: 5px;
         span {
            font-size: 13px;
            font-weight: 600;
            color: #205266;
            text-align: center;
         }
         p {
            font-weight: 400;
            color: #404554;
         }
         h6 {
            color: #9ea1b0;
         }
      }
      button {
         display: flex;
         justify-content: center;
         align-items: center;
         cursor: pointer;
         background-color: white;
         border: none;
      }
   }
`;
