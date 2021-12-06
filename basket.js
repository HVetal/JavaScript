'use strict';
let product = 0;

class Product {
    constructor(id, name, price, imageUrl) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.imageUrl = imageUrl;
    }

    /**
     * @returns {string} html-разметка для товара
     */
    getProductMarkup() {
      return `
      <div class="product">
          <div>${this.name}</div>
          <img src="${this.imageUrl}" alt="">
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
const buttonAddToCart = document.querySelectorAll('.addToCart');

buttonAddToCart.forEach(button => button.addEventListener('click', () => {
if (!event.target) {
    return;
}
document.querySelector('.basketCount').textContent = product++;
console.log('add');
}));

document.querySelector('.cartIcon').addEventListener('click', event => {
    if (document.querySelector('.popupBasket').style.display === "block") {
        document.querySelector('.popupBasket').style.display = "none";
} else {
    document.querySelector('.popupBasket').style.display = "block";
}
});

// document.querySelector('ul').addEventListener('click', event => {
//     const aTag = event.target;
//     const aTags = document.querySelectorAll('.nav-link');
//     if (aTag.tagName !== "A") {
//       return;
//     }
//     aTags.forEach(el => {
//       el.classList.remove('active');
//     });
//     aTag.classList.add('active');
//     let attrText = aTag.parentElement.dataset.text;
    
//     if (attrText === "T1") {
//       document.querySelector('div.text').textContent = panelText["T1"];
//     } else if (attrText === "X6") {
//       document.querySelector('div.text').textContent = panelText["X6"];
//     } else if (attrText === "H99") {
//       document.querySelector('div.text').textContent = panelText["H99"];
//     }
//     });

