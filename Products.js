const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

let total = 0;
const cartItems = [];

const buyBtns = document.querySelectorAll(".btn");
const cartItemsList = document.getElementById("cart-items");
const totalElem = document.getElementById("total-price");

buyBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        const price = parseFloat(btn.dataset.price);
        total += price;
        totalElem.textContent = `Total: ₦${total.toFixed(2)}`;
        const item = {
            name: btn.parentNode.querySelector("h2").textContent,
            price: price
        };
        cartItems.push(item);
        renderCart();
    });
});

function renderCart() {
    cartItemsList.innerHTML = "";
    cartItems.forEach(function(item) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item.name}:</span>
            <span>      ₦${item.price.toFixed(2)}</span>
        `;
        cartItemsList.appendChild(li);
    });
}

const buyBtn = document.getElementById("buy-btn");
buyBtn.addEventListener("click", function() {
  // Store the total in localStorage
  localStorage.setItem('total', total.toFixed(2));

  // Redirect to payment page
  window.location.href = "payment.html";

  total = 0;
  cartItems.length = 0;
  renderCart();
  totalElem.textContent = "Total: ₦0.00";
});