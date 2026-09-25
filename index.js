const endpoint = "https://kea-alt-del.dk/t7/api/categories";
const liste = document.querySelector("#claslistcontainer");

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(json) {
  console.log(json);
  json.forEach((element) => {
    claslistcontainer.innerHTML += `<a href=produktliste.html?cat=${element.category}> ${element.category}</a>`;
  });
}
