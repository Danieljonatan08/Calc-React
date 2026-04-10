import styled from "styled-components";

export const InputContainer = styled.div`
  width: 94%;
  height: 75px;
  background-color: #6363ff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
  font-size: 24px;
  font-family: "Roboto Mono", monospace;

  input {
    width: 100%;
    height: 75px;
    background-color: #5f5fff;
    border: 0;
    display: flex;
    flex-direction: column;

    font-size: 24px;
    align-items: right;
  }
`;
