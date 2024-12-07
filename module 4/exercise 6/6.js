document.addEventListener("DOMContentLoaded", function() {
  const jokeButton = document.getElementById("JokeButton");
  const searchForm = document.getElementById("searchForm");
  const jokes = document.getElementById("jokes");

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

  searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const query = document.getElementById("searchQuery").value.trim();

    if (query === "") {
      console.log("Please enter a valid search term.");
      return;
    }

    fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
      .then(response => response.json())
      .then(data => {
        jokes.innerHTML = "";
        if (data.result.length === 0) {
          jokes.innerHTML = "<p>No jokes found for that search term.</p>";
        } else {
          data.result.forEach(joke => {
            jokes.innerHTML += `<article><p>${joke.value}</p></article>`;
          });
        }
      })
      .catch(error => {
        console.error("Error fetching jokes:", error);
      });
  });
});