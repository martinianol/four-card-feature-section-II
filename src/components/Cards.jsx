import styled from "styled-components";
import data from "../data/data.json";
import Card from "./Card";

const Cards = () => {
  return (
    <Container>
      {data.items.map((element) => (
        <Card key={element.id} {...element} />
      ))}
    </Container>
  );
};

export default Cards;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
