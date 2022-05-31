import styled from "styled-components";

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 257px;
  height: 76px;
  padding: 0 24px;
  cursor: pointer;
`;

export const LeftInput = styled.input`
  position: absolute;
  left: 0;
  width: 365px;
  -webkit-appearance: none;
`;

export const RightInput = styled.input`
  position: absolute;
  right: 0;
  width: 365px;
  -webkit-appearance: none;
`;

export const Slider = styled.div`
  position: relative;
  width: 100%;
  // height: 24px;
`;
