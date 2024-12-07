document.addEventListener("DOMContentLoaded", function() {
  const searchForm = document.getElementById("searchForm");
  const results = document.getElementById("results");

  searchForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const query = document.getElementById("query").value.trim();

    if (query === "") {
      console.log("Please enter a valid search term.");
      return;
    }

    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then(response => response.json())
      .then(data => {
        results.innerHTML = '';

        if (data.length === 0) {
          results.innerHTML = "<p>No results found.</p>";
          return;
        }

        data.forEach(item => {
          const tvShow = item.show;

          const article = document.createElement("article");

          const name = document.createElement("h2");
          name.textContent = tvShow.name;
          article.appendChild(name);

          const link = document.createElement("a");
          link.href = tvShow.url;
          link.target = "_blank";
          link.textContent = "View Details";
          article.appendChild(link);

          const image = document.createElement("img");
          image.src = tvShow.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image';
          image.alt = tvShow.name;
          article.appendChild(image);

          const summary = document.createElement("div");
          summary.innerHTML = tvShow.summary || "<p>No summary available.</p>";
          article.appendChild(summary);

          results.appendChild(article);
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  });
});