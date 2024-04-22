import styled from "styled-components";

export const ModalHeader = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: 1rem 1rem;
  border-bottom: 1px solid #495057;
  border-top-left-radius: calc(0.5rem - 1px);
  border-top-right-radius: calc(0.5rem - 1px);
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
