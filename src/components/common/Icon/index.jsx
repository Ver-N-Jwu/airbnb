import * as S from "./style";

// type Icon = {
//   iconName: string;
//   iconSize: string;
// };

// eslint-disable-next-line react/prop-types
const Icon = ({ iconName, iconSize, ...rest }) => {
  return (
    <S.Icon size={iconSize} {...rest}>
      <img src={iconName} alt={iconName} />
    </S.Icon>
  );
};

export default Icon;
