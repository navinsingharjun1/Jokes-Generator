import { useEffect, useState } from "react"
import "./Joke.css"

function Joke () {

const [joke, setJokeApi ] = useState("")
    const fetchApi = () => {
                fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((response) => response.json())
            .then((data) => setJokeApi(data.joke))
    
    };

    return (
        <div className="joke">
           <h2> Joke Generator Using React and Joke API </h2>
           <button onClick={fetchApi}> Click to generate a Joke!</button>
        <p> { joke}</p>

        </div>
    )
}

export default Joke