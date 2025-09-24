let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(name + " added to cart!");
}

function displayCart() {
  const items = document.getElementById('cart-items');
  if (!items) return;
  if (cart.length === 0) {
    items.innerHTML = "<li>Your cart is empty.</li>";
    return;
  }
  items.innerHTML = cart.map(item => `<li>${item.name} - $${item.price}</li>`).join('');
}

function checkout() {
  window.location.href = 'checkout.html';
}

function completePurchase(event) {
  event.preventDefault();
  localStorage.removeItem('cart');
  window.location.href = 'thankyou.html';
}

displayCart();
