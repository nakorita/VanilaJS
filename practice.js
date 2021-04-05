function sayHello(name, age){
    console.log(`Your name is ${name} and age is ${age}`);
}

sayHello("Vivian", 25);

const title = document.getElementById("title");
title.innerHTML = "Hi! From JS";

const name = document.querySelector("name");
name.innerText = "Hello!";

title.style.color = "red";


const title = document.querySelector("#title");

function hadleResize(){
    console.log("I have been resized")
}

window.addEventListener("resize", hadleResize);

function handleClick(){
    title.style.color = "blue";
}

title.addEventListener("click", handleClick);