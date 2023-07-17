import { styled } from "styled-components";

export const UploadBoxContainer = styled.div`
   width: 427px;
   border: 2px dashed #205266;
   border-radius: 4px;
   padding: 13px 16px 13px 16px;
   display: flex;
   justify-content: space-between;
    div:first-child {
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
      }
      p {
         font-weight: 400;
         color: #404554;
      }
      h6 {
         color: #9ea1b0;
      }
   }
   div:last-child{
    display: flex;
    justify-content: center;
    align-items: center;

   }
`;
