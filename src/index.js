//: Imports
import generateJoke from "./generateJoke";
import "./styles/main.scss"
import lauginh from './assets/emoji-laugh.svg'

//: selecting the image to display the svg
const laughImg = document.getElementById('laughImg');
laughImg.src = lauginh

//: selection of the button to generate the jokes
const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()