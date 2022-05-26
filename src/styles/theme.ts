const fontSize = {
  smaller: "12px",
  small: "14px",
  base: "16px",
  large: "18px",
  larger: "20px",
  logo: "24px",
};

const fontWeight = {
  base: 400,
  bold: 700,
};

const color = {
  black: "#010101",
  white: "#FFFFFF",
  gray6: "#F5F5F7",
  gray5: "#E0E0E0",
  gray4: "#BDBDBD",
  gray3: "#828282",
  gray2: "#4F4F4F",
  gray1: "#333333",
  pink: "#E84C60",
  green: "#E84C60",
};

const iconSize = {
  base: "24px",
  large: "30px",
  account: "76px",
};

const layout = {
  heroImgWidth: "1440px",
  heroImgHeight: "640px",
};

export const theme = { fontSize, fontWeight, color, layout, iconSize };
export type Theme = typeof theme;
