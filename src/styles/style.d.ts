import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSize: {
      smaller: string;
      small: string;
      base: string;
      large: string;
      larger: string;
      logo: string;
    };

    fontWeight: {
      base: number;
      bold: number;
    };

    color: {
      black: string;
      white: string;
      gray6: string;
      gray5: string;
      gray4: string;
      gray3: string;
      gray2: string;
      gray1: string;
      pink: string;
      green: string;
    };

    iconSize: {
      small: string;
      base: string;
      large: string;
      account: string;
      star: string;
    };

    layout: {
      heroImgWidth: string;
      heroImgHeight: string;
    };
  }
}

// 강한 타입 추론용 인터페이스

// declare module "styled-components" {
//   export interface DefaultTheme {
//     fontSize: {
//       smaller: "12px";
//       small: "14px";
//       base: "16px";
//       large: "18px";
//       larger: "20px";
//       logo: "48px";
//     };

//     fontWeight: {
//       base: 400;
//       bold: 700;
//     };

//     color: {
//       black: "#010101";
//       white: "#FFFFFF";
//       gray6: "#F5F5F7";
//       gray5: "#E0E0E0";
//       gray4: "#BDBDBD";
//       gray3: "#828282";
//       gray2: "#4F4F4F";
//       gray1: "#333333";
//       pink: "#E84C60";
//       green: "#E84C60";
//     };

//     iconSize: {
//       small: "12px";
//       base: "24px";
//       large: "30px";
//       account: "76px";
//       star: "16px";
//     };

//     layout: {
//       heroImgWidth: "1440px";
//       heroImgHeight: "640px";
//     };
//   }
// }
