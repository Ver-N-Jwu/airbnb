const { kakao } = window;

export const moveEvent = (map) => {
  kakao.maps.event.addListener(map, "dragend", function () {
    const latlng = map.getCenter();

    let message = "변경된 지도 중심좌표는 " + latlng.getLat() + " 이고, ";
    message += "경도는 " + latlng.getLng() + " 입니다";
    console.log("dragendMessage", message);
  });
};
