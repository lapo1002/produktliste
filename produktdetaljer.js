const id = new URLSearchParams(window.location.search).get("id");
console.log(id);

const endpoint = `https://kea-alt-del.dk/t7/api/products/${id}`;
const produkt = document.querySelector("#produkt");

const backbutton = document.querySelector("#backbutton");
backbutton.addEventListener("click", () => history.back());

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(element) {
  console.log(element);

  produkt.innerHTML = `
    <article class="card">

      <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="${element.productdisplayname}">

      <div class="produktinfo">
        <h2>${element.brandname}</h2>

        <h1>${element.productdisplayname}</h1>

        <p class="price">${element.price} kr.</p>

        <p class="category">${element.subcategory}</p>

        <p class="description">${element.description}</p>

        <button class="buybutton">Læg i kurv</button>
      </div>

    </article>
  `;
}
