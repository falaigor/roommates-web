import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

import logoSvg from "../../images/logo.svg";
import * as S from "./styles";

export const Header = () => {
  const { signInUrl, user, signOut } = useContext(AuthContext);

  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <Link to="/">
          <S.Logo>
            <img src={logoSvg} alt="" />
            <strong>Room</strong>mates
          </S.Logo>
        </Link>

        {!!user ? (
          <S.ButtonLogout onClick={signOut}>Logout</S.ButtonLogout>
        ) : (
          <S.Button href={signInUrl}>Entrar</S.Button>
        )}
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
};
