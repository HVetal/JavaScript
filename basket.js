'use strict';
let product = 0;

class Product {
  constructor(id, name, price, count) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.count = count;
  }

  /**
   * @returns {string} html-разметка для товара
   */
  getProductMarkup() {
    return `
      <div class="product">
          <div>${this.name}</div>
        //   <img src="${this.count}" alt="">
          <div>Цена: <span>${this.price}</span> р.</div>
          <a href="https://example.com/producs/${this.id}">Подробнее</a>
      </div>
    `;
  }
}

const products = {
  productEls: [
    new Product(1, "ELLERY X M'O CAPSULE 1", 12.00, "images/featured/1.jpg"),
    new Product(2, "ELLERY X M'O CAPSULE 2", 22.00, "images/featured/2.jpg"),
    new Product(3, "ELLERY X M'O CAPSULE 3", 32.00, "images/featured/3.jpg"),
    new Product(4, "ELLERY X M'O CAPSULE 4", 42.00, "images/featured/4.jpg"),
    new Product(5, "ELLERY X M'O CAPSULE 5", 52.00, "images/featured/5.jpg"),
    new Product(7, "ELLERY X M'O CAPSULE 6", 62.00, "images/featured/6.jpg"),
  ]
};

//   const productsEl = document.querySelector('.products');
//   document.querySelector('header').addEventListener('click', event => {
//     if (event.target.classList.contains('.menuButton')) {
//       return;
//     }
//     productsEl.innerHTML = products[event.target.dataset.type]
//       .map(product => product.getProductMarkup()).join('');
//   });
// const buttonAddToCart = document.querySelectorAll('.addToCart');
// const basketWindow = document.querySelectorAll('.popupBasket');
// buttonAddToCart.forEach(button => button.addEventListener('click', event => {
//   if (!event.target) {
//     return;
//   }
document.querySelector('.featuredItems').addEventListener('click', event => {
  if (event.target.tagName !== "BUTTON") {
    return;
  }
  document.querySelector('.basketCount').textContent = ++product;
  // for (const attr of event.target.parentElement.parentElement.parentElement.dataset) {
  //   console.log(attr);
  // }
  const attr = event.target.parentElement.parentElement.parentElement.dataset;
  addToCartFunc(attr.id, attr.name, attr.price, attr.count);
  //console.log(event.target.parentElement.parentElement.parentElement.dataset);
});

function addToCartFunc(id, name, price, count) {

  console.log(id);
}

// }));

document.querySelector('.cartIcon').addEventListener('click', event => {
  if (document.querySelector('.popupBasket').style.display === "block") {
    document.querySelector('.popupBasket').style.display = "none";
  } else {
    document.querySelector('.popupBasket').style.display = "block";
  }
});