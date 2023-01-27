import "./styles.css";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  color: white;
  height: 100vh;
  display: flex;
`;

const BoxOne = styled.div`
  background-color: red;
  height: 200px;
  width: 200px;
`;

const BoxTwo = styled.div`
  background-color: green;
  height: 200px;
  width: 200px;
`;

const BoxThree = styled.div`
  background-color: blue;
  height: 200px;
  width: 200px;
`;

export default function App() {
  return (
    <Container>
      <BoxOne />
      <BoxTwo />
      <BoxThree />
    </Container>
  );
}
