const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = 'Hey I\'m red';
paragraph.style.color = 'red';

container.appendChild(paragraph);

const headingThree = document.createElement('h3');
headingThree.classList.add('headingThree');
headingThree.textContent = 'I\'m a blue h3!';
headingThree.style.color = 'blue';

container.appendChild(headingThree);

const innerContainer = document.createElement('div');
innerContainer.classList.add('innerContainer');
innerContainer.style.backgroundColor = 'pink';
innerContainer.style.border = '3px solid black';

const innerParagraph = document.createElement('p');
innerParagraph.classList.add('innerParagraph');
innerParagraph.textContent = ('I\'m in a div');

const innerHeading = document.createElement('h1');
innerHeading.classList.add('innerHeading');
innerHeading.textContent = ('ME TOO!');

innerContainer.appendChild(innerParagraph);
innerContainer.appendChild(innerHeading);

container.appendChild(innerContainer);

