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
          <div>${this.count} шт.</div>
          <div>$${this.price}</div>
          <div>${this.summa}</div>
      </div>
    `;
  }
}

const parents = document.querySelectorAll('.featuredItem');
let sum = 0; //стоимость всех товаров
let productInCart = 0; //число товаров в корзине
const products = []; // массив объектов товара
let element = 0; //количество разных товаров 
// ищем родителя нажатой кнопки
for (let i = 0, parent; parent = parents[i]; i++) {
  parent.addEventListener('click', event => {
    if (event.target.className === 'addToCart') {
      //если нажали по кнопке, увеличиваем количество товара в корзине
      document.querySelector('.basketCount').textContent = ++productInCart;
      // и вызываем функцию добавления товара в корзину с параметрами-атрибутами
      addToCartFunc(parent.dataset.id, parent.dataset.name,
        parent.dataset.price, parent.dataset.count);
    }
  });
}

function addToCartFunc(id, name, price, count) {
  let productLength = products.length; //количество товаров в корзине
  let flag = false; // был ли добавлен такой товар в корзину
  // добавляем первый товар в корзину
  if (productLength === 0) {
    products[0] = new Product(id, name, price, count, price);
    // ставим его количество в корзине = 1
    products[0]["count"] = Number(products[0]["count"]) + 1;
    // увеличиваем счетчик разных товаров
    element++;
    //увеличиваем общую сумму покупки
    sum = sum + Number(products[0]["price"]);
  } else {
    //если товар не первый в корзине, перебираем всю корзину
    //и смотрим, был ли такой товар в корзине
    for (let num = 0; num < productLength; num++) {
      //если такой товар уже есть в корзине
      if (products[num]["id"] === id) {
        //увеличиваем его количество на 1
        products[num]["count"] = Number(products[num]["count"]) + 1;
        //прибавляем его стоимость к "количество * цена"
        products[num]["summa"] = Number(products[num]["summa"]) +
          Number(products[num]["price"]);
        // увеличиваем общую стоимость всей корзины
        sum = sum + Number(products[num]["price"]);
        //ставим флаг, что такой товар уже есть и новый создавать не надо
        flag = true;
      }
    }
    //если такого товара еще нет в корзине
    if (!flag) {
      //добавляем новый товар в корзину
      products[element] = new Product(id, name, price, count, price);
      //ставим его количество в корзине = 1
      products[element]["count"] = Number(products[element]["count"]) + 1;
      //увеличиваем общую стоимость всей корзины
      sum += Number(products[element]["price"]);
      // увеличиваем счетчик разных товаров
      element++;
    }
  }
}
//выбираем div, куда будем выводить содержимое корзины
const basketProductList = document.querySelector('.basketProductList');
// при клике по корзине
document.querySelector('.cartIcon').addEventListener('click', event => {
  //если окно корзины видно на экране
  if (document.querySelector('.popupBasket').style.display === "block") {
    //то убрать его
    document.querySelector('.popupBasket').style.display = "none";
  } else { //иначе, если окно корзины было скрыто
    // очистить, что выводилось в предыдущий раз
    basketProductList.innerHTML = ' ';
    //показать окно корзины
    document.querySelector('.popupBasket').style.display = "block";
    //вывести всё содержимое корзины в окно
    for (let el of products) {
      basketProductList.insertAdjacentHTML('afterbegin', el.getProductMarkup());
    }
    //вывести общую стоимость покупок
    document.querySelector('.basketTotalValue').textContent = sum;
  }
});