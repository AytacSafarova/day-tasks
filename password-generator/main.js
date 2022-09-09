let btn = document.querySelector("button")
let input = document.querySelector(".main_input")
let line = document.querySelectorAll(".line")
const upper = document.getElementById("upperCase").checked;
const lower = document.getElementById("lowerCase").checked;
const number = document.getElementById("numbers").checked;
const symbol = document.getElementById("symbols").checked;
let length = document.querySelector('.length_input')
let collaj = document.querySelectorAll('.check')
// console.log(collaj)
// collaj.forEach(item=>{
//     console.log(item)
// })
console.log('saldan')
btn.addEventListener('click', generator)
let password = ""
const keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "@#$%^&*()_+~|}{[]> password.length) "
}
  const getKey = [
    function upperCase() {
      return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function lowerCase() {
      return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function number() {
      return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
  ];
  console.log(getKey)
// function getrandom(key) {
//     return keys.keys[key][Math.floor(Math.random() * keys.keys[key].length)];
// }

//   getrandom()
function generator(e) {
    e.preventDefault()
    // if(!upper||!lower||!number||!symbol){
    //     alert("please choose one")
    //    }
    //    else{
    createpassword()
    //   }
}

// input.value= 'fdferg'
function createpassword() {
    input.textContent=password
    console.log(input.textContent)
    console.log(length.value)
    console.log(password.length)
    // input.innerHTML= 'fdferg'
    // console.log(input.textContent)
    while (length.value > password.length) {
        collaj.forEach(item => {
            if (item.checked&&item.previousElementSibling.innerHTML=='Include uppercase letters') {
                
                password += getKey[0](item)
                console.log(password)
                input.innerHTML=password
                // input.innerHTML=password
            }
         else   if (item.checked&&item.previousElementSibling.innerHTML=='Include lowercase letters') {
               
                password += getKey[1](item)
                console.log(password)
                input.innerHTML=password
                // input.innerHTML=password
            }
          else  if (item.checked&&item.previousElementSibling.innerHTML=='Include numbers') {
                console.log(item.previousElementSibling)
                password += getKey[2](item)
                console.log(password)
                input.innerHTML=password
                // input.innerHTML=password
            }
         else   if (item.checked&&item.previousElementSibling.innerHTML=='Include symbols') {
                console.log(item.previousElementSibling)
                password += getKey[3](item)
                console.log(password)
                input.innerHTML=password
                input.textContent=password
            }
       
input.value=password
           
        })
     

    }
}



