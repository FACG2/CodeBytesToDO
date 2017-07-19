var test = require('tape');
var todoFunctions = require('./logic');

test('Example test', function(t) {
  var actual =  todoFunctions.addTodo([{id:0,description:"sdhfbsd", state:false}],{description:'make'});
  var expected = [{id:0,description:"sdhfbsd", state:false},{description:"make",id:1,state:false}];
  t.deepEqual(actual, expected, 'Should return new array');
  t.end();
}

test('Example test', function(t) {
  var actual = todoFunctions.deleteTodo([{id:0, description: "todo 1", done: false}, {id:1, description: "todo 2", done: true}], 1);
  var expected = [{id:0, description: "todo 1", done: false}];
  t.deepEqual(actual, expected, "To-Do Not Deleted");
  t.end();
});

test('Example test', function(t) {
  var actual = todoFunctions.deleteTodo([{id:0, description: "todo 1", done: false}, {id:1, description: "todo 2", done: true}], -1);
  var expected = [{id:0, description: "todo 1", done: false}, {id:1, description: "todo 2", done: true}];
  t.deepEqual(actual, expected, "ID Not found");
  t.end();
});

test('Example test', function(t) {
  var actual = todoFunctions.deleteTodo([{id:0, description: "todo 1", done: false}, {id:1, description: "todo 2", done: true}], undefined);
  var expected = "todo not found";
  t.deepEqual(actual, expected, "ID undefined");
  t.end();
});

test('Example test', function(t) {
  var actual = todoFunctions.deleteTodo([{id:0, description: "todo 1", done: false}, {id:1, description: "todo 2", done: true}], "1");
  var expected = "todo not found";
  t.deepEqual(actual, expected, "ID type is String");
  t.end();
});

test('Example test', function(t){
  var array = [{id:1, description: "todo 1", done: true}, {id:0, description: "todo 2", done: false}];
  var actual = todoFunctions.sortTodos(array
  ,function(array){
      return array.sort(function(a, b){
        if(!a.done) return -1;
        else return 1;
      });
    });

  var expected = [{id:0, description: "todo 2", done: false}, {id:1, description: "todo 1", done: true}];
  t.deepEqual(actual , expected , "The Array Should be sorted");
  t.end();
});

test('Example test', function(t){
  var array = [{id:1, description: "todo 1", done: true},
              {id:0, description: "todo 2", done: false},
              {id:2, description:"todo 3", done: false},
              {id:3, description: "todo 4", done: true}];
  var actual = todoFunctions.sortTodos(array
  ,function(array){
      return array.sort(function(a, b){
        if(!a.done) return -1;
        else return 1;
      });
    });

  var expected = [{id:0, description: "todo 2", done: false},
                  {id:2, description:"todo 3", done: false},
                  {id:3, description: "todo 4", done: true},
                  {id:1, description: "todo 1", done: true}];
  t.deepEqual(actual , expected , "The Array Should be sorted");
  t.end();
});


test('Example test', function(t){
  var array = [{id:0,description:  "todo 0", done: true},
              {id:1, description:  "todo 1", done: true},
              {id:2, description:  "todo 2", done: false},
              {id:3, description:  "todo 3", done: true},
              {id:4, description:  "todo 4", done: false}];
  var actual = todoFunctions.sortTodos(array
  ,function(array){
      return array.sort(function(a, b){
        if(!a.done) return -1;
        else return 1;
      });
    });

  var expected = [{id:2, description: "todo 2", done: false},
                  {id:4, description:"todo 4", done: false},
                  {id:3, description: "todo 3", done: true},
                  {id:1, description: "todo 1", done: true},
                  {id:0, description:"todo 0", done: true}];
  t.deepEqual(actual , expected , "The Array Should be sorted");

  t.end();
});

test('Example test', function(t) {
  var old=[{description:"make",id:1,state:true},{description:"make",id:2,state:false}];
  var newone=[{description:"make",id:1,state:true},{description:"make",id:2,state:true}];
  console.log(old);
  var actual =  todoFunctions.markTodo(old,2);
  var expected = newone;
  console.log(newone);
  console.log(old);
  t.deepEqual(actual, expected, 'True');
  t.end();
});
