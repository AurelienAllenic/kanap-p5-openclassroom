let Products = [];

const productDisplay = async () => {
  fetch("http://localhost:3000/api/products") // Récupérer les données avec fetch
    .then((res) => res.json())
    .then((promise) => {
      Products = promise;
      console.log(Products);
      let numberProducts = Products.length;
      let productsHtml = ``;
      for (let i = 0; i < numberProducts; i++) {
        // Afficher les données récupérées avec une boucle for
        productsHtml += `<a href="./product.html?id=${Products[i]._id}">
            <article>
              <img src="${Products[i].imageUrl}" alt="${Products[i].altTxt}"/>
              <h3 class="productName">${Products[i].name}</h3>
              <p class="productDescription">${Products[i].description}</p>
            </article>
          </a>`;
      }
      console.log("ici", productsHtml);

      document.getElementById("items").innerHTML = productsHtml;
      console.log(`${Products}`);
    });

  let ahref = document.getElementsByTagName("article");
  let numberahref = ahref.length;
  console.log(ahref);
  for (let i = 0; i < numberahref; i++) {
    ahref.forEach((ahref) => {
      ahref.addEventListener("click", () => {
        innerHTML.ahref(`<a href="./product.html?id=${Products[i]._id}">`);
      });
    });
  }
};

productDisplay();
console.log(Products);
