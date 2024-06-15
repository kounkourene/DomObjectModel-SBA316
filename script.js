let addInput = document.getElementById("add-input");

let addBtn = document.getElementById("add-btn");

let ulList = document.getElementById("list");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (addInput.value !== "") {
    let nList = document.createElement("li"),
      firstPar = document.createElement("p"),
      secondpar = document.createElement("p"),
      firstIcon = document.createElement("i"),
      secondIcon = document.createElement("i"),
      inputEl = document.createElement("input");

    firstIcon.className = "fa fa-pencil-square-o";
    secondIcon.className = "fa fa-times";
    inputEl.className = "edit-note";
    inputEl.setAttribute("type", "text");

    firstPar.textContent = addInput.value;

    secondpar.appendChild(firstIcon);
    secondpar.appendChild(secondIcon);
    nList.appendChild(firstPar);
    nList.appendChild(secondpar);
    nList.appendChild(inputEl);
    ulList.appendChild(nList);

    addInput.value = "";
  }
});
