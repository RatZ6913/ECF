async function getFetch() {
  for (let i = 0; i < 5; i++) {
    let getData = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    let showData = await getData.json();

    console.log(showData);
  }
}

getFetch()