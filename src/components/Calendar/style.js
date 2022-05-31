import styled from "styled-components";

import Icon from "@components/common/Icon";

export const Calendar = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
`;

export const SlideList = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  // 파라미터로 받기
  transition-property: all;
  transition-duration: 0.2s;
  transform: translateX(${({ translateX }) => `${translateX}%`});
`;
