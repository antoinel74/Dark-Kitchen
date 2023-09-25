let menu = document.querySelector(".menu");

objets.forEach((objet) => {
    const card = document.createElement("div");

    // Créer une div pour le contenu principal
    const contentDiv = document.createElement("div");

    const image = document.createElement("img");
    image.src = objet.image;
    contentDiv.appendChild(image);

    const nom = document.createElement("h2");
    nom.textContent = objet.nom;
    contentDiv.appendChild(nom);

    const category = document.createElement("p");
    category.textContent = objet.category;
    contentDiv.appendChild(category);

    const description = document.createElement("p");
    description.textContent = objet.description;
    contentDiv.appendChild(description);

    const price = document.createElement("p");
    price.textContent = `${objet.price} €`;
    contentDiv.appendChild(price);

    card.appendChild(contentDiv); // Ajouter contentDiv à card

    menu.appendChild(card);
});

