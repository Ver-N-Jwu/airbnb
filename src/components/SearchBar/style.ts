import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 916px;
  height: 76px;
  border-radius: 60px;
  border: 1px solid ${({ theme }) => theme.color.gray4};
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.white};
  overflow: hidden;
`;
