let operators= document.querySelectorAll("#operator")
let fakeoperator= document.querySelectorAll("#fakeoperator")
let plus =document.querySelector('.plus')
let numbers= document.querySelectorAll("#number")
let input= document.querySelector(".result")

let  a=0 
const obj={
    previousvalue: input.innerHTML,
    nextvalue:0,
    operation:"",
    check: false
}
console.log(obj.nextvalue)

operators.forEach(item=>{
 item.addEventListener('click',  function calculate(){
    if (item.innerHTML=='+'){
       Sum()
obj.check=true
    }
    // if (item.innerHTML=='x'){
    //     Sum()
    //  }
    //  if (item.innerHTML=='-'){
    //     Sum()
    //  }
    //  if (item.innerHTML=='+'){
    //     Sum()
    //  }

    //  if (item.innerHTML=='='){
    //     Sum()
    //  }
    
console.log(item.innerHTML)
 })})

numbers.forEach(element => {
    element.addEventListener('click', ()=>{
        if(obj.check){
            console.log('checked')
            obj.previousvalue= `${input.innerHTML}${element.innerHTML}`
            input.innerHTML=obj.previousvalue
        }
        else{
            Sum()
            console.log('no checked')
        }
          
    });
    })

    function Sum(){
        input.innerHTML=''
        numbers.forEach(element => {
            element.addEventListener('click', ()=>{
                // console.log(element.innerHTML)
                if(obj.previousvalue){
                obj.nextvalue= element.innerHTML}
                // console.log(obj.previousvalue)
                // console.log(obj.nextvalue)
                input.innerHTML=obj.nextvalue
                console.log(obj.previousvalue)
                console.log(obj.nextvalue)
                console.log(obj)
                // input.innerHTML= Number(obj.nextvalue)+Number(obj.previousvalue)
            
            });
            })
    }


// //fake buttons 

// fakeoperator.forEach(item=>{
//     item.addEventListener('click', ()=>{
     
//     if(item.innerHTML=='C'){
//         remove()
//     }
//    else  if(item.innerHTML=='+/-'){
//         change()
//     }
//   else   if(item.innerHTML=='.'){
// convert()    }
//     })
// })






// function remove(){
//     input.innerHTML=''
// }


// function change(){
//     if(Number(input.innerHTML)>0){
//     input.innerHTML=Number(input.innerHTML)*(-1)}

//   else  if(Number(input.innerHTML)<0){
// input.innerHTML=Number(input.innerHTML)*(-1)
// }
// }
// function convert(){
//     // let result Number(input.innerHTML).to
//     console.log(result)
// }









