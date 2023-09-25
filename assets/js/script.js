let article = document.querySelector("article");

const categoryButtons = document.querySelectorAll(".category-button");

function filterMenuByCategory(category) {
  const filteredMenu = menu.filter(objet => {
    return category === "All" || objet.category.some(item => item.includes(category));
  });

  article.innerHTML = "";

  filteredMenu.forEach(objet => {
    let section = document.createElement("section");
    section.innerHTML = 
    `<div class="content">
        <h2 class="titre"> ${objet.nom} </h2>
        <figure> <img src=${objet.image}> </figure>
        <div class="underPict">
            <span class="category"> ${objet.category} </span>
            <p class="prix"> Prix: ${objet.price} € </p>
        </div>
        <p class="info"> ${objet.description}</p>
    </div>
    `;

    article.appendChild(section);
    section.setAttribute("class", "card");
  });
}

categoryButtons.forEach(button => {
  button.addEventListener("click", function () {
    const selectedCategory = button.getAttribute("data-genre");
    filterMenuByCategory(selectedCategory);
  });
});

filterMenuByCategory("All");
