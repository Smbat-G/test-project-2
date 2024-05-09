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

// const button = document.getElementsByClassName('button')[0]
// const li = document.getElementsByClassName('li')

// button.addEventListener('click', function(){
// for(let i = 0; i < li.length; i++){
//     li[i].setAttribute('data-value', 'index')
//     li[i].getAttribute('data-value');
// }
// console.log(li[i]);
// })




// task 4

// const button = document.getElementsByClassName('button')[0]
// button.addEventListener('click', function(){
//     let data = button.getAttribute('data-hidden')
//     if(data){
//         console.log(data-hidden);
//     }else{
//         console.log('error');
//     }
// })




// task 5

const button = document.getElementsByClassName('button')[0]
const input = document.getElementsByClassName('input')[0]
const showNumber = document.getElementsByClassName('show-number')[0]

button.addEventListener('click', function () {
    let result = +input.value.trim()
    for (let i = 0; i < result; i++) {
        let num = document.createElement('p')
        num.innerHTML = i
        if (i % 2 === 0) {
            num.style.color = 'red'
        }
        showNumber.append(num)
    }
})









