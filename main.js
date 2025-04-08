const app = document.getElementById("app");

const container = document.createElement("div");
container.id = "main";
container.classList.add("container");
app.append(container);

const header = document.createElement("h2");
header.textContent = "To-Do List"
container.append(header);

const toDoList = document.createElement("ul");
toDoList.id = "todo-list";
toDoList.classList.add("list-group", "pt-3", "pb-2");
container.append(toDoList);

const toDoControls = document.createElement("div");
toDoControls.id = "todo-controls"
toDoControls.classList.add("input-group");
document.getElementById("todo-list").before(toDoControls);

const instructions = document.createElement("p");
instructions.textContent = "Instructions: Enter you to-do list."
document.getElementById("todo-controls").before(instructions);

const footer = document.createElement("p");
footer.textContent = "Lesson 10: Manipulating Elements - Simple ToDo App"
document.getElementById("todo-list").after(footer);

const toDoInput = document.createElement("input");
toDoInput.id = "text-todo";
toDoInput.classList.add("form-control");
document.getElementById("todo-controls").append(toDoInput);

const toDoButton = document.createElement("button");
toDoButton.id = "btn-todo";
toDoButton.classList.add("btn", "btn-outline-primary");
toDoButton.textContent = "Add";
toDoButton.addEventListener("click", () => {
  let itemInput = document.getElementById('text-todo');
  let toDoList = document.getElementById('todo-list');

  let newItem = document.createElement('li');
  newItem.classList.add("list-group-item");
  newItem.textContent = " " + itemInput.value;

  addRemoveBtn(newItem)

  toDoList.append(newItem);
  itemInput.value = '';
})
document.getElementById("todo-controls").append(toDoButton);

const addRemoveBtn = (listItem) => {
  let removeBtn = document.createElement('button');
  removeBtn.innerHTML = "<i class='bi bi-trash'></i>";
  removeBtn.type = "button";
  removeBtn.classList.add("btn", "btn-sm", "btn-outline-danger");
  removeBtn.addEventListener("click", () => {
    listItem.remove();
  })
  listItem.prepend(removeBtn);
}

const actionButtons = document.createElement("div");
actionButtons.classList.add("btn-group", "pt-2", "pb-2");

const btnReplaceChild = document.createElement("button");
btnReplaceChild.id = "btn-replace-child";
btnReplaceChild.classList.add("btn", "btn-outline-primary");
btnReplaceChild.textContent = "Replace Child";
btnReplaceChild.addEventListener("click", () => {
  const todo = document.getElementById('todo-list');
  const itemsArray = Array.from(todo.children);
  
  itemsArray.forEach((oldChild, index) => {
    const newChild = document.createElement("li");
    newChild.classList.add("list-group-item");
    newChild.textContent = ` Replaced Item ${index + 1}`;
    addRemoveBtn(newChild)

    todo.replaceChild(newChild, oldChild);
  });
});
actionButtons.append(btnReplaceChild);

const btnReplaceWith = document.createElement("button");
btnReplaceWith.id = "btn-replace-with";
btnReplaceWith.classList.add("btn", "btn-outline-primary");
btnReplaceWith.textContent = "Replace With";
btnReplaceWith.addEventListener("click", () => {
  const todo = document.getElementById('todo-list');
  const itemsArray = Array.from(todo.children);
  
  itemsArray.forEach((oldChild, index) => {
    const newChild = document.createElement("li");
    newChild.classList.add("list-group-item");
    newChild.textContent = ` Replaced With ${index + 1}`;
    addRemoveBtn(newChild)

    oldChild.replaceWith(newChild);
  });
});
actionButtons.append(btnReplaceWith);

const btnProcessFirst = document.createElement("button");
btnProcessFirst.id = "btn-process-first";
btnProcessFirst.classList.add("btn", "btn-outline-primary");
btnProcessFirst.textContent = "Process First";
btnProcessFirst.addEventListener("click", () => {
  let todo = document.getElementById('todo-list');
  if (todo.firstElementChild) {
    todo.removeChild(todo.firstElementChild);
  }
});
actionButtons.append(btnProcessFirst);

const btnProcessLast = document.createElement("button");
btnProcessLast.id = "btn-process-last";
btnProcessLast.classList.add("btn", "btn-outline-primary");
btnProcessLast.textContent = "Process Last";
btnProcessLast.addEventListener("click", () => {
  let todo = document.getElementById('todo-list');
  if (todo.lastElementChild) {
    todo.removeChild(todo.lastElementChild);
  }
});
actionButtons.append(btnProcessLast);

document.getElementById("todo-controls").after(actionButtons);
