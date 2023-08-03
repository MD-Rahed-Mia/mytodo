
const inputText = document.getElementById("input-text");
const addTask = document.getElementById("add-task");
const listContainer = document.querySelector(".list-container");

addTask.addEventListener("click", setTask);

function setTask() {
  if (inputText.value === "") {
    alert("hey, enter your text for adding");
  }
  else{
    console.log(inputText.value);
    let li = document.createElement("li");
    li.innerHTML = inputText.value;
    listContainer.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span)
  }
  inputText.value = '';
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
})

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function setData() {
  listContainer.innerHTML = localStorage.getItem("data")
}

setData();

