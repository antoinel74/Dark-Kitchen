let section = document.querySelector(".menu");

const categoryButtons = document.querySelectorAll(".category-button");

function filterMenuByCategory(category) {
  const filteredMenu = menu.filter((objet) => {
    return (
      category === "All" ||
      objet.category.some((item) => item.includes(category))
    );
  });

  section.innerHTML = "";

  filteredMenu.forEach((objet) => {
    let article = document.createElement("article");
    article.innerHTML = `<div class="content">
        <h2 class="titre"> ${objet.nom} </h2>
        <figure> <img src=${objet.image}> </figure>
        <div class="body">
          <div class="underPict">
              <span class="category"> ${objet.category} </span>
              <p class="prix"> Prix: <span class="priceOnly">${objet.price}€</span></p>
          </div>
          <p class="info"> ${objet.description}</p>
        </div>
        <button class="cart">Add to cart</button>
    </div>
    `;

    section.appendChild(article);
    article.setAttribute("class", "card");
  });
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const selectedCategory = button.getAttribute("data-genre");
    filterMenuByCategory(selectedCategory);
  });
});

filterMenuByCategory("All");
