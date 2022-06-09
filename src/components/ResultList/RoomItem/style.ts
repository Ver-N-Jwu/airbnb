import styled from "styled-components";

export const RoomItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 248px;
  padding: 24px;
  background-color: white;

  & + & {
    border-top: 1px solid ${({ theme }) => theme.color.gray5};
  }
`;
export const Photo = styled.figure`
  width: 330px;
  border-radius: 5px;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 330px;
  padding: 4px;
`;

export const InfoTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 50%;
`;

export const InfoBottom = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30%;
  padding-bottom: 4px;
`;

export const Review = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  gap: 4px;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: auto;
  text-align: right;
`;

export const Heart = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;
