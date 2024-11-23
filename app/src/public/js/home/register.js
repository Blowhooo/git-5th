'use strict';

const id = document.querySelector('#id'),
      name = document.querySelector('#name'),
      psword = document.querySelector('#psword'),
      confirmPsword = document.querySelector('#confirm-psword'),
      registerBtn = document.querySelector('#button');

registerBtn.addEventListener('click', register);

function register(){
  const req = {
    id : id.value,
    name : name.value,
    psword: psword.value,
    confirmPsword: confirmPsword.value,
  };

  fetch('/register', {
    method : "POST",
    headers : {
      "Content-type" : "application/json"
    },
    body : JSON.stringify(req),
  }).then(res => res.json())
  .then(res => {
    if(res.success){
      location.href = "/login"
    }else{
      alert(res.msg);
    }
  }).catch(err => console.error(new Error("로그인 오류")));
}