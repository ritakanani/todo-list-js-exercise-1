// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title, description) {
//   taskTitles.push(title);
//   taskDescriptions.push(description);
//   taskComplete.push(false);
// }

// // (newTask("Clean Cat Litter"));
// // (newTask("Do Laundry"));
// // console.log(taskTitles); // print ["Clean Cat Litter", "Do Laundry"]
// // console.log(taskComplete);  // print [false, false]

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }
// // completeTask(0);
// // console.log(taskComplete); // print [true, false]

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// // // DRIVER CODE BELOW

// (newTask("Clean Cat Litter")); // task 0
// (newTask("Do Laundry")); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed

/******************************* First things first, let's get rid of all those arrays and use an object to keep track of the state: *************/

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false
  };
  return task;
}

// DRIVER CODE BELOW

// const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
// const task2 = newTask("Do Laundry", "😨");
// const tasks = [task1, task2];

// for now, let's just make sure we see our tasks
// console.log(tasks);
/* output: [
              {
                title: 'Clean Cat Litter',
                description: 'Take all the 💩 out of the litter box',
                complete: false
              },
              { title: 'Do Laundry', description: '😨', complete: false }
            ]
*/

///// Update your two functions and driver code like so: /////

// // prints out the provided task's details
// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }
// // logTaskState(task1); // Clean Cat Litter has not been completed

// // marks the provided task as completed
// function completeTask(task) {
//   task.complete = true;
// }
// completeTask(task1);  // which is make only task1 true for complete key. After invoke again logTaskState(task1)
// logTaskState(task1); // Clean Cat Litter has been completed

//// Turn the 2 task functions into task object methods, like so: ////

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE CHANGES BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

// or //

task2.logState(); // Clean Cat Litter has not been completed
task2.markCompleted();
task2.logState(); // Clean Cat Litter has been completed
