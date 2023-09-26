const cartModal = document.getElementById("cartModal");
const cartList = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const closeCartModalHandler = document.getElementById("closeModal");
const shoppingCartButton = document.querySelector(".shoppingcart");
const addButtons = document.querySelectorAll(".cart");

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
    updateCartModalContent(button.closest(".card"));
  });
}
let total = 0;

let updateCartModalContent = (carte) => {
  let listItem = document.createElement("li");
  let cartName = carte.querySelector(".content>.titre").innerText;
  let cartPrice = carte.querySelector(
    ".content>.body>.underPict>.prix>.priceOnly"
  ).innerText;
  listItem.innerText = `${cartName} + ${cartPrice}`;
  cartList.appendChild(listItem);
  total += parseInt(cartPrice);
  cartTotal.textContent = total;
};
