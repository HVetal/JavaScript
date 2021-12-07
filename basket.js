'use strict';


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
      <div class="ProductMarkup">
          <div>${this.id}</div>
          <div>${this.name}</div>
          <div>$${this.price}</div>
          <div>${this.count}</div>
      </div>
    `;
  }
}

// const products = {
//   productEls: [
//     new Product(1, "ELLERY X M'O CAPSULE 1", 12.00, "images/featured/1.jpg"),
//     new Product(2, "ELLERY X M'O CAPSULE 2", 22.00, "images/featured/2.jpg"),
//     new Product(3, "ELLERY X M'O CAPSULE 3", 32.00, "images/featured/3.jpg"),
//     new Product(4, "ELLERY X M'O CAPSULE 4", 42.00, "images/featured/4.jpg"),
//     new Product(5, "ELLERY X M'O CAPSULE 5", 52.00, "images/featured/5.jpg"),
//     new Product(7, "ELLERY X M'O CAPSULE 6", 62.00, "images/featured/6.jpg"),
//   ]
// };

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
// document.querySelector('.featuredItems').addEventListener('click', event => {
//   if (event.target.classList.contains(".addToCart")) {
//     return;
//   }
//   document.querySelector('.basketCount').textContent = ++product;
  // for (const attr of event.target.parentElement.parentElement.parentElement.dataset) {
  //   console.log(attr);
  // }
  //const attr = document.querySelectorAll('.featuredItem')
  const parents = document.querySelectorAll('.featuredItem');
  const sum = 0;
  let productCart = 0;
  let products = [];
  for (let i = 0, parent; parent = parents[i]; i++) {
    parent.addEventListener('click', event => {
      if (event.target.className === 'addToCart') {
        document.querySelector('.basketCount').textContent = ++productCart;
        parent.dataset.count = 1;
        //sum = parent.dataset.price * count;
        addToCartFunc(parent.dataset.id, parent.dataset.name, parent.dataset.price, parent.dataset.count, productCart);


        //console.log(parent.dataset);
      }
    });
  }
  const cartWindow = document.querySelector('.popupBasket');
function addToCartFunc(id, name, price, count, i) {
  products[i] = new Product(id, name, price, count); 
  cartWindow.innerHTML += products[i].getProductMarkup();
  //console.log(products);
}

//console.log(cartWindow);
// for (const el of products) {
//     cartWindow.innertHTML = products.el;
//    }


// const cartWindow = document.querySelector('.featuredTitle');
// cartWindow.insertAdjacentText = products[1]["name"];
 function print (products) {
 for (let key in products) {
    return products.map(product => product.getProductMarkup());
    // console.log(products[key]);
// return key.map(product => product.getProductMarkup());
}}
//   const attr = event.target.classList.contains(".featuredItem").dataset;
//   addToCartFunc(attr.id, attr.name, attr.price, attr.count);
// });

// function addToCartFunc(id, name, price, count) {

//   console.log(id);
//}

// }));

document.querySelector('.cartIcon').addEventListener('click', event => {
  if (document.querySelector('.popupBasket').style.display === "block") {
    document.querySelector('.popupBasket').style.display = "none";
  } else {
    document.querySelector('.popupBasket').style.display = "block";
  }
});