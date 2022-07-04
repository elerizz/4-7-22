<!-- Spread: -->

scrivere una funzione che unisce le proprietà di due oggetti

const obj1 = {foo: 'bar'};
const obj2 = {name: 'Mio nome'};
// obj1 + obj2 = { foo: 'bar', name: 'Mio nome' }

Opzionale Miglioriamo la funzione e aggiungiamo una proprietà di nostra scelta. Il tutto deve essere un one-line

const obj1 = {foo: 'bar'};
const obj2 = {name: 'Mio nome'};
// obj1 + obj2 = { foo: 'bar', name: 'Mio nome', altraProp: 'value' };

<!-- Destructuring: -->

Usiamo il filter per prendere solo le stringe >= 10 caratteri da un array, usando il destructuring per prendere la length

<!-- Get/Set -->

Creiamo un oggetto shop come sotto, in cui avere una prop con get/set e:

1 leggere \_products nel getter
2 sovrascrivere \_products nel setter
3 contestualmente quando usiamo il setter mostriamo tutti i prodotti in innerHTML di body

shop.products = [{id: 1, name: 'TV', price: 40}, {id: 2, name: 'PC', price: 30}]
// -> deve mettere dentro il body: <li>TV - 40€</li><li>PC - 30€</li>

const shop = {
\_products: [],
get products() {

},
set products(val) {

}
}
