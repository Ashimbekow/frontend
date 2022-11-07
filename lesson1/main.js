const button = document.querySelector(".button")
const inputPhone = document.querySelector(".phoneInput")

let regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/  


button.addEventListener('click', ()=>{
  if(regExp.test(inputPhone.value)){
    alert("Все успешно"); 
  }else
   alert("Ошибка");
})


const pasportINN = document.querySelector(".pasportINN")
const buttonPasport = document.querySelector(".buttonPasport")

const INNRegExp = /^[1|2]\d{13}$/;

buttonPasport.addEventListener("click", ()=>{
  if(INNRegExp.test(pasportINN.value)){
      alert("Все успешно"); 
      }else
      alert("Пожалуйста введите корректно");
    })
























