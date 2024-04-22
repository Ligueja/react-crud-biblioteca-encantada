import styled from "styled-components";

export const ModalFooter = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: calc(1rem - 0.5rem * 0.5);
  border-top: 1px solid #495057;
  border-bottom-right-radius: calc(0.5rem - 1px);
  border-bottom-left-radius: calc(0.5rem - 1px);
  background: rgb(16, 10, 92);
  background: -moz-linear-gradient(
    174deg,
    rgba(16, 10, 92, 1) 0%,
    rgba(170, 0, 182, 1) 61%,
    rgba(38, 119, 135, 1) 100%
  );
  background: -webkit-linear-gradient(
    174deg,
    rgba(16, 10, 92, 1) 0%,
    rgba(170, 0, 182, 1) 61%,
    rgba(38, 119, 135, 1) 100%
  );
  background: linear-gradient(
    174deg,
    rgba(16, 10, 92, 1) 0%,
    rgba(170, 0, 182, 1) 61%,
    rgba(38, 119, 135, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#100a5c",endColorstr="#267787",GradientType=1);
`;
