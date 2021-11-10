import { FiMapPin } from "react-icons/fi";

import * as S from "./styles";

interface RoomProps {
  title: string;
  description: string;
  price: string;
  cover: string;
  onClick: () => void;
}

export const Room = ({
  title,
  description,
  price,
  cover,
  onClick,
}: RoomProps) => {
  return (
    <S.Room onClick={onClick}>
      <img src={cover} alt="" />
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Price>
          {price}
          <span>/mês</span>
        </S.Price>
      </S.Info>
    </S.Room>
  );
};
