import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  border: none;
  border-radius: 40px;
  top: 76px;
  right: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.white};
  padding: 64px;
  margin-top: 16px;
  box-shadow: 0 4px 6px -1px ${({ theme }) => theme.color.gray3};
`;
