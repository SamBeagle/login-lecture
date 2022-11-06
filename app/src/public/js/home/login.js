"use strict";

const id = document.querySelector("#id"),
psword = document.querySelector("#psword"),
loginBtn =document.querySelector("button");

loginBtn.addEventListener("click",login);

function login(){
    const req = {
        id : id.value,
        psword : psword.value,
    };

    fetch("/login",{
        method: "POST",
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            
        });
}