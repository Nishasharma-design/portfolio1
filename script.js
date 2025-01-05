

const articleEl = document.createElement('article');
articleEl.classList.add('modal');

const headingEl = document.createElement('h3');
headingEl.textContent = 'About Project';
const paraEl = document.createElement('p');
paraEl.textContent = 'This Project displays Cafe-Menu';

articleEl.appendChild(headingEl);
articleEl.appendChild(paraEl);

const cafeDiv = document.querySelector('.Cafe-Website');
cafeDiv.appendChild(articleEl); 


const articleData = document.querySelector('.Modal-content');
const buttonClick = document.querySelector('.click-me');
const modal1 = document.querySelector('.modal1');

const aboutProject = () => {
    articleData.textContent = "Hangman is a guessing game for two or more players. One player thinks of a word, phrase, or sentence and the other(s) tries to guess it by suggesting letters or numbers within a certain number of guesses. Originally a paper-and-pencil game, there are now electronic versions.";
}

buttonClick.addEventListener('click', () => {
    aboutProject();
    modal1.classList.add('active');
})

const close = document.querySelector('.close');

close.addEventListener('click', () => {
    modal1.classList.remove('active');
})








