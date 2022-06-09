import styled from "styled-components";

export const ResultHeader = styled.section`
  // border-bottom: 1px solid ${({ theme }) => theme.color.gray3};
  box-shadow: 0 8px 8px -8px ${({ theme }) => theme.color.gray3};
  padding-bottom: 24px;
  margin-bottom: 5px;
`;

export const ResultContent = styled.section`
  display: flex;
  justify-content: space-between;
`;
