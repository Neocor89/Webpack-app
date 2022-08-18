//: Import of axios
import axios from "axios";

//: Configuring the API call
function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }
  axios.get('https://icanhazdadjoke.com', config).then((res) => {
    document.getElementById('joke').innerHTML = res.data.joke
    
  })
}

export default generateJoke;