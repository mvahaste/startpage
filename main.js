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
		if (validURL(search.value)) {
			openURL("http://" + search.value);
		} else {
			dSearch(search.value);
		}
	}
});

// Search DuckDuckGo
function dSearch(query) {
	window.location.href = "https://duckduckgo.com/?q=" + query;
}

function openURL(url) {
	window.location.href = url;
}

function validURL(str) {
	var pattern = new RegExp(
		"^(https?:\\/\\/)?" + // protocol
			"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
			"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
			"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
			"(\\#[-a-z\\d_]*)?$",
		"i"
	); // fragment locator
	return !!pattern.test(str);
}
