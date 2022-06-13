import React, { useEffect } from "react";

import { kakaoMapScript } from "@components/Map/helpers/kakaoMapScript";
import { moveEvent } from "@components/Map/helpers/moveEvent";

import * as S from "./style";

type LatLonType = {
  latitude: number;
  longitude: number;
};
const CODESQUAD_POS: LatLonType = { latitude: 37.4909, longitude: 127.0334 };

const Map = () => {
  useEffect(() => {
    const map = kakaoMapScript({ latitude: CODESQUAD_POS.latitude, longitude: CODESQUAD_POS.longitude, level: 3 });
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
