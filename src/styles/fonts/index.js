import NotoSansKR from "./notosanskr-regular-webfont.woff";

const fonts = `
	@font-face {
		font-family: "Noto Sans KR";
		src: local("Noto Sans KR"), url(${NotoSansKR}) format("woff");
		font-weight: ${({ theme }) => theme.fontWeight.base}
	}
`;

export default fonts;
