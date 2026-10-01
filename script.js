const cat = new URLSearchParams(window.location.search).get("cat");
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${cat}&limit=30`;

const liste = document.querySelector(".liste");

document.querySelectorAll("#filtre button").forEach((knap) => knap.addEventListener("click", filtre));
document.querySelectorAll("#sortering button").forEach((knap) => knap.addEventListener("click", sorter));

function filtre(e) {
  console.log(e.target.textContent); //hvad står der i den knap der bliver klikket på?
  console.log(alleData, udsnit);

  const valgt = e.target.textContent;
  if (valgt == "Alle") {
    udsnit = alleData;
  } else {
    udsnit = alleData.filter((produkt) => produkt.gender == valgt);
  }
  visData(udsnit);
}

let alleData, udsnit;

function sorter(e) {
  const valgt = e.target.textContent;
  if (valgt == "Pris lav-høj") {
    udsnit.sort((a, b) => a.price - b.price);
  } else if (valgt == "Pris høj-lav") {
    udsnit.sort((a, b) => b.price - a.price);
  } else if (valgt == "A-Z") {
    udsnit.sort((a, b) => a.productdisplayname.localeCompare(b.productdisplayname));
  } else if (valgt == "Z-A") {
    udsnit.sort((a, b) => a.productdisplayname.localeCompare(a.productdisplayname));
  }
  console.log(valgt);
  visData(udsnit);
}

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    alleData = udsnit = data;
    visData(data);
  });

const h2 = document.querySelector("h2");
h2.textContent = cat;

const visantal = document.querySelector("#filtre span");

function visData(json) {
  visantal.textContent = json.length;

  // console.log(json);

  liste.innerHTML = "";

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
