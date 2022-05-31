import * as S from "./style";

// type Icon = {
//   iconName: string;
//   iconSize: string;
// };

// eslint-disable-next-line react/prop-types
const Icon = ({ iconName, iconSize, ...rest }) => {
  return (
    <S.Icon size={iconSize}>
      <img src={iconName} alt={iconName} {...rest} />
    </S.Icon>
  );
};

export default Icon;
