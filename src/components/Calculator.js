import { useState } from "react";
import CalcButton from "./CalcButton";
import TotalDisplay from "./TotalDisplay";

const calculateResult = (val1, val2, operation) => {
  const num1 = +val1;
  const num2 = +val2; // +val1 => Number(val1)

  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    default:
      return operation;
  }
};

export const Calculator = () => {
  const [calcState, setCalcState] = useState({
    prev: "",
    current: "",
    total: 0,
    operation: null,
    memory: 0,
  });

  const handleButtonClick = (symbol) => {
    const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const operators = ["-", "+", "*", "/", "="];
    if (operators.includes(symbol)) {
      if (symbol === "=") {
        const { current, operation, prev } = calcState;
        if (prev && current) {
          const result = calculateResult(prev, current, operation);
          console.log(result);
          setCalcState({
            prev: "",
            current: "" + result,
            total: "" + result,
            operation: null,
            memory: 0,
          });
        }
      } else {
        setCalcState((prevState) => ({
          ...prevState,
          prev: prevState.current,
          current: "",
          operation: symbol,
        }));
      }
    }

    if (digits.includes(symbol)) {
      // it is a number
      // "10890"
      if (!calcState.operation) {
        setCalcState((prevState) => ({
          ...prevState,
          current: prevState.current + symbol,
        }));
      } else {
        setCalcState((prevState) => ({
          ...prevState,
          current: prevState.current + symbol,
        }));
      }
    }
  };

  const getDisplayValue = () => {
    const { current, prev, total } = calcState;
    if (current !== "") {
      return current;
    }
    if (prev !== "") {
      return prev;
    }
    return total;
  };

  return (
    <div className="container row mt-5">
      <div className="col-md-12 d-flex justify-content-center">
        <form name="Cal">
          <TotalDisplay value={getDisplayValue()} />
          <div className="row details">
            <span id="operation">
              <b>Operation: </b>
              {calcState.operation}
            </span>
            <span id="memory">
              <b>Memory:</b>
              {calcState.memory}
            </span>
          </div>
          <div className="row">
            <CalcButton
              value={"M+"}
              //   onClick={() => memoryAdd("M+")}
            />
            <CalcButton
              value={"MR"}
              //   onClick={() => memoryReplace("MR")}
            />
            <CalcButton
              value={"MC"}
              //   onClick={() => memoryClear("MC")}
            />{" "}
            <CalcButton value={"/"} onClick={() => handleButtonClick("/")} />
          </div>
          <div className="row">
            <CalcButton value={1} onClick={() => handleButtonClick("1")} />
            <CalcButton value={2} onClick={() => handleButtonClick("2")} />
            <CalcButton value={3} onClick={() => handleButtonClick("3")} />
            <CalcButton value={"+"} onClick={() => handleButtonClick("+")} />
          </div>
          <div className="row">
            <CalcButton value={4} onClick={() => handleButtonClick("4")} />
            <CalcButton value={5} onClick={() => handleButtonClick("5")} />
            <CalcButton value={6} onClick={() => handleButtonClick("6")} />{" "}
            <CalcButton value={"-"} onClick={() => handleButtonClick("-")} />
          </div>
          <div className="row">
            <CalcButton value={7} onClick={() => handleButtonClick("7")} />
            <CalcButton value={8} onClick={() => handleButtonClick("8")} />
            <CalcButton value={9} onClick={() => handleButtonClick("9")} />
            <CalcButton value={"*"} onClick={() => handleButtonClick("*")} />
          </div>
          <div className="row ce_button">
            {" "}
            <CalcButton
              value={"CE"}
              onClick={() => setCalcState({ ...calcState, total: 0 })}
            />
            <CalcButton value={0} onClick={() => handleButtonClick("0")} />
            <CalcButton value={"="} onClick={() => handleButtonClick("=")} />
          </div>{" "}
        </form>
      </div>
    </div>
  );
};
