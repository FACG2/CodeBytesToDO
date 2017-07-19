// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('incomplete-tasks');
  var containertwo = document.getElementById('completed-tasks');
  var addTodoForm = document.getElementById('add-todo');
  var descriptionInput = document.querySelector("input[name=description]");
  var sesission = JSON.parse(sessionStorage.getItem("names"));
  // var sesission = JSON.parse(sessionStorage.getItem("data"));

  var state;
  if (sesission == null) {
    state = [];
  } else {
    state = JSON.parse(sessionStorage.getItem("names"));
  }

  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');

    // add span holding description
    todoNode.innerHTML = "<span class='description-span'>" + todo.description + "</span>";
    if (todo.state) todoNode.classList.add("marked");

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
     deleteButtonNode.innerHTML = "<i class='fa fa-trash' style='font-size: 20px;'></i>";

    //  deleteButtonNode.innerHTML = "delete";
    // you will need to use addEventListener
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });


    todoNode.appendChild(deleteButtonNode);
    var done = document.createElement('button');
    done.innerHTML = "<i class='fa fa-check' style='font-size: 20px; color: #FFF;'></i>";
    // done.innerHTML = "done";
    done.addEventListener('click', function(event) {

      // add markTodo button
      var newState = todoFunctions.markTodo(state, todo.id);
      // add classes for css
      update(newState);
      newState = todoFunctions.sortTodos(state, function(array) {
        return array.sort(function(a, b) {
          if (!a.state) return -1;
          else return 1;
        });
      });
      update(newState);
    });


    todoNode.firstElementChild.addEventListener('dblclick', function(event) {
      var str = prompt("Enter New Description:");
      var newState = todoFunctions.editTodo(state, todo.id, str);
      update(newState);
    });

    todoNode.appendChild(done);
    return todoNode;
  };


  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      //stop form from submitting
      var descriptionInput = event.target;
      var description = descriptionInput.firstElementChild.value;
      descriptionInput.firstElementChild.value = "";
      // event.target ....
      // hint: todoFunctions.addTodo
      event.preventDefault();
      var newState = todoFunctions.addTodo(state, {
        description: description
      }); // ?? change this!
      update(newState);
      newState = todoFunctions.sortTodos(state, function(array) {
        return array.sort(function(a, b) {
          if (!a.state) return -1;
          else return 1;
        });
      });
      update(newState);

    });
  }
  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
    sessionStorage.setItem("names", JSON.stringify(state));

  };
  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');
    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);

  };
  if (container) renderState(state);
})();
