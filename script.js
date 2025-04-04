const genBtn = document.querySelector("#genBtn");
const userInput = document.querySelector("#userInput");
const tableOutput = document.querySelector("#table-output");

function generateTable() {
  const inputValue = userInput.value;
  if (inputValue.trim() === "" || isNaN(inputValue)) {
    alert("Please enter a valid number.");
    return;
  } else {
    // Clear previous elements
    tableOutput.innerHTML = '<div class="table"></div>';
    const tableOfRows = document.querySelector("div.table");

    for (let i = 1; i <= 10; i++) {
      let product = i * inputValue; // Fixed multiplication logic
      const rowDiv = document.createElement("div");
      rowDiv.className = "row";
      rowDiv.innerHTML = `<span>${inputValue} × ${i}</span> = ${product}`;
      tableOfRows.append(rowDiv);
    }
    const h1 = document.createElement("h1");
    h1.innerHTML = `Multiplication Table of ${inputValue}`;
    tableOutput.prepend(h1); // Use prepend instead of append
  }
}

genBtn.addEventListener("click", generateTable);
