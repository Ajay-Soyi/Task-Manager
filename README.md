# Task Manager Application

A simple interactive **Task Manager Application** built with **HTML, CSS, and Vanilla JavaScript** as part of a **Sheryians Coding School assignment**.

The project focuses on practicing DOM manipulation, event handling, event delegation, custom data attributes, and theme switching without using any frameworks or libraries.

## ✨ Features

### Task Management
- Add a new task with a task title and category.
- Dynamically create task cards using JavaScript DOM APIs.
- Each task card contains:
  - Task title
  - Category
  - Edit button
  - Complete button
  - Delete button
- Edit an existing task through an edit form.
- Mark a task as completed.
- Delete a task from the page.

### 🌙 Theme Toggle
- Switch between Light Mode and Dark Mode.
- Uses `classList` to change the theme.
- Stores the current theme using a custom `data-theme` attribute.

### 🏷️ Custom Data Attributes
Each task card uses:
- `data-id`
- `data-status`
- `data-category`

The project uses JavaScript's `dataset` API to work with these attributes.

### 🖱️ Event Delegation
Instead of adding separate click listeners to every task card, a single click listener is attached to the task container.

The clicked button is identified using `event.target` and its classes.

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- DOM APIs

No frameworks or JavaScript libraries are used.

## 📂 Project Structure

```text
Task Manager/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 How to Run

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in a web browser.

No installation or build process is required.

## 🧠 Concepts Practiced

This project was created to practice the following JavaScript and browser concepts:

### DOM Manipulation

Task cards are created dynamically using methods such as:

```js
createElement()
createTextNode()
append()
appendChild()
prepend()
remove()
```

This allows tasks to appear on the page without refreshing it.

### Attributes vs Properties

The project demonstrates the difference between a DOM property and an HTML attribute.

For example:

```js
input.value
```

reads the current value of the input, while:

```js
input.getAttribute("value")
```

reads the value stored in the HTML attribute.

### Event Handling

The project uses:

```js
addEventListener()
```

to handle form submission, theme switching, and task interactions.

### Event Delegation

A single click listener is attached to the `.tasks` container:

```js
tasksContainer.addEventListener("click", (e) => {
    // Handle Edit, Complete and Delete
});
```

Because events bubble from the clicked button to its parent elements, the parent container can handle interactions for dynamically created task cards.

### Custom Data Attributes

Task cards store information using:

```html
data-id
data-status
data-category
```

and JavaScript's:

```js
element.dataset
```

API is used to access and modify these values.

## 📋 Assignment Context

This project is part of a Sheryians Coding School assignment designed to strengthen understanding of:

- Browser Rendering Pipeline
- Parsing
- Tokenization
- DOM Tree
- CSSOM Tree
- Render Tree
- Attributes vs Properties
- DOM Manipulation
- Event Handling
- Event Bubbling
- Event Capturing
- Event Delegation

The assignment requires the application to be built using HTML, CSS, and Vanilla JavaScript without frameworks or libraries.

## 👨‍💻 Author

**Ajay Soyi**

Built as part of my JavaScript and DOM practice while learning at Sheryians Coding School.
