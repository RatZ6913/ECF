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

      // J'appelle ma fonction ingredients();
      ingredient(meals);

      // modal.style.transition = "2s";
      modal.showModal();

      // J'ajoute un évènement qui empêche de fermer la Modale : avec Touche "Echap"
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





// Ma Fonction pour les ingrédients
// Si Ingrédient ou Mesure Différent de Null , alors retourne TRUE. Sinon la valeur de Ingrédient et mesure prendront : ""; (none) 
let ingredient = (meals) => {
  if(meals.strIngredient1 !== null || meals.strMeasure1 !== null){
    ingredients.innerHTML = `<p class="ingredient">${meals.strIngredient1} <span class="measure">${meals.strMeasure1}</span></p>`;
  } else {
    meals.strIngredient1 = "";
    meals.strMeasure1 = "";
  }

  if(meals.strIngredient2 !== null || meals.strMeasure2 !== null){
    ingredients.innerHTML += `<p class="ingredient">${meals.strIngredient2} <span class="measure">${meals.strMeasure2}</span></p>`;
  } else {
    meals.strIngredient2 = "";
    meals.strMeasure2 = "";
  }

  if(meals.strIngredient3 !== null || meals.strMeasure3 !== null){
    ingredients.innerHTML += `
  <p class="ingredient">${meals.strIngredient3} <span class="measure">${meals.strMeasure3}</span></p>
  `;
  } else {
    meals.strIngredient3 += "";
    meals.strMeasure3 = "";
  }

  if(meals.strIngredient4 !== null || !meals.strMeasure4 !== null){
    ingredients.innerHTML += `
  <p class="ingredient">${meals.strIngredient4} <span class="measure">${meals.strMeasure4}</span></p>
  `;
  } else {
    meals.strIngredient4 = "";
    meals.strMeasure4 = "";
  }

  if(meals.strIngredient5 !== null || meals.strMeasure5 !== null){
    ingredients.innerHTML += `
  <p class="ingredient">${meals.strIngredient5}  <span class="measure">${meals.strMeasure5}</span></p>
  `;
  } else {
    meals.strIngredient5 = "";
    meals.strMeasure5 = "";
  }

  if(meals.strIngredient6 !== null || meals.strMeasure6 !== null){
    ingredients.innerHTML += `
  <p class="ingredient">${meals.strIngredient6}  <span class="measure">${meals.strMeasure6}</span></p>
  `;
  } else {
    meals.strIngredient6 = "";
    meals.strMeasure6 = "";
  }

  if(meals.strIngredient7 !== null || meals.strMeasure7 !== null){
    ingredients.innerHTML += `
  <p class="ingredient">${meals.strIngredient7}  <span class="measure">${meals.strMeasure7}</span></p>
  `;
  } else {
    meals.strIngredient7 = "";
    meals.strMeasure7 = "";
  }

  if(meals.strIngredient8 !== null || meals.strMeasure8 !== null){
    ingredients.innerHTML += `
  <p class="ingredient">${meals.strIngredient8}  <span class="measure">${meals.strMeasure8}</span></p>
  `;
  } else {
    meals.strIngredient8 = "";
    meals.strMeasure8 = "";
  }

  if(meals.strIngredient9 !== null || meals.strMeasure9 !== null){
    ingredients.innerHTML += `
  <p class="ingredient">${meals.strIngredient9}  <span class="measure">${meals.strMeasure9}</span></p>
  `;
  } else {
    meals.strIngredient9 = "";
    meals.strMeasure9 = "";
  }

  if(meals.strIngredient10 !== null || meals.strMeasure10 !== null){
    ingredients.innerHTML += `
  <p class="ingredient">${meals.strIngredient10}  <span class="measure">${meals.strMeasure10}</span></p>
  `;
  } else {
    meals.strIngredient10 = "";
    meals.strMeasure10 = "";
  }

  if(meals.strIngredient11 !== null || meals.strMeasure11 !== null){
    ingredients.innerHTML += `
  <p class="ingredient">${meals.strIngredient11}  <span class="measure">${meals.strMeasure11}</span></p>
  `;
  } else {
    meals.strIngredient11 = "";
    meals.strMeasure11 = "";
  }

  if(meals.strIngredient12 !== null || meals.strMeasure12 !== null){
    ingredients.innerHTML += `
  <p class="ingredient">${meals.strIngredient8}  <span class="measure">${meals.strMeasure12}</span></p>
  `;
  } else {
    meals.strIngredient12 = "";
    meals.strMeasure12 = "";
  }

  if(meals.strIngredient13 !== null || meals.strMeasure13 !== null){
    ingredients.innerHTML += `
  <p class="ingredient">${meals.strIngredient13}  <span class="measure">${meals.strMeasure13}</span></p>
  `;
  } else {
    meals.strIngredient13 = "";
    meals.strMeasure13 = "";
  }

  if(meals.strIngredient14 !== null || meals.strMeasure14 !== null){
    ingredients.innerHTML += `
  <p class="ingredient">${meals.strIngredient14}  <span class="measure">${meals.strMeasure14}</span></p>
  `;
  } else {
    meals.strIngredient14 = "";
    meals.strMeasure14 = "";
  }

  if(meals.strIngredient15 !== null || meals.strMeasure15 !== null){
    ingredients.innerHTML += `
  <p class="ingredient">${meals.strIngredient15}  <span class="measure">${meals.strMeasure15}</span></p>
  `;
  } else {
    meals.strIngredient15 = "";
    meals.strMeasure15 = "";
  }

  if(meals.strIngredient16 !== null || meals.strMeasure16 !== null){
    ingredients.innerHTML += `
  <p class="ingredient">${meals.strIngredient16}  <span class="measure">${meals.strMeasure16}</span></p>
  `;
  } else {
    meals.strIngredient16 = "";
    meals.strMeasure16 = "";
  }

  if(meals.strIngredient17 !== null || meals.strMeasure17 !== null){
    ingredients.innerHTML += `
  <p class="ingredient">${meals.strIngredient17}  <span class="measure">${meals.strMeasure17}</span></p>
  `;
  } else {
    meals.strIngredient17 = "";
    meals.strMeasure17 = "";
  }

  if(meals.strIngredient18 !== null || meals.strMeasure18 !== null){
    ingredients.innerHTML += `
  <p class="ingredient">${meals.strIngredient18}  <span class="measure">${meals.strMeasure18}</span></p>
  `;
  } else {
    meals.strIngredient18 = "";
    meals.strMeasure18 = "";
  }

  if(meals.strIngredient19 !== null || meals.strMeasure19 !== null){
    ingredients.innerHTML += `
  <p class="ingredient">${meals.strIngredient19}  <span class="measure">${meals.strMeasure19}</span></p>
  `;
  } else {
    meals.strIngredient19 = "";
    meals.strMeasure19 = "";
  }

  if(meals.strIngredient20 !== null || meals.strMeasure20 !== null){
    ingredients.innerHTML += `
  <p class="ingredient">${meals.strIngredient20}  <span class="measure">${meals.strMeasure20}</span></p>
  `;
  } else {
    meals.strIngredient20 = "";
    meals.strMeasure20 = "";
  }
}