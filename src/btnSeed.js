export const arrOfBtnRows = [
  {
    id: "row-5",
    className: "row-5-btn",
    children: [
      {
        id: "clear",
        className: "btns clear",
        content: "C",
      },
      {
        id: "brac",
        className: "btns green-texts brac",
        content: "( )",
      },
      {
        id: "percent",
        className: "btns green-texts operator",
        content: "%",
      },
      {
        id: "divide",
        className: "btns green-texts operator",
        content: "/",
      },
    ],
  },
  {
    id: "row-4",
    className: "row-4-btn",
    children: [
      {
        id: "7-btn",
        className: "btns number",
        content: "7",
      },
      {
        id: "8-btn",
        className: "btns number",
        content: "8",
      },
      {
        id: "9-btn",
        className: "btns number",
        content: "9",
      },
      {
        id: "times",
        className: "btns green-texts operator",
        content: "x",
      },
    ],
  },
  {
    id: "row-3",
    className: "row-3-btn",
    children: [
      {
        id: "4-btn",
        className: "btns number",
        content: "4",
      },
      {
        id: "5-btn",
        className: "btns number",
        content: "5",
      },
      {
        id: "6-btn",
        className: "btns number",
        content: "6",
      },
      {
        id: "minus",
        className: "btns green-texts operator",
        content: "-",
      },
    ],
  },
  {
    id: "row-2",
    className: "row-2-btn",
    children: [
      {
        id: "1-btn",
        className: "btns number",
        content: "1",
      },
      {
        id: "2-btn",
        className: "btns number",
        content: "2",
      },
      {
        id: "3-btn",
        className: "btns number",
        content: "3",
      },
      {
        id: "plus",
        className: "btns green-texts operator",
        content: "+",
      },
    ],
  },
  {
    id: "row-1",
    className: "row-1-btn",
    children: [
      {
        id: "plus-minus",
        className: "btns plus-minus",
        content: "+/-",
      },
      {
        id: "zero",
        className: "btns number",
        content: "0",
      },
      {
        id: "point",
        className: "btns decimal",
        content: ".",
      },
      {
        id: "equals",
        className: "btns equals",
        content: "=",
      }
    ],
  },
];

export function calculate(input1, input2, operator) {
  let calculation;
  switch (operator) {
    case "+":
      if (input2) {
        calculation = parseFloat(input1) + parseFloat(input2);
      } else {
        calculation = parseFloat(input1) + 0;
      }
      break;
    case "-":
      if (input2) {
        calculation = parseFloat(input1) - parseFloat(input2);
      } else {
        calculation = parseFloat(input1) - 0;
      }
      break;
    case "/":
      if (input2) {
        calculation = parseFloat(input1) / parseFloat(input2);
      }
      if (input2 === "0") {
        calculation = "Maths Error";
      } else {
        calculation = parseFloat(input1) / 1;
      }
      break;
    case "x":
      if (input2) {
        calculation = parseFloat(input1) * parseFloat(input2);
      } else {
        calculation = parseFloat(input1) * 1;
      }
      break;
    case "%":
      if (input2) {
        calculation = (parseFloat(input1) / 100) * parseFloat(input2);
      } else {
        calculation = parseFloat(input1) / 100;
      }
      break;
      default: return calculation;
  }
  console.log(calculation);
  return calculation;
}
