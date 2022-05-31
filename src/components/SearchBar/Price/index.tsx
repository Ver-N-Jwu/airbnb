import { useState } from "react";

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
      {modalOpen === 2 && (
        <Modal setModalOpen={setModalOpen}>
          <PriceRangeGraph />
        </Modal>
      )}
    </>
  );
};

const PriceRangeGraph = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [average, setAverage] = useState(0);

  const priceArray: number[] = [50000, 120000, 170000, 140000, 150000, 190000, 200000, 135000, 166000, 153000];

  const roomsData = getData("fakeDB.json").then((json) => {
    json.rooms.forEach((room: { salePrice: number }) => {
      priceArray.push(room.salePrice);
    });
    priceArray.sort((a: number, b: number) => a - b);
    setMinPrice(priceArray[0]);
    setMaxPrice(priceArray[priceArray.length - 1]);
    setAverage(
      priceArray.reduce((acc: number, cur: number) => {
        return acc + cur;
      }, 0) / priceArray.length,
    );
  });

  return (
    <>
      <div>가격 범위</div>
      <div>
        {minPrice} - {maxPrice}+
      </div>
      <div>평균 1박 요금은 {average} 입니다.</div>
      <canvas width="365" height="100"></canvas>
    </>
  );
};

const getData = async (url: string) => {
  const data = await fetch(url);

  return data.json();
};

const getRoomsData = async () => {
  const data = await fetch("fakeDB.json");

  return data.json();
};

export default Price;
