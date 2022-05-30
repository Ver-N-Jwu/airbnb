import { useEffect, useRef } from "react";

import * as S from "./style";

// eslint-disable-next-line react/prop-types
const Modal = ({ setModalOpen, children }) => {
  const modalRef = useRef(null);

  const outsideClickHandler = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setModalOpen(0);
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", outsideClickHandler);

    return () => {
      document.removeEventListener("mouseup", outsideClickHandler);
    };
  });

  return (
    <S.Modal onClick={outsideClickHandler} ref={modalRef}>
      {children}
    </S.Modal>
  );
};

export default Modal;
