const cat = new URLSearchParams(window.location.search).get("cat");
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${cat}`;

const liste = document.querySelector(".liste");

const h2 = document.querySelector("h2");
h2.textContent = cat;

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(json) {
  console.log(json);
  json.forEach((produkt) => {
    const tilbudspris = Math.round(produkt.price - (produkt.price * produkt.discount) / 100);

    liste.innerHTML += `<a href=produktdetaljer.html?id=${produkt.id} class=${produkt.soldout ? "udsolgt" : ""}> 
    <article class="card">
    <img src=https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp />
     ${produkt.soldout ? '<span class="soldout-label">UDSOLGT</span>' : ""}
    
            <h2>${produkt.brandname}</h2>
            <h3>${produkt.productdisplayname}</h3>



           


            ${produkt.discount ? `<p class='tilbudslabel'>- ${produkt.discount}%</p><p>Før ${produkt.price} kr</p><p>Nu ${tilbudspris} kr</p>` : `<p>${produkt.price} kr</p>`}


            <p>${produkt.subcategory}</p>
        </article></a>`;
  });
}
