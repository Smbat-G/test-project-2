// task 1

// const button = document.getElementsByClassName('button')[0]
// const div = document.getElementsByClassName('div')[0]

// button.addEventListener('click', function(){
//     let result = div.dataset.check
//     if(result === 'true'){
//         div.dataset.check = 'false'
//     }else{
//         div.dataset.check  = 'true'
//     }
//     console.log(result);
// })

// task 2

// const button = document.getElementsByClassName('button')[0]
// const div = document.getElementsByClassName('div')[0]

// button.addEventListener('click', function(){
//     div.setAttribute('data-hide', 'true');
//     let result = div.dataset.hide
//     console.log(result);
// })

// Task 3 ?????sxal

// const button = document.getElementsByClassName("click")[0];
// const li = document.getElementsByClassName("li");

// button.addEventListener("click", function () {
//   console.log("asdasdasd");
//   for (let i = 0; i < li.length; i++) {
//     li[i].setAttribute("data-value", i);
//     console.log(li[i]);
//     console.log(li[i]);
//   }

// });

// task 4

// const button = document.getElementsByClassName("button")[0];
// const textTag = document.getElementsByClassName("test-data")[0];
// button.addEventListener("click", function () {
//   let data = textTag.getAttribute("data-hidden");
//   if (data) {
//     console.log(true);
//   } else {
//     console.log("error");
//   }
// });

// task 5

// const button = document.getElementsByClassName('button')[0]
// const input = document.getElementsByClassName('input')[0]
// const showNumber = document.getElementsByClassName('show-number')[0]

// button.addEventListener('click', function () {
//     let result = +input.value.trim()
//     for (let i = 0; i < result; i++) {
//         let num = document.createElement('p')
//         num.innerHTML = i
//         if (i % 2 === 0) {
//             num.style.color = 'red'
//         }
//         showNumber.append(num)
//     }
// })

//  1. unenq p datark teger voronq unen data-name attribut

/**
 * data-name attributi mej grvac en patahakan anunner
 * data attributi mijocov brnel bolor tegerin ev ayd tegeri vorpes innerText poxancel attributneri mej grvac anunner@
 *
 *
 *
 * 2.  uneqn 2 div teger voronq unen  hetevyal attribut@ data-number
 *      corte kan pahvac patahakan tver
 *      ev button tag
 * button tegi vra click aneluc ayd 2 tegeri attributneri arjeqner@ texerov poxel ev cuyc tal html um ayd tegeri mej
 *
 *
 * 3. unenq 3 button data-action attributov vortex grvac en hetevyal arjeqner@
 *    increment, decrement  reset
 *
 *    uneqn p tag vor@ uni data-value attribut naxnakan 0 arjeqov
 *
 *      buttonneri vra click aneluc hamapatasxanabar katarel increment kam decrement kam reset arjeq@ cuyc tal p tegi mej
 * update anel  ev arjeqq@  ev  data-value attribut@
 *
 *
 *
 * **/

// class work 1

// const button = document.querySelectorAll('[data-name]')
// for(let i = 0; i < button.length; i++){
//     let name = button[i].dataset.name
//     button[i].innerHTML = name
// }

// class work 2

// const numbers = document.querySelectorAll('[data-number]')
// const click = document.querySelector('[data-button]')

// click.addEventListener('click', function(){
//     let x = numbers[0].dataset.number
//     let y = numbers[1].dataset.number
//     let z = y

//     numbers[1].setAttribute('data-number',x)
//     numbers[0].setAttribute('data-number', z)

// })

// class work 3

// const action = document.querySelectorAll("[data-action]");

// for (let i = 0; i < action.length; i++) {
//   let buttonAction = action[i].dataset.action;
//   action[i].addEventListener("click", function () {
//     const result = document.querySelector("[data-value]");
//     let resultValue = +result.dataset.value;

//     if (buttonAction === "increment") {
//       ++resultValue;
//     }
//     if (buttonAction === "decrement") {
//       --resultValue;
//     }
//     if (buttonAction === "reset") {
//       resultValue = 0;
//     }

//     updateData(result, resultValue);
//   });
// }

// function updateData(result, value) {
//   result.setAttribute("data-value", value);
//   result.innerHTML = value;
// }

// class work 4

// const container = document.getElementsByClassName("container")[0];

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then(function (json) {
//     for (let i = 0; i < json.length; i++) {
//       const jsonItem = document.createElement("div");
//       jsonItem.innerHTML = ` <div>
//         <p>${i + 1} ${json[i].title}</p>
//         </div>`;

//       container.append(jsonItem);
//     }
//   });

// Home Work 1 ??? chi ashxatum


// const container = document.getElementsByClassName("container")[0]
// fetch("https://jsonplaceholder.typicode.com/photos")
// .then((response)=> response.json())
// .then(function(json){
//     console.log(json);
// for(let i = 0; i < json.length; i++){
//     let jsonItem = document.createElement("div");
//     console.log(jsonItem);
//     jsonItem.innerHTML =   `<img src=${json[i].url} alt="">`

//     container.appendChild(jsonItem)
// }
// })
// .catch((error) => {
//     console.log("Error fetching data:");
// });

// Home work 2/1 poqric-mec

// function bubbleSort(arr) {
//   let n = arr.length;

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) {           // ?
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// let numbers = [64, 34, 25, 12, 22, 11, 90];
// let sortedNumbers = bubbleSort(numbers);
// console.log(sortedNumbers);


// 14.05.24

const container = document.getElementsByClassName("container")[0]
fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
.then((response)=> response.json())
.then(function(json){
    console.log(json);
for(let i = 0; i < json.length; i++){
  let jsonItem = document.createElement("div");
  if(json[i].completed = true){
    jsonItem.style = 'red'
  }
    console.log(jsonItem);
    jsonItem.innerHTML =   `<p ${json[i]}></p>`

    container.appendChild(jsonItem)
}
})
.catch((error) => {
    console.log("Error fetching data:");
});