/* eslint-disable no-debugger */
import React, { useRef, useCallback } from "react";

import X_ICON from "@assets/x-icon.svg";
import Icon from "@components/common/Icon";
import TextBox from "@components/common/TextBox";
import { PriceRangeGraph } from "@components/SearchBar/Price/PriceRangeGraph";
import { usePriceState, usePriceDispatch } from "@contexts/PriceProvider";
import { useSearchModalDispatch, useSearchModalState } from "@contexts/SearchModalProvider";

import * as S from "./style";

const Price = () => {
  const priceElement = useRef(null);

  const searchModal = useSearchModalState();
  const setSearchModal = useSearchModalDispatch();

  const { priceRange } = usePriceState();
  const { setPriceRange } = usePriceDispatch();

  const getValidateText = useCallback((): string | null => {
    if (!priceRange) {
      return null;
    }
    return `￦${priceRange?.minPrice} ~ ￦${priceRange?.maxPrice}`;
  }, [priceRange]);

  return (
    <S.Price onClick={() => setSearchModal(<PriceRangeGraph />)} openedModal={searchModal} ref={priceElement}>
      <TextBox label="요금" placeholder="금액대 설정" textContent={getValidateText()} styles="width:160px" />
      {priceRange && (
        <Icon
          onClick={() => {
            if (setPriceRange) {
              setPriceRange(null);
            }
          }}
          data-button="REMOVE"
          iconName={X_ICON}
          iconSize="base"
        />
      )}
    </S.Price>
  );
};

export default Price;
