// Create a function that takes in one argument that is passed through a
// conditional statement. (For example, something like our haunted house
//   door() function.) Print some resulting text to the console. Test all of
//   your conditions to make sure you can receive all of your results back.

function oneFunc (param) {
  if (param == "yes") {
    return "the answer you seek is already known";
  } else if (param == "no") {
    return "take time to expand your pallate";
  } else {
    return "yes or no?";
  }
}

console.log(oneFunc("yes"));
console.log(oneFunc("no"));
