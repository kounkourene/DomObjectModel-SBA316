//Adding a List of Items
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

//Editing and Deleting Items
ulList.addEventListener("click", function (e) {
  if (e.target.classList[1] === "fa-pencil-square-o") {
    let parentPar = e.target.parentNode;
    parentPar.style.display = "none";
    let notePar = parentPar.previousElementSibling;
    let input = parentPar.nextElementSibling;

    input.value = notePar.textContent;
    input.style.display = "block";

    input.addEventListener("keypress", function (e) {
      if (e.keyCode === 13) {
        if (input.value !== "") {
          notePar.textContent = input.value;
          parentPar.style.display = "block";
          input.style.display = "none";
        } else {
          let listEl = input.parentNode;
          listEl.parentNode.removeChild(listEl);
        }
      }
    });
  } else if (e.target.classList[1] === "fa-times") {
    let listSecItem = e.target.parentNode.parentNode;

    listSecItem.parentNode.removeChild(listSecItem);
  }
});

//Hiding Notes

let hideNotes = document.getElementById("hide");

hideNotes.addEventListener("click", function () {
  let label = document.querySelector("label");
  if (hideNotes.checked) {
    label.textContent = "Unhide notes";
    ulList.style.display = "none";
  } else {
    label.textContent = "Hide notes";
    ulList.style.display = "block";
  }
});
