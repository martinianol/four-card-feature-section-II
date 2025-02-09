import styled from "styled-components";
import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
  return (
    <Main>
      <Header />
      <Cards />
      {/*   <footer>
        <p>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer> */}
    </Main>
  );
}

export default App;

const Main = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 85px 32px 78px;
  align-items: center;
  gap: 76px;
`;
