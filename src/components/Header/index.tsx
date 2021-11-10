import { Link } from "react-router-dom";
import * as S from "./styles";

import logoSvg from "../../images/logo.svg";
import { AppRoute } from "../../routes/routes";

export const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <Link to="/">
          <S.Logo>
            <img src={logoSvg} alt="" />
            <strong>Room</strong>mates
          </S.Logo>
        </Link>

        <S.Button to={AppRoute.CreateRoommate}>Create Room</S.Button>
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
};
