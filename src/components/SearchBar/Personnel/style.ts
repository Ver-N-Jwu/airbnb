import styled, { css } from "styled-components";

import { SearchModalState } from "_types/searchModal";

export const Personnel = styled.div<{ openedModal?: SearchModalState | null }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 310px;
  height: 74px;
  padding: 0 16px;
  border-radius: 60px;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 4px 6px -1px ${({ theme }) => theme.color.gray3};
  }

  ${({ openedModal }) =>
    openedModal === "PERSONNEL" &&
    css`
      background-color: ${({ theme }) => theme.color.white};
      box-shadow: 0 4px 6px -1px ${({ theme }) => theme.color.gray3};
    `}
`;
