// class TodoList {
//   constructor() {
//     this.todos = [];
//   }

//   addTodo() {
//     this.todos.push("New todo");
//     console.log(this.todos);
//   }
// }

/**
 * INHERITANCE
 */
class List {
  constructor() {
    this.data = [];
  }
  
  add(data) {
    this.data.push(data);
  }
}
class TodoList extends List {
  constructor() {
    super();
  }
}

const myList = new TodoList();

document.getElementById("newtodo").onclick = function () {
  // myList.addTodo();
  myList.add("New todo");
};