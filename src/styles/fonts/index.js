import NotoSansKR from "./NotoSansKR-Regular.otf";

const fonts = `
	@font-face {
		font-family: "Noto Sans KR";
		src: url(${NotoSansKR}) format("otf");
		font-weight: ${({ theme }) => theme.fontWeight.base}
	}
`;

export default fonts;
