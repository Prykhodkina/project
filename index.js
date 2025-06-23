"use strict";

function greetUser(name) {
  return `Hello, ${name}!`;
}
const userName = prompt(`Enter your name`);
const message = greetUser(userName);
console.log(message);
