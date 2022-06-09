import HEART_ICON from "@assets/heart-icon.svg";
import STAR_ICON from "@assets/star-icon.svg";
import Icon from "@components/common/Icon";
import Text from "@components/common/Text";

import * as S from "./style";

const RoomItem = () => {
  // const {
  //   thumbnails,
  //   id,
  //   address,
  //   roomType,
  //   name,
  //   maxGuest,
  //   roomCount,
  //   bedCount,
  //   bathroomCount,
  //   options,
  //   rating,
  //   reviewCount,
  //   salesPrice,
  //   originalPrice,
  //   badge,
  // } = {};

  return (
    <S.RoomItem>
      <S.Photo>
        <img src="https://a0.muscache.com/im/pictures/746a6a9e-73f3-4efa-8167-7c05916a9240.jpg?im_w=720"></img>
      </S.Photo>
      <S.Content>
        <S.InfoTop>
          {/* address의 roomtype */}
          <Text text="서초구의 아파트 전체" color="gray3" fontSize="smaller" />
          {/* name */}
          <Text text="Spacious and Comfortable cozy house #4" color="gray1" fontSize="small" />
          <div>
            {/* maxGues roomCount bedCount bathroomCount */}
            <Text text="최대 인원 3명 원룸 침대 1개 욕실 1개" color="gray3" fontSize="smaller" />
            {/* options: kitchen wifi airConditioner freeParkingLot hairDryer*/}
            <Text text="주방 무선 인터넷 에어컨 헤어드라이어" color="gray3" fontSize="smaller" />
          </div>
          {/* address */}
          {/* name

        {/* maxGuest 
				"roomCount": 1,
      "bedCount": 1,
      "bathroomCount": 1,*/}

          {/* "options": {
        "kitchen": true,
        "wifi": true,
        "airConditioner": true,
        "freeParkingLot": true,
        "hairDryer": true
      } */}
        </S.InfoTop>

        <S.InfoBottom>
          <S.Review>
            <Icon iconName={STAR_ICON} iconSize="star" style={{ cursor: "default" }}></Icon>
            {/* rating  */}
            <Text text="4.80" color="gray1" fontSize="smaller" />
            {/* reviewCount  */}
            <Text text="(후기 127개)" color="gray3" fontSize="smaller" />
          </S.Review>
          <S.Price>
            {/* originalPrice salePrice */}
            <Text text="￦82,953 / 박" color="gray1" fontSize="small" fontWeight="bold" />
            <Text text="총액 ￦1,493,159" color="gray3" fontSize="smaller" />
          </S.Price>
        </S.InfoBottom>
        <S.Heart>
          <Icon iconName={HEART_ICON} iconSize={"base"} style={{ cursor: "default" }}></Icon>
        </S.Heart>
      </S.Content>
    </S.RoomItem>
  );
};

export default RoomItem;
