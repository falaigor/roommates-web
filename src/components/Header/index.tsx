import { useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

import logoSvg from "../../images/logo.svg";
import api from "../../services/api";

type AuthResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    avatar_url: string;
  };
};

export const Header = () => {
  const client_id =
    "658909344329-0f0pdiip1uhbsd9agne2jgtgbjjsv9d7.apps.googleusercontent.com";
  const client_secret = "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";
  const signinGoogle = `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${client_id}&cliente_secrete=${client_secret}&scope=profile&redirect_uri=http://localhost:3000/`;

  async function signIn(googleAccessToken: string) {
    const response = await api.post<AuthResponse>("authenticate", {
      accessToken: googleAccessToken,
    });

    const { token, user } = response.data;

    localStorage.setItem("@roommate:token", token);
    console.log(user);
  }

  useEffect(() => {
    const url = window.location.href;
    const hasGoogleToken = url.includes("access_token=");

    if (hasGoogleToken) {
      const [urlWithoutAccessToken, googleAccessToken] =
        url.split("access_token=");

      window.history.pushState({}, "", urlWithoutAccessToken);

      signIn(googleAccessToken);
    }
  });

  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <Link to="/">
          <S.Logo>
            <img src={logoSvg} alt="" />
            <strong>Room</strong>mates
          </S.Logo>
        </Link>

        <a href={signinGoogle}>Entrar</a>
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
};
