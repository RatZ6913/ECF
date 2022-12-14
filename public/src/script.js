let content = document.querySelector("#content");
let modal = document.querySelector('#modal');
let contentMeal = document.querySelector('#contentMeal');
let modalLeft = document.querySelector('#modal-left');
let from = document.querySelector('#from');
let modalRight = document.querySelector('#modal-right');
let ingredients = document.createElement('p');
let description = document.createElement('p');
let modalVideo = document.querySelector('#modalVideo');
let video = document.createElement('VIDEO');


async function getFetch() {
  for (let i = 0; i < 5; i++) {
    let getData = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    let showData = await getData.json();
    let meals = showData.meals[0];
    // console.log(showData);

    // Création : <DIV> à chaque itération et l'insérer dans la Section(Content)
    let boxInContent = document.createElement("div");
    boxInContent.classList.add("boxDish");
    content.append(boxInContent);

    // Création : <FIGURE>(pour le référencement) à chaque itération et l'insérer dans la Div(boxInContent)
    let figure = document.createElement("figure");
    boxInContent.append(figure);

    // Création Titre du plat et texte pour le jour
    let nameMeal = document.createElement('h4');
    nameMeal.classList.add('nameMeal');
    nameMeal.textContent = meals.strMeal;
    let arrDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let days = document.createElement('p');
    days.style.textAlign = "center";
    days.style.color = "#707070";
    days.textContent = arrDays[i];
    boxInContent.append(nameMeal);
    figure.prepend(days);

    // Création : <IMAGE> à chaque itération et l'insérer dans la Div(boxInContent)
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

    console.log(meals);
    // Ouvre une fenêtre modale au click
    imgDish.addEventListener('click', () => {
      modal.append(contentMeal);
      contentMeal.prepend(nameMeal);
      modalLeft.append(imgDish, from, description);
      modalRight.append(ingredients);
      modalVideo.append(video);

      nameMeal.style.width = "100%";
      from.textContent += meals.strArea; // Origine du plat
      description.textContent = meals.strInstructions; // Instruction de la Recette
      video.src = meals.strYoutube;
      video.autoplay = false;
      video.controls = true;
      video.muted = false;
      video.height = "240px";
      video.width = "320px";

      if (video.canPlayType('video/mp4')) {
  console.log('set src to mp4 video');

  video.src = 'my-video.mp4'
} else if (video.canPlayType('video/ogg')) {
  console.log('set src to ogg video');

  video.src = 'my-video.ogg'
} else {
  console.log('provide link to user');
}

      // Si l'ingrédient == null. Alors l'ingrédient ne prendra aucune valeur sinon crée <p> Nom Ingrédient </p>
      meals.strIngredient1 === null ? meals.strIngredient1 = "" : ingredients.innerHTML = `<p>${meals.strIngredient1}</p>`;
      meals.strIngredient2 === null ? meals.strIngredient2 = "" : ingredients.innerHTML += `<p>${meals.strIngredient2}</p>`;
      meals.strIngredient3 === null ? meals.strIngredient3 = "" : ingredients.innerHTML += `<p>${meals.strIngredient3}</p>`;
      meals.strIngredient4 === null ? meals.strIngredient4 = "" : ingredients.innerHTML += `<p>${meals.strIngredient4}</p>`;
      meals.strIngredient5 === null ? meals.strIngredient5 = "" : ingredients.innerHTML += `<p>${meals.strIngredient5}</p>`;
      meals.strIngredient6 === null ? meals.strIngredient6 = "" : ingredients.innerHTML += `<p>${meals.strIngredient6}</p>`;
      meals.strIngredient7 === null ? meals.strIngredient7 = "" : ingredients.innerHTML += `<p>${meals.strIngredient7}</p>`;
      meals.strIngredient8 === null ? meals.strIngredient8 = "" : ingredients.innerHTML += `<p>${meals.strIngredient8}</p>`;
      meals.strIngredient9 === null ? meals.strIngredient9 = "" : ingredients.innerHTML += `<p>${meals.strIngredient9}</p>`;
      meals.strIngredient10 === null ? meals.strIngredient10 = "" : ingredients.innerHTML += `<p>${meals.strIngredient10}</p>`;
      meals.strIngredient11 === null ? meals.strIngredient11 = "" : ingredients.innerHTML += `<p>${meals.strIngredient11}</p>`;
      meals.strIngredient12 === null ? meals.strIngredient12 = "" : ingredients.innerHTML += `<p>${meals.strIngredient12}</p>`;
      meals.strIngredient13 === null ? meals.strIngredient13 = "" : ingredients.innerHTML += `<p>${meals.strIngredient13}</p>`;
      meals.strIngredient14 === null ? meals.strIngredient14 = "" : ingredients.innerHTML += `<p>${meals.strIngredient14}</p>`;
      meals.strIngredient15 === null ? meals.strIngredient15 = "" : ingredients.innerHTML += `<p>${meals.strIngredient15}</p>`;
      meals.strIngredient16 === null ? meals.strIngredient16 = "" : ingredients.innerHTML += `<p>${meals.strIngredient16}</p>`;
      meals.strIngredient17 === null ? meals.strIngredient17 = "" : ingredients.innerHTML += `<p>${meals.strIngredient17}</p>`;
      meals.strIngredient18 === null ? meals.strIngredient18 = "" : ingredients.innerHTML += `<p>${meals.strIngredient18}</p>`;
      meals.strIngredient19 === null ? meals.strIngredient19 = "" : ingredients.innerHTML += `<p>${meals.strIngredient19}</p>`;
      meals.strIngredient20 === null ? meals.strIngredient20 = "" : ingredients.innerHTML += `<p>${meals.strIngredient20}</p>`;

      modal.showModal();
    })


  }
}

getFetch();


