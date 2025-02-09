import styled from "styled-components";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <PageContainer>
      <Main>
        <Header />
        <Cards />
      </Main>
      <Footer />
    </PageContainer>
  );
}

export default App;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* ✅ Ensures page takes full height */
  display: flex;
  place-items: center;
  background-color: #fafafa;
  color: #4d4f62; 
  font-family: "Poppins", sans-serif;
  
`;

const Main = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 85px 32px 78px;
  align-items: center;
  gap: 76px;
  flex-grow: 1;

  @media (min-width: 1200px) {
    gap: 64px;
  }
`;
