
let content = document.querySelector('#content');


async function getFetch() {
  for (let i = 0; i < 5; i++) {
    let getData = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    let showData = await getData.json();

    // if(showData.meals[0].strCategory != "Dessert"){
    // console.log(showData.meals[0].strCategory);
    // }

    // Création : <DIV> à chaque itération et l'insérer dans la Section(Content)
    let boxInContent = document.createElement('div');
    boxInContent.classList.add('boxDish')
    content.append(boxInContent);

    // Création : <FIGURE>(pour le référencement) à chaque itération et l'insérer dans la Div(boxInContent)
    let figure = document.createElement('figure');
    boxInContent.append(figure);

    // Création : <IMAGE> à chaque itération et l'insérer dans la Div(boxInContent)
    let imgDish = document.createElement('img');
    imgDish.classList.add('imgDish')
    figure.append(imgDish);
    imgDish.style.backgroundImage = "url('" + showData.meals[0].strMealThumb + "')";



    for (const test of showData.meals) {
      console.log(test);
    }
  }
}

getFetch()

