import styled from "styled-components";

export const CustomerContainer = styled.div`
   max-width: 782px;
   padding: 35px 25px;
`;

export const CustomerContent = styled.div`
   background-color: white;
   min-height: 200px;
   border-radius: 20px;
   padding: 20px 175px 20px 29px;

   select {
      width: 20rem;
      border: 1px solid #c6d5db;
      background: #ffffff;
      color: #205266;
      font-weight: 400;
      font-size: 13px;
      padding: 5px 16px 5px 14px;
      border-radius: 5px;
   }
   select:focus {
      outline: none;
   }
   span {
      color: #205266;
      font-size: 13px;
      font-weight: 700;
   }
   & > div:nth-child(3) {
      margin-top: 8px;
      width: 100%;
      gap: 10px;
      display: flex;
      justify-content: space-between;
      height: 32px;

      button {
         cursor: pointer;
         width: 80px;
         font-weight: 700;
         font-size: 13px;
         color: white;
         background-color: #205266;
         border: none;
         border-radius: 5px;
      }
      button:hover {
         filter: brightness(95%);
      }
      button:last-child {
         width: 140px;
         background-color: #4b8db5;
         border: none;
         border-radius: 5px;
      }
   }
   & > div:nth-child(5) {
      & > div:first-child {
         input {
            width: 430px;
         }
      }
   }
   & > div:nth-child(5),
   & > div:nth-child(7),
   & > div:nth-child(9) {
      display: flex;
      flex-direction: column;
      gap: 10px;
      div {
         gap: 12px;
         display: flex;
      }
   }
   & > button {
      cursor: pointer;
      width: 140px;
      font-weight: 700;
      font-size: 13px;
      color: #205266;
      background-color: white;
      border-radius: 5px;
      height: 32px;
      border: 1px solid #205266;
   }
   & > button:hover {
      filter: brightness(95%);
   }
`;
