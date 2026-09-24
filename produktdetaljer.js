const id = new URLSearchParams(window.location.search).get("id");
console.log(id);

const endpoint = `https://kea-alt-del.dk/t7/api/products/${id}`;
const product = document.querySelector("#product");

const backbutton = document.querySelector("#backbutton");
backbutton.addEventListener("click", () => history.back());

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(element) {
  console.log(element);

  produkt.innerHTML += `<a href=produktdetaljer.html?id=${element.id}> <article class="card">
    <img src=https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp />
    
            <h2>${element.productdisplayname}</h2>
            <h3>${element.price}</h3>
            <p>${element.id}</p>
            <p>${element.productionyear}</p>
        </article></a>`;
}
