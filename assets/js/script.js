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
        <figure> <img src=${objet.image}> </figure>
        <span class="genre"> ${objet.category} </span>
        <h2 class="titre"> ${objet.nom} </h2>
        <p class="info"> Prix: ${objet.price} € </p>
        <p class="info"> Description: ${objet.description}</p>
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
