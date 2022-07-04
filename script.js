// SPREAD

const obj1 = {
  foo: "bar",
};

const obj2 = {
  name: "Mio nome",
};

const unifiedObj = (a, b) => {
  return { ...a, ...b };
};

console.log(unifiedObj(obj1, obj2));

// 2. Opzionale
const unifiedObj2 = (a, b, words) => {
  return { ...a, ...b, words };
};

console.log(
  unifiedObj2(
    obj1,
    obj2,
    (unifiedObj2.string = "Si sta come d'autunno sugli alberi le foglie")
  )
);

// DESTRUCTURING

const stringAboveTen = [
  "khbsfjnòonòomomomcd",
  "lorem",
  "Eleonora Rizzitello",
  "Pippo",
].filter((name) => {
  return name.length > 10;
});

console.log(stringAboveTen);

// GET/SET

let shop = {
  _products: [
    { id: 1, name: "TV", price: 500 },
    { id: 2, name: "cable", price: 20 },
  ],
  get getProducts() {
    return this._products;
  },
  set setProducts(value) {
    this._products = [...this._products, value];
  },
};

console.log(shop.getProducts);
shop.setProducts = { id: 3, name: "MacBook", price: 2500 };
shop.setProducts = { id: 4, name: "Smartphone", price: 550 };
console.log(shop.getProducts);

const body = document.querySelector("body");
body.innerHTML = `
  <h1>Lista prodotti</h1>
  <ul>
  <li class= "productCard"> <img src="https://picsum.photos/250?random=0" alt=""> <p>Codice Id ${shop.getProducts[0].id}</p>  <p> Name: ${shop.getProducts[0].name}</p> <p>Price: ${shop.getProducts[0].price}</p> </li>
  <li class= "productCard"> <img src="https://picsum.photos/250?random=1" alt=""> <p>Codice Id: ${shop.getProducts[1].id}</p>  <p> Name: ${shop.getProducts[1].name}</p> <p>Price: ${shop.getProducts[1].price}</p> </li>
  <li class= "productCard"> <img src="https://picsum.photos/250?random=2" alt=""> <p>Codice Id: ${shop.getProducts[2].id}</p>  <p> Name: ${shop.getProducts[2].name}</p> <p>Price: ${shop.getProducts[2].price}</p> </li>
  <li class= "productCard"> <img src="https://picsum.photos/250?random=3" alt=""> <p>Codice Id: ${shop.getProducts[3].id}</p>  <p> Name: ${shop.getProducts[3].name}</p> <p>Price: ${shop.getProducts[3].price}</p> </li>
  
  </ul>`;
