document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const query = document.getElementById("query").value.trim();

    if (query === "") {
      console.log("Please enter a valid TV series name.");
      return;
    }

    const url = `https://api.tvmaze.com/search/shows?q=${query}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {

        if (data.length === 0) {
          console.log("No TV series found for that search.");
        } else {
          console.log("Search Results:", data);
        }
      })
      .catch(error => {
        console.error("Error fetching data from TVMaze API:", error);
      });
  });

});