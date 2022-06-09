const { kakao } = window;

export const kakaoMapScript = ({ latitude, longitude, level }) => {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: level,
  };
  const map = new kakao.maps.Map(container, options);
  return map;
};
