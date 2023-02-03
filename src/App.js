import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Suites from "./components/Suites/Suites";
import Motel from "./components/Motel/Motel";
import Cortesias from "./components/Cortesias/Cortesias";
import Localizacao from "./components/Localizacao/Localizacao";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

function App() {
  return (
    <Container>
      <Header></Header>
      <Main></Main>
      <Suites></Suites>
      <Motel></Motel>
      <Cortesias></Cortesias>
      <Localizacao></Localizacao>
      <Footer></Footer>
    </Container>
  );
}

export default App;
