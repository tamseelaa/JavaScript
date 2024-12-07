document.addEventListener("DOMContentLoaded", function() {
  const jokeButton = document.getElementById("getJokeButton");
  jokeButton.addEventListener("click", function() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(data => {

        console.log(data.value);
      })
      .catch(error => {
        console.error("Error fetching joke:", error);
      });

  });

});