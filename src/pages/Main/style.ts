import styled from "styled-components";

import HERO_IMG from "@assets/hero-img.png";

export const MainBanner = styled.section`
  background-image: url(${HERO_IMG});
  height: ${({ theme }) => theme.layout.heroImgHeight};
`;

export const MainContents = styled.section``;

export const Footer = styled.section``;
