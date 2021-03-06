import * as S from "./styles";

import LandingImg from "../../images/humans.svg";
import { AppRoute } from "../../routes/routes";

export const Hero = () => {
  return (
    <S.HeroContainer>
      <S.HeroContent>
        <div>
          <h1>Encontre um amigo de quarto</h1>

          <S.Button to={AppRoute.Roommates}>Encontre um quarto</S.Button>
        </div>

        <img src={LandingImg} alt="" width="100%" />
      </S.HeroContent>
    </S.HeroContainer>
  );
};
