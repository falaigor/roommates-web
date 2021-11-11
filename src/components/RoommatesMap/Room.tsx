import { FiEye } from "react-icons/fi";
import * as S from "./styles";

interface RoomProps {
  title: string;
  description: string;
  price: string;
  cover: string;
  href: string;
  centerPosition: () => void;
}

export const Room = ({
  title,
  description,
  price,
  cover,
  href,
  centerPosition,
}: RoomProps) => {
  return (
    <S.Room>
      <S.Image to={href}>
        <img src={cover} alt={title} />
        <div>
          <FiEye /> See Room
        </div>
      </S.Image>
      <S.Info onClick={centerPosition}>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Price>
          {price}
          <span>/mounth</span>
        </S.Price>
      </S.Info>
    </S.Room>
  );
};
