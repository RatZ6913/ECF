
// JE RÉCUPÈRE (i) REPAS :


function getMeal1() {
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);

      // JE SELECTIONNE L'IMAGE 1 PUIS INSERE L'IMAGE :

      let img1 = document.querySelector("#imgMonday1")

      // img1.src = response.meals[0].strMealThumb

      // JE SELECTIONNE PNAME DE L'IMAGE 1 PUIS INSERE LE NOM :

      let nameMonday1 = document.querySelector("#img1Name")

      nameMonday1.innerHTML = `Name : ${response.meals[0].strMeal}`

      // JE RECUPERE LE PARAGRAPHE TYPE ET L'INSERE
      let typeMonday1 = document.querySelector("#img1Type")

      typeMonday1.innerHTML = `Category : ${response.meals[0].strCategory}`

      // JE RECUPERE LE PARAGRAPHE INGREDIANTS :
      let ingrediantsMonday1 = document.querySelector("#monday1Ingrediants")


    
      for (let i = 1; i < 20; i++) {
        if(strIngredient + i == undefined){
        ingrediantsMonday1.innerHTML += "Ingrediants : " + response.meals[0].strIngredient + i + " <br>";
        }

      }


            // Ingrediants : ${response.meals[0].strIngredient2} <br>
      // Ingrediants : ${response.meals[0].strIngredient3} <br>
      // Ingrediants : ${response.meals[0].strIngredient4} <br>
      // Ingrediants : ${response.meals[0].strIngredient5} <br>
      // Ingrediants : ${response.meals[0].strIngredient6} <br>
      // Ingrediants : ${response.meals[0].strIngredient7} <br>
      // Ingrediants : ${response.meals[0].strIngredient8} <br>
      // Ingrediants : ${response.meals[0].strIngredient9} <br>
      // Ingrediants : ${response.meals[0].strIngredient10} <br>
      // Ingrediants : ${response.meals[0].strIngredient11} <br>
      // Ingrediants : ${response.meals[0].strIngredient12} <br>


      // console.log(response.meals[0].strIngredient1)
      //JE DECLARE UNE VARIABLE CONTENANT STRIngredients


    //  console.log(response.meals[0].strIngredient12);
    // let ingredients = response.meals[0].strIngredient

    // console.log(response.meals[0].strIngredient1);


    
    })
} // FUNCTION END




getMeal1()
