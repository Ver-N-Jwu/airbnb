import styled from "styled-components";

export const GNB = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 80px;
`;

export const Logo = styled.h3`
  font-family: "Dongle";
  font-size: ${({ theme }) => theme.fontSize.logo};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: default;
`;

export const CategoryTab = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.fontSize.base};
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.color.gray1};
  cursor: default;
`;
