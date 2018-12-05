var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];
function addElementToBeginningOfArray(array,element){
  const chocolateBars = [element,...array];
  return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(array,element){
  
}

console.log(addElementToBeginningOfArray(chocolateBars,'babe ruth'));




