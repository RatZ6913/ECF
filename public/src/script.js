let content = document.querySelector("#content");

async function getFetch() {
  for (let i = 0; i < 5; i++) {
    let getData = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");    
    let showData = await getData.json();

    // Création : <DIV> à chaque itération et l'insérer dans la Section(Content)
    let boxInContent = document.createElement("div");
    boxInContent.classList.add("boxDish");
    content.append(boxInContent);

    // Création : <FIGURE>(pour le référencement) à chaque itération et l'insérer dans la Div(boxInContent)
    let figure = document.createElement("figure");
    boxInContent.append(figure);

    // Création : <IMAGE> à chaque itération et l'insérer dans la Div(boxInContent)
    let imgDish = document.createElement("img");
    imgDish.classList.add("imgDish");
    figure.append(imgDish);
    imgDish.style.backgroundImage =
      "url('" + showData.meals[0].strMealThumb + "')";

    // Changement d'image pour informer l'utilisateur que l'image est clickable
    imgDish.addEventListener("mouseover", () => {
      imgDish.style.backgroundImage = "";
      imgDish.style.transition = "1.2s";
      imgDish.style.borderRadius = "50%";
      imgDish.style.border = "none";
    });

    // Reprends ses valeurs de base à la sortie de l'image
    imgDish.addEventListener("mouseleave", () => {
      imgDish.style.backgroundImage =
        "url('" + showData.meals[0].strMealThumb + "')";
      imgDish.style.transition = "1s";
      imgDish.style.borderRadius = "0px";
      imgDish.style.border = "1px solid #538deb";
    });

    // Redirection : Vers la page menubar.html
    imgDish.addEventListener('click', () => {
      location.href = '../ECF/menu.html';
    })
   console.log(showData);
  }
}

getFetch();
