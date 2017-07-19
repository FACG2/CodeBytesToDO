# CodeBytesToDO
  Second Project


* ## What is main project aim ?
  Use TDD to build a ToDo App.

* ## Project main parts :
   1. Use TDD to create the logic needed to modify the ToDo list and write the tests in javascrpit `tests.js`.
   2. Render the ToDo list to the DOM.
   3. Add another features.

* ## HOW do we start ?
* ### Defining Requirement :
   through reading the user stories, we determine the basic requirement that are needed to include them in the web page.
   1. Enter new tasks.
   2. Edit the task.
   3. View the tasks as done or not.
   4. Delete any unwanted task.
   5. Compatibility with all devices and browsers.
   6. Easily read and understand the text on the website.

 * ### Plan the  main Layout and sections :
   #### Part one :  create pure functions
  For the first part of the project we created five functions using TDD, which are: 
  
     AddToDo    : add new task.
     DeleteToDo : delete existed task.
     MarkToDo   : mark the ToDo as done or not.
     SortToDo   : sort the ToDo list based on the state.
     EditToDo   : edit specific ToDo .
     

   Every pair in a team chose two function to work in and each member in the pair worked in both writing code 
   and tests. These functions are in the todoFunctions object in `logic.js.`
    
   #### Part two : use the TDD functions to build the App
   
   Inside the `dom.js` file, the following modifications are done :

   * create ToDoNode.
   Which creates the ToDo element.
   
   * Add newToDo
   Inside this function you need to create a new state with a new ToDo.
   
   * Delete the existed tasks.

   * Mark the done ToDos.
   
   * Store the session data.

   #### Part three : Add Features and styles
   Write `Html` code and `css` style and integrate them with the DOM file.
    
    

  You can visit our site from  <a href="" target="_blank">here</a> .
