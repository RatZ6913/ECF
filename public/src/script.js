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
    imgDish.addEventListener('click', () => {
      modal.prepend(closeModal);
      modal.append(contentMeal);
      contentMeal.prepend(nameMeal);
      nameMeal.classList.add('modalNameMeal');
      modalLeft.append(imgDish, from, description);
      modalRight.append(ingredients, modalVideo);


      from.textContent = meals.strArea; // Origine du plat
      description.innerHTML = `<h4 style="color:#538deb">Instructions : </h4><br>` + meals.strInstructions; // Instruction de la Recette
      modalVideo.innerHTML = `
        <h4>Need some help ? </h4>
          <p id="textModalVideo">You don't any idea about how to make the recipe...No problem, you have a guide there below</p>
          <a href=${meals.strYoutube} id="link">
            <img src="/ECF/public/image/youtube.png" alt="logo-mail" id="logoYT">YouTube
          </a>
      `;

      // Si l'ingrédient == null. Alors l'ingrédient ne prendra aucune valeur sinon crée <p> Nom Ingrédient </p>
      meals.strIngredient1 === null ? meals.strIngredient1 = "" : ingredients.innerHTML = `<p class="ingredient">${meals.strIngredient1}</p>`;
      meals.strIngredient2 === null ? meals.strIngredient2 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient2}</p>`;
      meals.strIngredient3 === null ? meals.strIngredient3 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient3}</p>`;
      meals.strIngredient4 === null ? meals.strIngredient4 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient4}</p>`;
      meals.strIngredient5 === null ? meals.strIngredient5 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient5}</p>`;
      meals.strIngredient6 === null ? meals.strIngredient6 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient6}</p>`;
      meals.strIngredient7 === null ? meals.strIngredient7 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient7}</p>`;
      meals.strIngredient8 === null ? meals.strIngredient8 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient8}</p>`;
      meals.strIngredient9 === null ? meals.strIngredient9 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient9}</p>`;
      meals.strIngredient10 === null ? meals.strIngredient10 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient10}</p>`;
      meals.strIngredient11 === null ? meals.strIngredient11 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient11}</p>`;
      meals.strIngredient12 === null ? meals.strIngredient12 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient12}</p>`;
      meals.strIngredient13 === null ? meals.strIngredient13 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient13}</p>`;
      meals.strIngredient14 === null ? meals.strIngredient14 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient14}</p>`;
      meals.strIngredient15 === null ? meals.strIngredient15 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient15}</p>`;
      meals.strIngredient16 === null ? meals.strIngredient16 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient16}</p>`;
      meals.strIngredient17 === null ? meals.strIngredient17 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient17}</p>`;
      meals.strIngredient18 === null ? meals.strIngredient18 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient18}</p>`;
      meals.strIngredient19 === null ? meals.strIngredient19 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient19}</p>`;
      meals.strIngredient20 === null ? meals.strIngredient20 = "" : ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient20}</p>`;

      // modal.style.transition = "2s";
      modal.showModal();

      // J'ajoute un évènement qui empêche de fermer le Modale : avec Touche "Echap"
      addEventListener('keydown', (e)=> {        
        switch(e.keyCode){
          case 27:
            e.returnValue = false;
            e.keyCode = 0;
            break;
        }
      })
    })

    closeModal.addEventListener('click', () => {
      modal.close();
      boxDish.append(figure, imgDish, nameMeal);
      nameMeal.classList.remove('modalNameMeal');
    })
  }
} 

getFetch();

