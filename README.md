# Task Manager

A simple interactive task manager built with **HTML, CSS, and Vanilla JavaScript** as part of my JavaScript and DOM practice at Sheryians Coding School.

The project focuses on dynamically creating and managing tasks, handling user interactions, event delegation, custom data attributes, and theme switching.

## 🚀 Features

* Add tasks with a title and category
* Edit existing tasks
* Mark tasks as completed
* Delete tasks
* Dynamically create task cards using JavaScript
* Light and Dark mode
* Event delegation for task interactions
* Custom `data-*` attributes for storing task information
* No frameworks or external JavaScript libraries

## 🛠️ Built With

* HTML5
* CSS3
* Vanilla JavaScript
* DOM APIs

## 🔗 Links

[Live Demo](https://ajay-soyi.github.io/Task-Manager/) • [Repository](https://github.com/Ajay-Soyi/Task-Manager)

## 📂 Project Structure

```text
Task Manager/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🧠 What I Practiced

While building this project, I worked with:

* DOM manipulation
* `createElement()` and `createTextNode()`
* `append()`, `appendChild()`, `prepend()` and `remove()`
* `addEventListener()`
* Event bubbling
* Event delegation
* Custom `data-*` attributes
* The `dataset` API
* DOM properties vs HTML attributes
* Form handling
* Dynamic class manipulation
* Light/Dark theme switching

### Event Delegation

Instead of attaching separate event listeners to every task button, the project uses a single listener on the task container.

```js
tasksContainer.addEventListener("click", (e) => {
    // Handle Edit, Complete and Delete
});
```

This allows interactions with dynamically created task cards to be handled from their parent container.

### Custom Data Attributes

Each task card stores information using attributes such as:

```html
data-id
data-status
data-category
```

JavaScript's `dataset` API is then used to access and update these values.

## 📚 Assignment

This project was created as part of a **Sheryians Coding School JavaScript/DOM assignment**.

The assignment helped me practice concepts including:

* DOM and CSSOM
* Browser rendering
* Attributes and properties
* DOM manipulation
* Event handling
* Event bubbling and capturing
* Event delegation

## 👨‍💻 Author

**Ajay Soyi**

B.Tech CSE graduate currently learning and building with JavaScript and web technologies.
