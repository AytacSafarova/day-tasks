let main =document.querySelector('main')
let input = document.querySelector('input')
let url ='https://randomuser.me/api/?results=100'
let arr=[]

getdata()
// input.addEventListener('keypress', search)
async function getdata() {
        const response =  await fetch(url)
  .then(response=> response.json())
  .then(data=> {
    arr=data.results
    console.log(data.results)})
arr.forEach(element=>{
    let div = document.createElement("div")
    div.classList.add("maindiv")
    let leftdiv= document.createElement("img")
    let img = document.createElement("img")
      img.src= element.picture.thumbnail
      leftdiv.appendChild(img)
      main.appendChild(img)

})









}
 



//  async function search() {
//     const response =  await fetch(url)
// .then(response=> response.json())
// .then(data=>{
//   arr=data.results
// console.log(arr)
//     arr.forEach(element => {
//         console.log(element)
//         if(element.name.includes(input.value)){
//             console.log(element)
//         let div= document.createElement("div")
//         div.classList.add="div"
//         div.style.display='flex'
//         let textdiv= document.createElement("div")
//         textdiv.classList.add="textdiv"
//         let name= document.createElement("p")
//         let text =document.createElement("p")
//         let img = document.createElement("img")
//         img.src= element.pictures.thumbnail
//         div.append(img)
//         // text.innerText= element.quantityPerUnit
//         // name.innerHTML=element.name
//         // textdiv.appendChild(name)
//         // textdiv.appendChild(text)
//         // div.appendChild(textdiv)
//         main.appendChild(div)
//         }
    
        
  