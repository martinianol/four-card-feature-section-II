import styled from "styled-components";
import data from "../data/data.json";

const Header = () => {
  return (
    <Container>
      <TitleContainer>
        <SubTitle>{data["sub-title"]}</SubTitle>
        <MainTitle>{data["main-title"]}</MainTitle>
      </TitleContainer>
      <Phrase>{data["phrase"]}</Phrase>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 16px;
  max-width: 540px;
  @media (min-width: 1200px) {
    gap: 13px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (min-width: 1200px) {
    gap: 0px;
  }
`;

const MainTitle = styled.h1`
  font-size: clamp(24px, 5vw, 36px);
  font-weight: 600;
  letter-spacing: 0.17px;

  @media (min-width: 1200px) {
    letter-spacing: 0.25px;
    line-height: 51px;
    transform: translateY(-2px)
  }
`;

const SubTitle = styled.p`
  font-size: clamp(24px, 5vw, 36px);
  font-weight: 200;
  letter-spacing: 0.17px;

  @media (min-width: 1200px) {
    letter-spacing: 0.25px;
    line-height: 54px;
  }
`;

const Phrase = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.15px;
  @media (min-width: 1200px) {
    letter-spacing: 0.1px;
  }
  opacity: 0.5;
`;
