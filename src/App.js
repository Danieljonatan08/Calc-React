import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";
const App = () => {
  const [firstNumber, setFirstNumber] = useState("0");
  const [currentNumber, setCurrentNumber] = useState("0");
  const  handleOnClear = () => {    
      setCurrentNumber("0");
      setFirstNumber("0");
  };
  const [operation, setOperation] = useState("");
  
  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => (prev === "0" ? num : `${prev === '0' ? '' : prev}${num}`));
  };


  const handleSumNumbers = () => {
  if (firstNumber === "0") {
    setFirstNumber(String(currentNumber));
    setCurrentNumber("0"); // aqui sim você pode limpar o currentNumber
    setOperation("+");
    
  } else {
    const sum = Number(firstNumber) + Number(currentNumber);
    setCurrentNumber(String(sum));
    setFirstNumber("0"); // opcional, se quiser resetar
    setOperation("");
  }
};

const handleMinusNumbers = () => {
  if (firstNumber === "0") {
    setFirstNumber(String(currentNumber));
    setCurrentNumber("0"); // aqui sim você pode limpar o currentNumber
    setOperation("-");
    
  } else {
    const sum = Number(firstNumber) - Number(currentNumber);
    setCurrentNumber(String(sum));
    setFirstNumber("0"); // opcional, se quiser resetar
    setOperation("");
  }
};
const handleMultiplyNumbers = () => {
  if (firstNumber === "0") {
    setFirstNumber(String(currentNumber));
    setCurrentNumber("0"); // aqui sim você pode limpar o currentNumber
    setOperation("*");
    
  } else {
    const sum = Number(firstNumber) * Number(currentNumber);
    setCurrentNumber(String(sum));
    setFirstNumber("0"); // opcional, se quiser resetar
    setOperation("");
  }
};
const handleDivisionNumbers = () => {
  if (firstNumber === "0") {
    setFirstNumber(String(currentNumber));
    setCurrentNumber("0"); // aqui sim você pode limpar o currentNumber
    setOperation("/");
    
  } else {
    const sum = Number(firstNumber) / Number(currentNumber);
    setCurrentNumber(String(sum));
    setFirstNumber("0"); // opcional, se quiser resetar
    setOperation("");
  }
};

const handleEquals = () => {
if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
  switch (operation) {
    case "+":
      handleSumNumbers();
      break;
      case "-":
      handleMinusNumbers();
      break;
      case "*":
      handleMultiplyNumbers();
      break;
      case "/":
      handleDivisionNumbers();
      break;
    default:
      break;
  }
}
};

return (
  <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="on" onClick={() => handleAddNumber("")} />
          <Button label="c" onClick={handleOnClear} />

         <Button label="/" onClick={handleDivisionNumbers} />
          <Button label="*" onClick={handleMultiplyNumbers} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
