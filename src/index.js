import generateJoke from "./generateJoke";
import "./styles/main.scss"
import lauginh from './assets/emoji-laugh.svg'

const laughImg = document.getElementById('laughImg');
laughImg.src = lauginh

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()