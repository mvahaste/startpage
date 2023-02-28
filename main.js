var root = document.querySelector(":root");
var search = document.getElementById("search");

function updateSearchWidth() {
	root.style.setProperty("--search-width", Math.max(7, search.value.length + 1) + "ch");
	console.log(Math.max(8, search.value.length + 1));
}

function searchGoogle() {
	if (search.value.trim() !== "") {
		window.location.href = "https://duckduckgo.com/?q=" + search.value.trim();
	}
}
