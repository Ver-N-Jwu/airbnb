import X_ICON from "@assets/x-icon.svg";
import Calendar from "@components/Calendar";
import Icon from "@components/common/Icon";
import Modal from "@components/common/Modal";
import TextBox from "@components/common/TextBox";

import * as S from "./style";

interface props {
  modalOpen: number;
  setModalOpen: React.Dispatch<React.SetStateAction<number>>;
}

const Period = ({ modalOpen, setModalOpen }: props) => {
  const onClickHandler = () => {
    setModalOpen(1);
  };

  return (
    <>
      <S.Period onClick={onClickHandler}>
        <CheckIn />
        <CheckOut />
        <Icon iconName={X_ICON} iconSize={"base"} />
      </S.Period>
      {modalOpen === 1 && (
        <Modal setModalOpen={setModalOpen}>
          <Calendar />
        </Modal>
      )}
    </>
  );
};

// useModal()

const CheckIn = () => {
  return <TextBox label={`체크인`} text={`날짜 입력`} />;
};
const CheckOut = () => {
  return <TextBox label={`체크아웃`} text={`날짜 입력`} />;
};

export default Period;
