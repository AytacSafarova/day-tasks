let password = document.querySelector(".password")
let image = document.querySelector("img")
let count = 3
let arr = []
password.addEventListener('keypress', changeblur)
let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
function changeblur() {
    let value = password.value
    arr.push(value)
    console.log(arr)
    if (arr.length > 8) {
        count = count + 1
    }
    arr.forEach(item => {

        if (num.includes(item)) {
            count = count + 1
            console.log(true)
        }
        else {
            console.log(false)
        }
    })
    if (count = 1) {
        image.style.filter = "blur(10px)"
    }
    if (count = 2) {
        image.style.filter = "blur(9px)"
    }
    if (count = 3) {
        image.style.filter = "blur(6px)"
    }
}
