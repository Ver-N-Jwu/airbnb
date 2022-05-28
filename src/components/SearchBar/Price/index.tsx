import X_ICON from "@assets/x-icon.svg";
import Icon from "@components/common/Icon";
import Modal from "@components/common/Modal";
import TextBox from "@components/common/TextBox";

import * as S from "./style";
interface props {
  modalOpen: number;
  setModalOpen: React.Dispatch<React.SetStateAction<number>>;
}

const Price = ({ modalOpen, setModalOpen }: props) => {
  const onClickHandler = () => {
    setModalOpen(2);
  };

  return (
    <>
      <S.Price onClick={onClickHandler}>
        <TextBox label={`요금`} text={`금액대 설정`} />
        <Icon iconName={X_ICON} iconSize={"base"} />
      </S.Price>
      {modalOpen === 2 && <Modal setModalOpen={setModalOpen}>Price</Modal>}
    </>
  );
};

export default Price;
