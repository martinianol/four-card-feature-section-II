import styled from "styled-components";

const Card = ({ description, title, color, icon }) => {
  return (
    <CardContainer color={color}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.section`
  border-radius: 8px;
  padding: 28px;
`;

const Title = styled.h2``;

const Description = styled.p`
  font-size: 13px;
  line-height: 23px;
  letter-spacing: 0.09px;
  opacity: 0.5;
`;
