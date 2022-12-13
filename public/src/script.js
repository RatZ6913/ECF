
async function getFetch() {
  for (let i = 0; i < 5; i++) {
    let getData = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    let showData = await getData.json();
    
    for (const test of showData.meals) {
      console.log(test);
    }
  }
}

getFetch()

