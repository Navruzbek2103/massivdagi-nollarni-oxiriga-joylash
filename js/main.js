let numbers = [1, 3, 0, 5, 0, 7, 0, 2, 0, 6, 0, 0, 87, 4];

let elContainer = document.createElement("div");
let elTitle = document.createElement("h2");
let elSubtitle = document.createElement("h3");
let elResult = document.createElement("")

function zeroEnd(num){
  let count = 0;
  let array = []
  let a = '';

  for (const item of num) {

    if(item === 0){
      count++;
      continue
    }
    array.push(item)
  }
  for(let j = 0; j < count; j++){
    array.push(0)
  }
  console.log(array.join(""));
}



zeroEnd(numbers);
