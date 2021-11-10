import * as S from "./styles";

import imgSlider from "../../images/roommates-sharing-happy-moments-together.jpg";

export const Hero = () => {
  return (
    <S.HeroWrapper>
      <S.HeroContent>
        <div className="curve">
          <img src={imgSlider} alt="" width="100%" />
        </div>
      </S.HeroContent>
      <S.Button to="/roommates">Find your roommate</S.Button>
    </S.HeroWrapper>
  );
};
