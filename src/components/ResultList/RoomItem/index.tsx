import HEART_ICON from "@assets/heart-icon.svg";
import STAR_ICON from "@assets/star-icon.svg";
import Icon from "@components/common/Icon";
import Text from "@components/common/Text";
import { SearchResultStateType } from "@contexts/SearchResultProvider";

import * as S from "./style";

const RoomItem = (roomInfo: SearchResultStateType) => {
  const {
    thumbnails,
    address,
    roomType,
    name,
    maxGuest,
    roomCount,
    bedCount,
    bathroomCount,
    options,
    rating,
    reviewCount,
    salePrice,
    originalPrice,
    badge,
    detailAddres,
  } = roomInfo;

  const { kitchen, wifi, airConditioner, freeParkingLot, hairDryer } = options;

  // TODO 날짜 기간 당 가격 설정

  return (
    <S.RoomItem>
      <S.Photo>
        <img src={`${thumbnails[0]}`}></img>
      </S.Photo>
      <S.Content>
        <S.InfoTop>
          <Text text={`${address}의 ${roomType}`} color="gray3" fontSize="smaller" />
          <Text text={name} color="gray1" fontSize="small" />
          <div>
            <Text
              text={`최대 인원 ${maxGuest}명 방${roomCount}개 침대 ${bedCount}개 욕실 ${bathroomCount}개`}
              color="gray3"
              fontSize="smaller"
            />
            <Text
              text={`${kitchen ? "주방" : ""} ${wifi ? "무선인터넷" : ""} ${airConditioner ? "에어컨" : ""} ${
                hairDryer ? "헤어드라이어" : ""
              } ${freeParkingLot ? "주차공간" : ""} 
               `}
              color="gray3"
              fontSize="smaller"
            />
          </div>
        </S.InfoTop>

        <S.InfoBottom>
          <S.Review>
            <Icon iconName={STAR_ICON} iconSize="star" style={{ cursor: "default" }}></Icon>
            <Text text={`${rating}`} color="gray1" fontSize="smaller" />
            <Text text={`(후기 ${reviewCount}개)`} color="gray3" fontSize="smaller" />
          </S.Review>
          <S.Price>
            <Text text={`￦${salePrice.toLocaleString("kr")} / 박`} color="gray1" fontSize="small" fontWeight="bold" />
            <Text text="총액 ￦1,493,159" color="gray3" fontSize="smaller" />
          </S.Price>
        </S.InfoBottom>
        <S.Heart>
          <Icon iconName={HEART_ICON} iconSize="base" style={{ cursor: "default" }}></Icon>
        </S.Heart>
      </S.Content>
    </S.RoomItem>
  );
};

export default RoomItem;
