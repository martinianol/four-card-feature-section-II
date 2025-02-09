/* eslint-disable react/prop-types */
import styled from "styled-components";
import { getIcon } from "./Icons.js";

const Card = ({ description, title, color, icon }) => {
  const Icon = getIcon(icon);
  return (
    <CardContainer>
      <BorderLine color={color} />
      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
      <IconWrapper>
        <img src={Icon} alt={`${icon} Icon`} />
      </IconWrapper>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.section`
  flex-grow: 1;
  position: relative;
  border-radius: 8px;
  padding: 27.5px 28px;
  background-color: #fff;
  max-width: 350px;
  box-shadow: 0px 15px 30px -11px #83a6d280;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 33px;
  justify-content: space-between; /* ✅ Ensures the icon is pushed to the bottom */
  min-height: 200px; /* ✅ Adjust based on content */

  @media (min-width: 1200px) {
    padding: 32px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex-grow: 1;
`;

const BorderLine = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 3.5px;
  background-color: ${({ color }) => color || "red"};
`;

const Title = styled.h2`
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0px;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 23px;
  letter-spacing: 0.1px;
  opacity: 0.5;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    width: 57px;
    height: 57px;
    object-fit: contain;

    @media (min-width: 1200px) {
      width: 64px;
      height: 64px;
    }
  }
`;
