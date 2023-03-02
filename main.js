var search = document.getElementById("search");
var cat = document.getElementById("cat");
var cats = [];

// Get the cats from the JSON file
fetch("./cats.json")
	.then((response) => response.json())
	.then((data) => {
		cats = data.cats;
	})
	.then(() => {
		cat.innerHTML = cats[Math.floor(Math.random() * cats.length)];
	});

// Search with the enter key
search.addEventListener("keyup", function (event) {
	if (event.key == "Enter") {
		dSearch(search.value);
	}
});

// Search DuckDuckGo
function dSearch(query) {
	window.location.href = "https://duckduckgo.com/?q=" + query;
}
