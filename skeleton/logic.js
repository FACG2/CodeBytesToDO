// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd
// var todo = new Object();
// var todos= [];

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;
    function incrementCounter() {
      return (idCounter += 1);
    }
    return incrementCounter;
  })(),

  addTodo: function(todos, newTodo) {
    newTodo.id = todoFunctions.generateId();
    newTodo.state= false;
    var newtodos= todos.concat(newTodo);
    return newtodos;
  },

  markTodo: function(todos, idToMark) {
    return todos.map(function (todo) {
       var newTodo = Object.assign({}, todo);
        // console.log(todo);
        if (idToMark === newTodo.id){
          if (newTodo.state === false){
          newTodo.state = true;}

           else newTodo.state = false;
        }
      return newTodo;}
    );
 },

  deleteTodo: function(todos, idToDelete) {
    // should leave the input argument todos unchanged
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter
    if(idToDelete === undefined || typeof idToDelete === 'string')
      return "todo not found";

    var updatedTodos = todos.filter(function(todo){
      return todo.id !== idToDelete;
     });
    return updatedTodos;
  },

  sortTodos: function(todos, sortFunction) {
    var sortedTodos = sortFunction(todos);
    return sortedTodos;
  },

  editTodo: function(todos, idToUpdate, newDescription){
    return todos.map(function(todo){
      if(idToUpdate === todo.id){
        todo.description = newDescription;
      }
      return todo;
    });
  }
};

// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
