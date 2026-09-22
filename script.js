const endpoint = "https://kea-alt-del.dk/t7/api/products";
const liste = document.querySelector(".liste");

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(json) {
  console.log(json);
  json.forEach((element) => {
    liste.innerHTML += `<article class="card">
    <img src=https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp />
    
            <h2>${element.productdisplayname}</h2>
            <h3>${element.price}</h3>
            <p>${element.id}</p>
            <p>${element.productionyear}</p>
        </article>`;
  });
}
