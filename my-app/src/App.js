import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const BoxOne = styled.div`
  background-color: red;
  height: 200px;
  flex: 1;
`;

const BoxTwo = styled.div`
  background-color: green;
  height: 200px;
  flex: 1;
`;

const BoxThree = styled.div`
  background-color: blue;
  height: 200px;
  flex: 1;
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
