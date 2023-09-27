const cartModal = document.getElementById("cartModal");
const cartList = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const closeCartModalHandler = document.getElementById("closeModal");
const shoppingCartButton = document.querySelector(".shoppingcart");
const addButtons = document.querySelectorAll(".cart");

let cart = [];
let total = 0;

// Open modal
function openCartModal() {
  cartModal.style.display = "block";
  updateCartModalContent();
}

// Close modal
function closeCartModal() {
  cartModal.style.display = "none";
}

shoppingCartButton.addEventListener("click", openCartModal);
closeCartModalHandler.addEventListener("click", closeCartModal);

for (let button of addButtons) {
  button.addEventListener("click", function () {
    addToCart(button.closest(".card"));
    updateCartModalContent();
  });
}

// Add item to cart
function addToCart(carte) {
  let cartName = carte.querySelector(".content > .titre").innerText;
  let cartPrice = parseInt(
    carte.querySelector(".content > .body > .underPict > .prix > .priceOnly")
      .innerText
  );

  const existingItem = cart.find((item) => item.name === cartName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: cartName, price: cartPrice, quantity: 1 });
  }
  total += cartPrice;
  updateCartModalContent();
}

// Update the cart modal
function updateCartModalContent() {
  cartList.innerHTML = "";
  total = 0;
  cart.forEach((item, index) => {
    let listItem = document.createElement("li");
    listItem.innerText = `${item.name} - €${item.price} - Quantity: ${item.quantity}`;
    listItem.classList.add("cart_items");

    let increaseBtn = document.createElement("button");
    increaseBtn.innerText = "+";
    increaseBtn.addEventListener("click", () => {
      item.quantity += 1;
      total += item.price;
      updateCartModalContent();
    });

    let decreaseBtn = document.createElement("button");
    decreaseBtn.innerText = "-";
    decreaseBtn.addEventListener("click", () => {
      if (item.quantity > 1) {
        item.quantity -= 1;
        total -= item.price;
        updateCartModalContent();
      }
    });

    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", () => {
      removeFromCart(index);
      updateCartModalContent();
    });

    listItem.appendChild(increaseBtn);
    listItem.appendChild(decreaseBtn);
    listItem.appendChild(removeButton);
    cartList.appendChild(listItem);
    total += item.price * item.quantity;
  });

  cartTotal.textContent = total.toFixed(2);
}

// Remove button
function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
}
