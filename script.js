const form = document.querySelector("form");
const tasksContainer = document.querySelector(".tasks");
const body = document.body;
const themeBtn = document.querySelector("#theme");

themeBtn.addEventListener("click", () => {
  if (themeBtn.dataset.theme === "light") {
    body.classList.replace("light", "dark");
    themeBtn.dataset.theme = "dark";
    themeBtn.textContent = "Light";
  } else {
    body.classList.replace("dark", "light");
    themeBtn.dataset.theme = "light";
    themeBtn.textContent = "Dark";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = e.target[0].value;
  // Gives dynamic value.
  const category = e.target[1].value;

  // takes static value.
  const category2 = e.target[0].getAttribute("value");
  //   console.log(category2);

  if (task.trim() === "") return;

  const taskCard = document.createElement("div");
  const paragraph = document.createElement("p");
  const small = document.createElement("small");

  const taskText = document.createTextNode(`${task}`);
  const categoryText = document.createTextNode(`${category}`);

  const buttonDiv = document.createElement("button");
  const editBtn = document.createElement("button");
  const completeBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  editBtn.textContent = "Edit";
  completeBtn.textContent = "Complete";
  deleteBtn.textContent = "Delete";

  buttonDiv.append(deleteBtn);
  buttonDiv.prepend(editBtn, completeBtn);
  buttonDiv.classList.add("buttons");
  editBtn.classList.add("edit");
  completeBtn.classList.add("complete");
  deleteBtn.classList.add("delete");

  paragraph.appendChild(taskText);
  small.appendChild(categoryText);

  taskCard.append(paragraph, small, buttonDiv);
  taskCard.classList.add("task-card");

  taskCard.setAttribute("data-id", Date.now());
  taskCard.dataset.status = "pending";
  taskCard.dataset.category = category;

  tasksContainer.append(taskCard);
});

// edit form
const editForm = document.querySelector(".edit-form");
const cross = document.querySelector("#cross");
const updatedTask = document.querySelector("#edit-task");
const categoryTask = document.querySelector("#category-task");
const updateBtn = document.querySelector("#update");

const updateTask = (e) => {
  if (updatedTask.value.trim() === "") return;

  e.target.parentElement.parentElement.innerHTML = `
          <p>${updatedTask.value}</p>
          <small>${categoryTask.value}</small>
          <div class="buttons">
            <button class="edit">Edit</button>
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
          </div>
    `;
};

tasksContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    editForm.style.display = "flex";
    updatedTask.value =
      e.target.parentElement.parentElement.querySelector("p").textContent;
    categoryTask.value =
      e.target.parentElement.parentElement.querySelector("small").textContent;
    updateBtn.onclick = () => {
      editForm.style.display = "none";
      updateTask(e);
    };
    updatedTask.focus();
    cross.addEventListener("click", () => {
      editForm.style.display = "none";
    });
  } else if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  } else if(e.target.classList.contains("complete")){
    e.target.parentElement.parentElement.dataset.status = "complete";
    e.target.parentElement.parentElement.style.backgroundColor = "green"
  }
});
