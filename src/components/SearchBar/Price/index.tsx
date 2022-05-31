import { useEffect, useRef, useState } from "react";

import X_ICON from "@assets/x-icon.svg";
import Icon from "@components/common/Icon";
import Modal from "@components/common/Modal";
import TextBox from "@components/common/TextBox";

import * as S from "./style";
interface props {
  modalOpen: number;
  setModalOpen: React.Dispatch<React.SetStateAction<number>>;
}

interface coordinates {
  x: number;
  y: number;
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

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const priceArray: number[] = [];

  const mockArray = [
    { x: 15000, y: 5 },
    { x: 30000, y: 14 },
    { x: 50000, y: 10 },
    { x: 70000, y: 14 },
    { x: 90000, y: 26 },
    { x: 100000, y: 30 },
    { x: 120000, y: 45 },
    { x: 130000, y: 60 },
    { x: 135000, y: 65 },
    { x: 140000, y: 80 },
    { x: 143000, y: 70 },
    { x: 150000, y: 50 },
    { x: 170000, y: 66 },
    { x: 200000, y: 25 },
    { x: 240000, y: 16 },
    { x: 300000, y: 15 },
    { x: 320000, y: 1 },
  ];

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

  const canvas = canvasRef.current as HTMLCanvasElement;
  const context = canvas?.getContext("2d");

  const drawGraph = (context: CanvasRenderingContext2D | null, mockArray: coordinates[]) => {
    if (!context) return;
    const x_max = Math.max(...mockArray.map((coordinate) => coordinate.x));
    const y_max = Math.max(...mockArray.map((coordinate) => coordinate.y));
    const x_divide = x_max / 365;
    const y_divide = y_max / 100;
    const coordinates = mockArray.map((coordinate) => {
      return { x: coordinate.x / x_divide, y: 100 - coordinate.y / y_divide };
    });

    context?.beginPath();
    context?.moveTo(coordinates[0].x, coordinates[0].y);
    console.log(coordinates[0].x, coordinates[0].y);
    context.strokeStyle = "lightgray";
    context.fillStyle = "black";

    for (let i = 0; i < coordinates.length - 1; i++) {
      const x_mid = (coordinates[i].x + coordinates[i + 1].x) / 2;
      const y_mid = (coordinates[i].y + coordinates[i + 1].y) / 2;
      const cp_x1 = (x_mid + coordinates[i].x) / 2;
      const cp_x2 = (x_mid + coordinates[i + 1].x) / 2;

      context?.quadraticCurveTo(cp_x1, coordinates[i].y, x_mid, y_mid);
      context?.quadraticCurveTo(cp_x2, coordinates[i + 1].y, coordinates[i + 1].x, coordinates[i + 1].y);

      if (context) {
        context?.stroke();
      }
    }

    if (context) {
      context?.fill();
    }
  };

  drawGraph(context, mockArray);

  return (
    <>
      <div>가격 범위</div>
      <div>
        {minPrice} - {maxPrice}+
      </div>
      <div>평균 1박 요금은 {average} 입니다.</div>
      <canvas width="365" height="100" ref={canvasRef} />
    </>
  );
};

const getData = async (url: string) => {
  const data = await fetch(url);

  return data.json();
};

export default Price;
