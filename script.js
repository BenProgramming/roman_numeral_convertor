document.addEventListener("DOMContentLoaded", function() {
  const convertBtn = document.querySelector("#convert-btn");
  convertBtn.onclick = addOuput;

  const number = document.querySelector("#number");
  const output = document.querySelector("#output");

  function addOuput() {
    output.textContent = controlFlow(number.value);
  }

  function controlFlow(inputStr) {
    inputStr = inputStr.trim();
    const inputNum = Number(inputStr);

    if (inputNum > 0 && inputNum < 4000) {
      return convertToNum(inputStr);
    } 
    return inErrorRes(inputStr);
  }

  function inErrorRes(input) {
    const inputNum = Number(input);
    if (input === "" || isNaN(inputNum)) {
      return "Please enter a valid number";
    } else if (inputNum <= 0) {
      return "Please enter a number greater than or equal to 1";
    } else {
      return "Please enter a number less than or equal to 3999";
    }
  }

  const romanNums = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];

  function convertToNum(convNum) {
    let romanStr = "";
    let stDex = 0;
    while(convNum !== 0) {
      let addedChars = Math.floor(convNum / romanNums[stDex][0]);
      romanStr += romanNums[stDex][1].repeat(addedChars);
      convNum -= addedChars * romanNums[stDex][0];
      stDex++;
    }
    return romanStr;
  }
});