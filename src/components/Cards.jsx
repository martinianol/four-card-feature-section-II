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
  gap: 24px;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* ✅ 3 equal columns */
    gap: 30px;
    align-items: center; /* ✅ Ensures vertical alignment support */

   /* ✅ 1st element in the 1st column, vertically centered */
   & > *:nth-child(1) {
      grid-column: 1;
      grid-row: 1 / span 2; /* ✅ Spans across both rows */
      align-self: center; /* ✅ Centers it vertically */
    }

    /* ✅ 2nd element in the 2nd column, at the top */
    & > *:nth-child(2) {
      grid-column: 2;
      grid-row: 1;
    }

    /* ✅ 3rd element in the 2nd column, below the 2nd */
    & > *:nth-child(3) {
      grid-column: 2;
      grid-row: 2;
    }

    /* ✅ 4th element in the 3rd column, vertically centered */
    & > *:nth-child(4) {
      grid-column: 3;
      grid-row: 1 / span 2; /* ✅ Spans across both rows */
      align-self: center; /* ✅ Centers it vertically */
    }
  }
`;
