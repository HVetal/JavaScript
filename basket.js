'use strict';

class Product {
  constructor(id, name, price, count, summa) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.count = count;
    this.summa = summa;
  }
  /**
   * @returns {string} html-разметка для товара
   */
  getProductMarkup() {
    return `
      <div class="ProductMarkup">
          <div>${this.name}</div>
          <div>${this.count}</div>
          <div>$${this.price}</div>
          <div>${this.summa}</div>
      </div>
    `;
  }
}

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
let sum = 0;
let productInCart = 0;
const products = [];
let element = 0;
for (let i = 0, parent; parent = parents[i]; i++) {
  parent.addEventListener('click', event => {
    if (event.target.className === 'addToCart') {
      document.querySelector('.basketCount').textContent = ++productInCart;
      addToCartFunc(parent.dataset.id, parent.dataset.name, parent.dataset.price, parent.dataset.count);

      //parent.dataset.count = 1;
      //sum = parent.dataset.price * count;

      //console.log(parent.dataset);
    }
  });
}
const cartWindow = document.querySelector('.popupBasket');

function addToCartFunc(id, name, price, count) {
    let productLength = products.length;
    let flag = false;
  if (productLength === 0) {
    products[0] = new Product(id, name, price, count, price);
    products[0]["count"] = Number(products[0]["count"]) + 1;
    element++;
    sum = sum + Number(products[0]["price"]);
    //cartWindow.innerHTML += products[0].getProductMarkup();
    //console.log(products);
  } else {

    for (let num = 0; num < productLength; num++) {
      if (products[num]["id"] === id) {
        products[num]["count"] = Number(products[num]["count"]) + 1;
        products[num]["summa"] = Number(products[num]["summa"]) + Number(products[num]["price"]);
        sum = sum + Number(products[num]["price"]);
        flag = true;
        //console.log(products);
       } 
    } 

    if (!flag) {
        products[element] = new Product(id, name, price, count, price);
        products[element]["count"] = Number(products[element]["count"]) + 1;
        sum = sum + Number(products[element]["price"]);
        element++;
        //break;
        //cartWindow.innerHTML += products[i].getProductMarkup();
    //     console.log(products);
      }
    }
  }


//console.log(cartWindow);
// for (const el of products) {
//     cartWindow.innertHTML = products.el;
//    }


// const cartWindow = document.querySelector('.featuredTitle');
// cartWindow.insertAdjacentText = products[1]["name"];


// function print(products) {
//   for (let key in products) {
//     return products.map(product => product.getProductMarkup());


    // console.log(products[key]);
    // return key.map(product => product.getProductMarkup());
//   }
// }
//   const attr = event.target.classList.contains(".featuredItem").dataset;
//   addToCartFunc(attr.id, attr.name, attr.price, attr.count);
// });

// function addToCartFunc(id, name, price, count) {

//   console.log(id);
//}

// }));
const basketTotal = document.querySelector('.basketTotal')
document.querySelector('.cartIcon')
document.querySelector('.cartIcon').addEventListener('click', event => {
  if (document.querySelector('.popupBasket').style.display === "block") {
    document.querySelector('.popupBasket').style.display = "none";
  } else {
    basketTotal.innerHTML = ' ';
    document.querySelector('.popupBasket').style.display = "block";
    
    for (let el of products) {
        basketTotal.insertAdjacentHTML('afterbegin', el.getProductMarkup());
    }
    //basketTotal.innerHTML += ' ';

    document.querySelector('.basketTotalValue').textContent = sum;
  }
});