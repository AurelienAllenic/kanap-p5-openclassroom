//On commence par afficher les éléments du localStorage
let multipleProducts = [];
let cart = JSON.parse(localStorage.getItem("products"));
let multipleQuantity = [];

console.log(cart);

const displayCart = async () => {
  console.log("test");
  if (cart) {
    await cart;
    console.log(cart);
    cart__items.innerHTML = cart.map(
      (product) => `<article class="cart__item" data-id="${
        product._id
      }" data-color="${product.color}">
    <div class="cart__item__img">
      <img src="${product.imageUrl}" alt="${product.altTxt}">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${product.name}</h2>
        <p>${product.color}</p>
        <p>${product.price.toString().replace(/00/, "")}€</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${
            product.quantity
          }">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem" data-id="${product._id}" data-color="${
        product.color
      }" data-quantity="${product.quantity}">Supprimer</p>
        </div>
      </div>
    </div>
  </article>
</section>
  <p>`
    );
    removeProduct();
  }
};

displayCart();
// fonction qui permet de supprimer un produit de la page panier
const removeProduct = async (displayCart) => {
  await displayCart;
  console.log("test de la fonction");

  let items = document.getElementsByClassName("deleteItem");
  console.log(items);
  let cartLength = cart.length;
  for (let item of items) {
    item.addEventListener("click", () => {
      if (cartLength == 1) {
        return (
          localStorage.removeItem("products"),
          console.log("panier vidé"),
          location.reload()
        );
      } else {
        multipleProducts = cart.filter((el) => {
          if (item.dataset.id != el._id || item.dataset.color != el.color) {
            return true;
          }
        });
        console.log(multipleProducts);
        localStorage.setItem("products", JSON.stringify(multipleProducts));
        console.log("remove du produit");
      }
      location.reload();
    });
  }
};

const addQuantity = async (displayCart) => {
  await displayCart;
  let quantitySelectors = document.querySelectorAll(".itemQuantity");
  // quantitySelectors.forEach((element) => {
  quantitySelectors.forEach((element) => {
    element.addEventListener("change", (event) => {
      console.log(event);
      alert("new value : " + element.value);

      console.log(
        element.parentNode.parentNode.parentNode.parentNode.dataset.id
      );

      //cart = "toto";
      //localStorage.setItem("products", JSON.stringify(cart));

      for (i = 0; i < cart.length; i++) {
        // alert("cart[i]._id" + cart[i]._id);
        // alert("element.dataset.id" + element.dataset._id);
        alert(
          'new value (à mettre à jour dans le "product") : ' + element.value
        );
        let datasetIdOfHtmlElement =
          element.parentNode.parentNode.parentNode.parentNode.dataset.id;
        let datasetColorOfHtmlElement =
          element.parentNode.parentNode.parentNode.parentNode.dataset.color;
        alert(
          "verif de la cond : " + cart[i]._id == datasetIdOfHtmlElement &&
            cart[i].color == datasetColorOfHtmlElement
        );
        if (
          cart[i]._id == datasetIdOfHtmlElement &&
          cart[i].color == datasetColorOfHtmlElement
        ) {
          cart[i].quantity = element.value;
          localStorage.setItem("products", JSON.stringify(cart));
          // (document.querySelectorAll(".data-quantity")[i].textContent =
          //   cart[i].quantity)
          // P e ici refresh la page
          //location.reload();
        }
      }
    });
  });
};
addQuantity();
