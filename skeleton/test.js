var test = require('tape');
var todoFunctions= require('./logic');

test('Example test', function(t) {
  var actual =  todoFunctions.addTodo([],{description:'make'});
  var expected = [{description:"make",id:1,state:false}];
  t.deepEqual(actual, expected, 'Should return new array');
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

  // console.log(newone);
});
