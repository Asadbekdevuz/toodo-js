let elForm = document.querySelector(".form");
let elNameInput = document.querySelector(".name__input");
let elSurInput = document.querySelector(".sur__input");
let elRelInput = document.querySelector(".rel__input");
let elTelInput = document.querySelector(".tel__input");

let elList = document.querySelector(".list");

let arr = [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault()
  
  const person = {
    name: elNameInput.value,
    surname: elSurInput.value,
    relative: elRelInput.value,
    phone: elTelInput.value,
  }

  elNameInput.value = null;
  elSurInput.value = null;
  elRelInput.value = null;
  elTelInput.value = null;
  
  arr.push(person);
  elList.innerHTML = "";

  arr.forEach (i => {
    let elItem = document.createElement("li");
    elItem.setAttribute("class", "d-flex justify-content-between align-items-center list-group-item list-group-item-primary"); 

    elItem.innerHTML = `<span>${i.name} </span> <span>${i.surname}</span> <span>${i.relative}</span> <a href="tel:">${i.phone}</a> <button type= "button" class="btn btn-danger">delete</button> `;
    elList.appendChild(elItem);
  })

})


