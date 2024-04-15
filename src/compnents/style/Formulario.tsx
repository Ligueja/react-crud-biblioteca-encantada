import styled from "styled-components";

export const Formulario = styled.div`
  display: flex;
  max-width: 992px;
  min-width: 320px;
  margin: auto;
  height: calc(-190px + 100vh);
  align-items: center;
  justify-content: space-around;

  div {
    min-width: 420px;
  }
  h1 {
    text-align: center;
    font-style: italic;
    color: rgb(18, 42, 87);
    font-size: 2rem;
  }
  div > form > div {
    margin: 14px;
  }
  label {
    display: block;
    font-size: 0.8rem;
    margin-bottom: 4px;
    color: rgb(18, 42, 87);
  }
  input {
    padding: 8px;
    border-radius: 12px;
    width: 100%;
    border: 2px solid rgb(18, 42, 87);
  }
  textarea {
    padding: 8px;
    border-radius: 12px;
    width: 100%;
    border: 2px solid rgb(18, 42, 87);
    height: 60px;
    resize: none;
  }
  button {
    padding: 8px;
    border-radius: 12px;
    width: 100%;
    border: 2px solid rgb(18, 42, 87);
    background-color: rgb(18, 42, 87);
    color: rgb(255, 255, 255);
    cursor: pointer;
  }
  li {
    color: rgb(18, 42, 87);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 15px;
  }
`;
