import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  border: none;
  border-radius: 40px;
  top: 202px;
  right: 260px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 64px;
  margin-top: 16px;
`;
