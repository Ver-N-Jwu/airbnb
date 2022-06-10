import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

import fonts from "./fonts";

const GlobalStyles = createGlobalStyle` 
	${reset}
	${fonts}

	html {
		background-color: ${({ theme }) => theme.color.white};
		margin: 0;
		padding: 0;
	}

	body {
		font-family: "Noto Sans KR", sans-serif;
		font-size: ${({ theme }) => theme.fontSize.base};
		color: ${({ theme }) => theme.color.black};
		width: ${({ theme }) => theme.layout.heroImgWidth};
		margin: 0 auto;
	}
	
	div {
		box-sizing: border-box;
	}


	img {
		width: 100%;
		height: 100%;
	}

	button {
		cursor: pointer;
	}

	a {
		text-decoration:none;
		color: inherit;
	}

	span {
		display:block;
	}
`;

export default GlobalStyles;
