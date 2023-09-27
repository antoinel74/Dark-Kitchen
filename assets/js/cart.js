const cartModal = document.getElementById("cartModal");
const cartList = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const closeCartModalHandler = document.getElementById("closeModal");
const shoppingCartButton = document.querySelector(".shoppingcart");
const addButtons = document.querySelectorAll(".cart");
const total_count = document.querySelector(".total_count"); // Sélectionnez la span pour le nombre total d'articles

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
  button.addEventListener(
    "click",
    function () {
      addToCart(button.closest(".card"));
      updateCartModalContent();
    },
    { once: true }
  );
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
  const cartTable = document.getElementById("cartTable");
  const cartBody = document.getElementById("cartItems");
  cartBody.innerHTML = "";
  let updatedTotal = 0; // Initialiser le total à l'extérieur de la boucle

  cart.forEach((item, index) => {
    let row = cartBody.insertRow();
    let productNameCell = row.insertCell(0);
    let priceCell = row.insertCell(1);
    let quantityCell = row.insertCell(2); // Cellule pour la quantité
    let totalCell = row.insertCell(3);
    let actionsCell = row.insertCell(4);

    productNameCell.innerText = item.name;
    priceCell.innerText = `€${item.price.toFixed(2)}`;

    // Boutons de quantité
    let decreaseBtn = document.createElement("button");
    decreaseBtn.innerText = "-";
    decreaseBtn.addEventListener("click", () => {
      if (item.quantity > 1) {
        item.quantity -= 1;
        total -= item.price;
        updateCartModalContent();
      }
    });

    let increaseBtn = document.createElement("button");
    increaseBtn.innerText = "+";
    increaseBtn.addEventListener("click", () => {
      item.quantity += 1;
      total += item.price;
      updateCartModalContent();
    });

    // Afficher la quantité dans la cellule de quantité
    quantityCell.appendChild(decreaseBtn);
    quantityCell.appendChild(document.createTextNode(` ${item.quantity} `));
    quantityCell.appendChild(increaseBtn);

    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", () => {
      total -= item.price * item.quantity;
      cart.splice(index, 1);
      updateCartModalContent();
    });

    // Ajouter les boutons d'action dans la colonne "Actions"
    actionsCell.appendChild(removeButton);

    totalCell.innerText = `€${(item.price * item.quantity).toFixed(2)}`;

    // Ajouter le coût de l'élément actuel au total mis à jour
    updatedTotal += item.price * item.quantity;
  });

  cartTotal.innerText = `€${updatedTotal.toFixed(2)}`; // Mettre à jour le total

  // Mettez à jour le nombre total d'articles dans la span
  let totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  total_count.innerText = totalCount;
}
  // Clear cart
  function clearCart() {
    cart = [];
    total = 0;
    updateCartModalContent();
  }