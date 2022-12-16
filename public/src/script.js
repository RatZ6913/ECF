let body = document.querySelector('body');
let content = document.querySelector("#content");
let modal = document.querySelector('#modal');
let contentMeal = document.querySelector('#contentMeal');
let modalLeft = document.querySelector('#modal-left');
let from = document.querySelector('#from');
let modalRight = document.querySelector('#modal-right');
let ingredients = document.createElement('p');
let description = document.createElement('p');
description.classList.add('description');
let modalVideo = document.createElement('div');
modalVideo.classList.add('modalVideo');
let closeModal = document.createElement('button');
closeModal.classList.add('closeModal');

async function getFetch() {
  for (let i = 0; i < 6; i++) {
    let getData = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    let showData = await getData.json();
    let meals = showData.meals[0];

    // Création : <DIV> à chaque itération et l'insérer dans la Section(Content)
    let boxDish = document.createElement("div");
    boxDish.classList.add("boxDish");
    content.append(boxDish);

    // Création : <FIGURE>(pour le référencement) à chaque itération et l'insérer dans la Div(boxDish)
    let figure = document.createElement("figure");
    boxDish.append(figure);

    // Création Titre du plat et texte pour le jour
    let nameMeal = document.createElement('h4');
    nameMeal.classList.add('nameMeal');
    nameMeal.textContent = meals.strMeal;
    let arrDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let days = document.createElement('p');
    days.style.textAlign = "center";
    days.style.color = "#707070";
    days.textContent = arrDays[i];
    boxDish.append(nameMeal);
    figure.prepend(days);

    // Création : <IMAGE> à chaque itération et l'insérer dans la Div(boxDish)
    let imgDish = document.createElement("img");
    imgDish.classList.add("imgDish");
    figure.append(imgDish);
    imgDish.style.backgroundImage =
      "url('" + meals.strMealThumb + "')";

    // Changement d'image pour informer l'utilisateur que l'image est clickable
    imgDish.addEventListener("mouseover", () => {
      imgDish.style.backgroundImage = "";
      imgDish.style.transition = "1s";
      imgDish.style.borderRadius = "50%";
      imgDish.style.border = "none";
    });

    // Reprends ses valeurs de base à la sortie de l'image
    imgDish.addEventListener("mouseleave", () => {
      imgDish.style.backgroundImage =
        "url('" + meals.strMealThumb + "')";
      imgDish.style.transition = "0.5s";
      imgDish.style.borderRadius = "0px";
    });

    // Ouvre une fenêtre modale au click
    imgDish.addEventListener('click', (e) => {
      // Affiche la fenêtre du Modal 
      modal.showModal();

      // J'insère les noeuds besoins dans ma Modal
      modal.prepend(closeModal);
      modal.append(contentMeal);
      contentMeal.prepend(nameMeal);
      nameMeal.classList.add('modalNameMeal');
      modalLeft.append(imgDish, from, description);
      modalRight.append(ingredients, modalVideo);

      imgDish.style.transition = "";
      imgDish.style.backgroundImage = "";
      
     
      
      // J'appelle ma fonction ingredients();
      ingredient(meals);

      from.textContent = "Origin : " + meals.strArea; // Origine du plat
      description.innerHTML = `<h4 style="color:#538deb">Instructions : </h4><br>` + meals.strInstructions; // Instruction de la Recette

      // Si True Alors Affiche le lien de la vidéo de la recette vers YouTube / Si False alors, lui avertir qu'il n'y a pas de lien
      if (meals.strYoutube != "") {
        modalVideo.innerHTML = `
        <h4 style="color:#538deb">Need some help ? </h4>
          <p id="textModalVideo">You don't any idea about how to make the recipe...No problem, you have a guide there below</p>
          <a href=${meals.strYoutube} target="_blank" id="link">
            <img src="/ECF/public/image/youtube.png" alt="logo-mail" id="logoYT">YouTube
          </a> `;
      } else if (meals.strYoutube == "") {
        modalVideo.innerHTML = `
        <h4 style="color:#538deb"> Oups, sorry we cannot help you </h4>
        <p id="textModalVideo">We don't have any video available yet, sorry !</p>
        `;
      }

      // Désactive le scroll arrière-plan 
      body.style.position = "fixed"; 
      
      // J'ajoute un évènement qui empêche de fermer la Modale, une fois à l'intérieur : avec Touche "Echap". 
      // (Car ça crée des conflits)
      addEventListener('keydown', (e) => {
        switch (e.keyCode) {
          case 27:
            e.returnValue = false;
            e.keyCode = 0;
            break;
        }
      })
    })

    closeModal.addEventListener('click', (e) => {
      modal.close(); // Ferme la Modale 
      boxDish.append(figure, imgDish, nameMeal); // Dans la Div boxDish , je replace les noeuds, dont j'ai utilisé pour la modale
      nameMeal.classList.remove('modalNameMeal');
      body.style.position = ""; // Je réactive le scroll quand on ferme la modale
    })
  }
}

