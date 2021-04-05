const toDoForm = document.querySelector(".js-form"),
  toDoInput = document.querySelector("input"),
  toDoList = document.querySelector(".js-ul"),
  toDoFinish = document.querySelector(".js-finish-ul");
const TODOS_LS = "PENDING";
const FINISH_LS = "FINISH";
let pending = [];
let finish = [];
function finishToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const finishList = li.cloneNode(true);
  toDoList.removeChild(li);
  toDoFinish.appendChild(finishList);
  const cleanToDos = pending.filter(function (pending) {
    return pending.id !== parseInt(li.id);
  });
  pending = cleanToDos;
  saveToDos();
  const toDoObj = {
    text: li.innerText,
    id: finish.length + 1,
  };
  finish.push(toDoObj);
  saveFinishToDos();
}
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(pending));
}
function saveFinishToDos() {
  localStorage.setItem(FINISH_LS, JSON.stringify(finish));
}
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = pending.filter(function (pending) {
    return pending.id !== parseInt(li.id);
  });
  pending = cleanToDos;
  saveToDos();
}
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = ":grinning:";
  delBtn.addEventListener("click", deleteToDo);
  const finishBtn = document.createElement("button");
  finishBtn.innerHTML = ":sunglasses:";
  finishBtn.addEventListener("click", finishToDo);
  const span = document.createElement("span");
  const newId = pending.length + 1;
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(finishBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: pending.length + 1,
  };
  pending.push(toDoObj);
  saveToDos();
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}
function something(toDo) {
  paintToDo(toDo.text);
}
function finishSomthing(toDo) {
  finishToDo(toDo.text);
}
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(something);
  }
}
function loadFinishToDos() {
  const loadedToDos = localStorage.getItem(FINISH_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
  }
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();