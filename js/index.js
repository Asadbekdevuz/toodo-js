let elForm = document.querySelector(".form");
let elNameInput = document.querySelector(".name__input");
let elSurInput = document.querySelector(".sur__input");
let elRelInput = document.querySelector(".rel__input");
let elTelInput = document.querySelector(".tel__input");

let elList = document.querySelector(".list");

let arr = [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault()

  let person = {
    name: elNameInput.value,
    surname: elSurInput.value,
    relative: elRelInput.value,
    phone: elTelInput.value,
  }
  elNameInput.value = null;
  elSurInput.value = null;
  elRelInput.value = null;
  elTelInput.value = null;
  // console.log(person);
  arr.push(person);
  console.log(arr);
  elList.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let elItem = document.createElement("li");
    elItem.setAttribute("class", "d-flex justify-content-between align-items-center list-group-item list-group-item-primary"); 

    elItem.innerHTML = `<span>${arr[i].name} </span> <span>${arr[i].surname}</span> <span>${arr[i].relative}</span> <a href="tel:+998991103510">${arr[i].phone}</a> <button type= "button" class="btn btn-danger">delete</button> `;
    elList.appendChild(elItem);
  }

  console.log(person.name);

})


