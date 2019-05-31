var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var i = { itemName: item, itemPrice: Math.floor(Math.random() * 99) + 1}
 cart.push(i)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length===0) {
    return "Your shopping cart is empty."
  } else {
    var str = "In your cart, you have "
    for (let i = 0; i < cart.length; i++) {
      str = str + `${i === 0 ? '' : ', and '}${cart[i]["itemName"]} at \$${cart[i]["itemPrice"]}`
    }
    str = str + '.'
    return str
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
