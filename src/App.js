import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import cancel from "./calculator images/cancel.png";
import calculatorIcon from "./calculator images/calculatorIcon.png";
import clock from "./calculator images/clock.png";
import ruler from "./calculator images/ruler.png";
import { arrOfBtnRows, calculate } from "./btnSeed";

function App() {
  let rowsOfBtns = arrOfBtnRows.map((rows) => (
    <div className={rows.className} id={rows.id} key={rows.id}>
      {rows.children.map((btns) => (
        <div
          className={btns.className}
          id={btns.id}
          key={btns.id}
          onClick={handleClick}
        >
          {btns.content}
        </div>
      ))}
    </div>
  ));

  function handleClick(e) {
    let btn;
    btn = e.target;
    const btnIdAttribute = btn.getAttribute("id");
    if (btnIdAttribute === "delete") {
      const duplicateCalcInput = calculationInput.split("");
      duplicateCalcInput.pop();
      //If the duplicateCalcInput is more than zero, return the remaining value after deletion
      if (duplicateCalcInput.length > 0) {
        setCalculationInput(duplicateCalcInput.join(""));
        // else return zero value
      } else {
        setCalculationInput("0");
      }
    } else if (btn.classList.contains("clear")) {
      setCalculationInput("0");
      setResultInput("");
    } else if (btn.classList.contains("operator")) {
      if (
        !calculationInput.split("").includes("+") &&
        !calculationInput.split("").includes("-") &&
        !calculationInput.split("").includes("x") &&
        !calculationInput.split("").includes("/") &&
        !calculationInput.split("").includes("%")
      ) {
        setCalculationInput(calculationInput + btn.textContent);
      }
    } else if (btn.classList.contains("brac")) {
      return;
    } else if (btn.classList.contains("plus-minus")) {
      return;
    } else if (btn.classList.contains("equals")) {
      const result = calculate(firstInput, thirdInput, secondInput);
      setResultInput(result);
    } else {
      if (calculationInput === "0") {
        setCalculationInput(btn.textContent);
      } else {
        setCalculationInput(calculationInput + btn.textContent);
      }
    }
  }

  const [calculationInput, setCalculationInput] = useState("0");
  const [resultInput, setResultInput] = useState("");
  const [firstInput, setFirstInput] = useState("0");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("0");

  useEffect(() => {
    const splitCalculationInput = calculationInput.split("");
    if (
      splitCalculationInput.includes("+") ||
      splitCalculationInput.includes("-") ||
      splitCalculationInput.includes("/") ||
      splitCalculationInput.includes("x") ||
      splitCalculationInput.includes("%")
    ) {
      let indexOfOperator = splitCalculationInput.findIndex(
        (arr) =>
          arr === "-" ||
          arr === "+" ||
          arr === "/" ||
          arr === "%" ||
          arr === "x"
      );
      let arrBeforeOperator = splitCalculationInput.slice(0, indexOfOperator);
      let beforeJoinedArray = arrBeforeOperator.join("");
      setFirstInput(beforeJoinedArray);
      setSecondInput(splitCalculationInput[indexOfOperator]);
      let neededIndex = indexOfOperator + 1;
      let slicedArray = splitCalculationInput.slice(neededIndex);
      let joinedSlicedArray = slicedArray.join("");
      setThirdInput(joinedSlicedArray);
      console.log(firstInput, secondInput, thirdInput);
    } else {
      setCalculationInput(calculationInput);
    }
  }, [calculationInput, firstInput, secondInput, thirdInput]);

  // useEffect(() => {
  //   setArrOfInputs([firstInput, secondInput, thirdInput]);
  // }, [thirdInput, secondInput, firstInput]);

  return (
    <div className="App">
      <div className="flex-calc">
        <div className="calculator" id="flex-calculator">
          <div className="screen">
            <span className="inputs" id="input-1">
              {calculationInput}
            </span>
            <span className="inputs" id="input-2">
              {resultInput}
            </span>
            <div className="icons">
              <span className="row-1">
                <img src={clock} alt="clock" />
                <img src={ruler} alt="ruler" />
                <img src={calculatorIcon} alt="calc" />
              </span>
              <span>
                <img
                  src={cancel}
                  alt="cancel"
                  onClick={handleClick}
                  className="row-2 btns"
                  id="delete"
                />
              </span>
            </div>
          </div>
          <hr />
          <div className="buttons">{rowsOfBtns}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
