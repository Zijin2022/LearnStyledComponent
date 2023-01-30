import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
// import { ThemeProvider } from "styled-components";
import Navbar from "./components/navbar/navbar";

/* @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
    * {
      font-family: 'Roboto', sans-serif; 
    } */

const GlobalStyles = createGlobalStyle`
  body{
    background-color: white;
    
  }
`;

const Container = styled.div`
  background-color: white;
  height: 100vh;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Navbar></Navbar>
      </Container>
    </>
  );
}
