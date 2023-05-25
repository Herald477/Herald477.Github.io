const Joke_Button = document.getElementById("joke_button")
Joke_Button.addEventListener("click", getJoke)

const p_joke = document.getElementById("p_joke")

function getJoke(e) {
    fetch(
        `https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,explicit&type=single`,
        {
            method: "GET",
            headers: new Headers({
                Accept: "application/json"
            })
        }
    )
        .then(res => res.json())
        .then(response => {
            
            //console.log(`${response.joke}`)
            let joke = response.joke
            p_joke.innerHTML = joke;

            
        })
        .catch(error => console.log(error));
}