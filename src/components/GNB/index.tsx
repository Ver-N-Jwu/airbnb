import ACCOUNT_ICON from "@assets/account-icon.svg";
import Icon from "@components/common/Icon";

import * as S from "./style";

const GNB = () => {
  return (
    <S.GNB>
      <Logo />
      <CategoryTab />
      <MyAccount />
    </S.GNB>
  );
};

const Logo = () => {
  return <S.Logo>LOGO</S.Logo>;
};

const CategoryTab = () => {
  return (
    <S.CategoryTab>
      <a>숙소</a>
      <a>체험</a>
      <a>온라인 체험</a>
    </S.CategoryTab>
  );
};

const MyAccount = () => {
  return <Icon iconName={ACCOUNT_ICON} iconSize={"account"} />;
};

export default GNB;
