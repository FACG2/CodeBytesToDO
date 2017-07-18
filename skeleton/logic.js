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
    // should leave the input argument todos unchanged
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
// hint: array.concat
    // newTodo = {id: 0,description: 'make eggs',done: false,}
    newTodo.id = todoFunctions.generateId();
    newTodo.state= false;
    var newtodos= todos.concat(newTodo);

    return newtodos;
  },
  // deleteTodo: function(todos, idToDelete) {
  //   // should leave the input argument todos unchanged
  //   // return a new array, this should not contain any todo with an id of idToDelete
  //   // hint: array.filter
  // },
  // markTodo: function(todos, idToMark) {
  //   // should leave the input argument todos unchanged
  //   // in the new todo array, all elements will remain unchanged except the one with id: idToMark
  //   // this element will have its done value toggled
  //   // hint: array.map
  //
  //   return todos.map(function (updateTodos,index) {
  //     console.log(index);
  //     for (var i=0; i<todos.length; i++){
  //       if (idToMark == todos[i].id){
  //         if (todos[i].state == false){
  //         todos[i].state = true;}
  //
  //          else if (idToMark == true){
  //         todos[i].state = false;}
  //       }
  //     }
  //
  //     return updateTodos;}
  //   );
  //
  // },

  markTodo: function(todos, idToMark) {


    return todos.map(function (todo) {
      var newTodo = Object.assign({}, todo);
        // console.log(todo);
        if (idToMark === newTodo.id){
          if (newTodo.state === false){
          newTodo.state = true;}

           else if (idToMark === true){
          newTodo.state = false;}
        }


      return newTodo;}
    );


 },
  // sortTodos: function(todos, sortFunction) {
  //   // stretch goal! Do this last
  //   // should leave the input arguement todos unchanged
  //   // sortFunction will have same signature as the sort function in array.sort
  //   // hint: array.slice, array.sort
  // },
};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
module.exports = todoFunctions;
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
