let content = document.querySelector("#content");
let modal = document.querySelector('#modal');
let contentMeal = document.querySelector('#contentMeal');
// let days = ["Monday", "Tuesday","Wednesday", "Thursday","Friday"];

async function getFetch() {
  for (let i = 0; i < 5; i++) {
    let getData = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    let showData = await getData.json();
    console.log(showData);

    // Création : <DIV> à chaque itération et l'insérer dans la Section(Content)
    let boxInContent = document.createElement("div");
    boxInContent.classList.add("boxDish");
    content.append(boxInContent);

    // Création : <FIGURE>(pour le référencement) à chaque itération et l'insérer dans la Div(boxInContent)
    let figure = document.createElement("figure");
    boxInContent.append(figure);

    // Création Titre du plat et texte pour le jour
    let nameMeal = document.createElement('h4');
    nameMeal.textContent = showData.meals[0].strMeal;
    let arrDays = ["Monday", "Tuesday","Wednesday", "Thursday","Friday"];
    let days = document.createElement('p');
    days.style.textAlign = "center";
    days.style.color ="#707070";
    days.textContent = arrDays[i];
    boxInContent.append(nameMeal);
    figure.prepend(days);

    // Création : <IMAGE> à chaque itération et l'insérer dans la Div(boxInContent)
    let imgDish = document.createElement("img");
    imgDish.classList.add("imgDish");
    figure.append(imgDish);
    imgDish.style.backgroundImage =
      "url('" + showData.meals[0].strMealThumb + "')";

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
        "url('" + showData.meals[0].strMealThumb + "')";
      imgDish.style.transition = "0.5s";
      imgDish.style.borderRadius = "0px";
    });

    // Modale
    imgDish.addEventListener('click', () => {

      
      modal.append(contentMeal);

      modal.showModal();
    })


  }
}

getFetch();


