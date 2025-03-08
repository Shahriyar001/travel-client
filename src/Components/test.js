const numbers = [45, 4, 9, 16, 25];

function myFunction(value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
  console.log("------");
}

numbers.forEach(myFunction);
