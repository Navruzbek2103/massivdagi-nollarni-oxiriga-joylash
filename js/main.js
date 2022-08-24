let numbers = [1, 3, 0, 5, 0, 7, 0, 2, 0, 6, 4];

let elBody = document.querySelector("body");
let elContainer = document.createElement("div");
let elTitle = document.createElement("h2");
let elSubtitle = document.createElement("h3");
let elResult = document.createElement("p");



elContainer.appendChild(elTitle)
elContainer.appendChild(elSubtitle)
elContainer.appendChild(elResult)
elBody.appendChild(elContainer)

elContainer.style.backgroundColor = "bisque";
elContainer.style.maxWidth = "350px";
elContainer.style.width = "100%";
elContainer.style.borderRadius = "10px";
elContainer.style.padding = "10px";
elContainer.style.margin = "10px auto";
elContainer.style.display = "flex";
elContainer.style.flexDirection = "column";
elContainer.style.alignItems = "center";
elContainer.style.textAlign = "center";

elTitle.textContent = "Bu dastur massivning elementlari orasidagi 0 ni eng oxiriga qo'yib beradi";
elTitle.style.fontSize = "25px";
elTitle.style.margin = "0";


elSubtitle.textContent = "Massiv elementlari: " + numbers

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
  elResult.textContent = "Natija: " + array.join("")
}



zeroEnd(numbers)