getFetch();

// Ma Fonction pour les ingrédients
// Si Ingrédient ou Mesure est égals à Null , alors : Null = "" (none). Sinon false , ingredient et measure afficheront leurs valeurs respectives
let ingredient = (meals) => {
  meals.strIngredient1 === null || meals.strMeasure1 === null ? meals.strIngredient1 = "" : ingredients.innerHTML = `<p class="ingredient">${meals.strIngredient1} <span class="measure">${meals.strMeasure1}</span></p>`;
  meals.strIngredient2 === null || meals.strMeasure2 === null ? meals.strIngredient2 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient2} <span class="measure">${meals.strMeasure2}</span> </p>`;
  meals.strIngredient3 === null || meals.strMeasure3 === null ? meals.strIngredient3 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient3} <span class="measure">${meals.strMeasure3}</span> </p>`;
  meals.strIngredient4 === null || meals.strMeasure4 === null ? meals.strIngredient4 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient4} <span class="measure">${meals.strMeasure4}</span> </p>`;
  meals.strIngredient5 === null || meals.strMeasure5 === null ? meals.strIngredient5 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient5} <span class="measure">${meals.strMeasure5}</span> </p>`;
  meals.strIngredient6 === null || meals.strMeasure6 === null ? meals.strIngredient6 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient6} <span class="measure">${meals.strMeasure6}</span> </p>`;
  meals.strIngredient7 === null || meals.strMeasure7 === null ? meals.strIngredient7 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient7} <span class="measure">${meals.strMeasure7}</span> </p>`;
  meals.strIngredient8 === null || meals.strMeasure8 === null ? meals.strIngredient8 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient8} <span class="measure">${meals.strMeasure8}</span> </p>`;
  meals.strIngredient9 === null || meals.strMeasure9 === null ? meals.strIngredient9 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient9} <span class="measure">${meals.strMeasure9}</span> </p>`;
  meals.strIngredient10 === null || meals.strMeasure10 === null ? meals.strIngredient10 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient10} <span class="measure">${meals.strMeasure10}</span> </p>`;
  meals.strIngredient11 === null || meals.strMeasure11 === null ? meals.strIngredient11 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient11} <span class="measure">${meals.strMeasure11}</span> </p>`;
  meals.strIngredient12 === null || meals.strMeasure12 === null ? meals.strIngredient12 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient12} <span class="measure">${meals.strMeasure12}</span> </p>`;
  meals.strIngredient13 === null || meals.strMeasure13 === null ? meals.strIngredient13 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient13} <span class="measure">${meals.strMeasure13}</span> </p>`;
  meals.strIngredient14 === null || meals.strMeasure14 === null ? meals.strIngredient14 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient14} <span class="measure">${meals.strMeasure14}</span> </p>`;
  meals.strIngredient15 === null || meals.strMeasure15 === null ? meals.strIngredient15 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient15} <span class="measure">${meals.strMeasure15}</span> </p>`;
  meals.strIngredient16 === null || meals.strMeasure16 === null ? meals.strIngredient16 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient16} <span class="measure">${meals.strMeasure16}</span> </p>`;
  meals.strIngredient17 === null || meals.strMeasure17 === null ? meals.strIngredient17 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient17} <span class="measure">${meals.strMeasure17}</span> </p>`;
  meals.strIngredient18 === null || meals.strMeasure18 === null ? meals.strIngredient18 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient18} <span class="measure">${meals.strMeasure18}</span> </p>`;
  meals.strIngredient19 === null || meals.strMeasure19 === null ? meals.strIngredient19 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient19} <span class="measure">${meals.strMeasure19}</span> </p>`;
  meals.strIngredient20 === null || meals.strMeasure20 === null ? meals.strIngredient20 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient20} <span class="measure">${meals.strMeasure20}</span> </p>`;
}
