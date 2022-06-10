import React, { useCallback, useRef } from "react";

import SEARCH_ICON from "@assets/search-icon.svg";
import X_ICON from "@assets/x-icon.svg";
import Icon from "@components/common/Icon";
import TextBox from "@components/common/TextBox";
import SearchButton from "@components/SearchBar/SearchButton";
import { useCalendarState } from "@contexts/CalendarProvider";
import { useInputGuestState, useInputGuestDispatch } from "@contexts/InputGuestProvider";
import { usePriceState } from "@contexts/PriceProvider";
import { useSearchModalDispatch, useSearchModalState } from "@contexts/SearchModalProvider";

import InputGuest from "./InputGuest/index";
import * as S from "./style";

export const Personnel = () => {
  const personnelElement = useRef(null);

  const searchModal = useSearchModalState();
  const setSearchModal = useSearchModalDispatch();

  const { adult, child, baby } = useInputGuestState();
  const { onResetGuest } = useInputGuestDispatch();

  const getGuestContentTemplate = useCallback(() => {
    if (!adult) return null;
    const guestTemplate = `게스트 ${adult + child}명`;
    const babyTemplate = `, 유아 ${baby}명`;

    return baby ? guestTemplate + babyTemplate : guestTemplate;
  }, [adult, baby, child]);

  const handleCloseGuestModal = () => {
    onResetGuest();
  };

  return (
    <S.Personnel onClick={() => setSearchModal(<InputGuest />)} openedModal={searchModal} ref={personnelElement}>
      <TextBox label="인원" placeholder="게스트 추가" textContent={getGuestContentTemplate()} />
      {!!adult && <Icon onClick={handleCloseGuestModal} data-button="REMOVE" iconName={X_ICON} iconSize="base" />}
      <SearchButton />
    </S.Personnel>
  );
};

export default Personnel;
