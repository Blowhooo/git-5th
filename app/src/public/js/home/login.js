'use strict';

const id = document.querySelector('#id'),
      psword = document.querySelector('#psword'),
      loginBtn = document.querySelector('button');

loginBtn.addEventListener('click', login);

function login(){
  const req = {
    id : id.value,
    psword: psword.value,
  }

  console.log(JSON.stringify(req))

  fetch('/login', {
    method : "POST",
    headers : {
      "Content-type" : "application/json"
    },
    body : JSON.stringify(req),
  })
}