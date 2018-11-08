function sayHi () {
  console.log("Hello, World!") ;
}

function sayHey () {
  alert("Hello, World!") ;
}

function sayHello () {
  var p = document.getElementById("hello") ;
  p.innerHTML = "Hello, World!" ;
}

function helloStranger () {
  var name = prompt("Hello stranger, what is your name?") ;
  alert("Thank you, hello " + name) ;
}
