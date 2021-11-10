import * as S from "./styles";

export const HowItWorks = () => {
  return (
    <S.HowItWorksWrapper>
      <S.Content>
        <S.Title>How it works</S.Title>
        <S.Subtitle>
          Safe and easy! Your booking will be confirmed in less than 2 working
          days. Stop the flat visits and welcome the right person
        </S.Subtitle>

        <S.Works>
          <S.WorksItem>
            <div className="description">Find all room near you</div>
          </S.WorksItem>
          <S.WorksItem>
            <div className="description">Find room select yout home</div>
          </S.WorksItem>
          <S.WorksItem>
            <div className="description">Pick your room and enjoy</div>
          </S.WorksItem>
        </S.Works>
      </S.Content>
    </S.HowItWorksWrapper>
  );
};
