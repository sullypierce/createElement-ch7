const articleRef = document.querySelector("#messages");

const messageOne = document.createElement('section');
messageOne.className = "messages";
messageOne.textContent = "Hi"

const messageTwo = document.createElement('section');
messageTwo.className = "messages";
messageTwo.textContent = "How are you"

const messageThree = document.createElement('section');
messageThree.className = "messages";
messageThree.textContent = "I am well how are you"

const messageFour = document.createElement('section');
messageFour.className = "messages";
messageFour.textContent = "I am well as well"

const messageFive = document.createElement('section');
messageFive.className = "messages";
messageFive.textContent = "Good, all is well"


articleRef.appendChild(messageOne);
articleRef.appendChild(messageTwo);
articleRef.appendChild(messageThree);
articleRef.appendChild(messageFour);
articleRef.appendChild(messageFive);