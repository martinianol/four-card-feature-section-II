import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <p>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Mars</a>.
      </p>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  padding: 20px;
  font-size: 14px;
  text-align: center;
  opacity: 0.5;
`;
