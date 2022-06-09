import React, { useEffect } from "react";

import { kakaoMapScript } from "@components/Map/helpers/kakaoMapScript";
import { moveEvent } from "@components/Map/helpers/moveEvent";

import * as S from "./style";

type LatLonType = {
  latitude: number;
  longitude: number;
};
const 코드스쿼드좌표: LatLonType = { latitude: 37.4909, longitude: 127.0334 };

const Map = () => {
  useEffect(() => {
    const map = kakaoMapScript({ latitude: 코드스쿼드좌표.latitude, longitude: 코드스쿼드좌표.longitude, level: 3 });
    moveEvent(map);
  }, []);

  return (
    <S.Map>
      <div
        id="map"
        style={{
          width: "100%",
          height: "100%",
        }}
      ></div>
    </S.Map>
  );
};
export default Map;
