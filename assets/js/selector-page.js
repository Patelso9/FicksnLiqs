document.getElementById("cocktail-button").addEventListener("click", randomCocktail);

function randomCocktail() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(
            function (response) {
                if (response.status !== 200) {
                    return;
                }
                response.json().then(function (data) {
                    //console.log(data)
                    displayRandomCocktail(data);
                });
            }
        )
}

randomCocktail();

function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0].strDrink);

    var drinkArea = document.querySelector("#drink-area");
    drinkArea.innerHTML = "";

    var drinkName = document.createElement("h3");
    drinkName.innerHTML = cocktail.drinks[0].strDrink;

    drinkArea.append(drinkName);

    var img = document.createElement("img");
    img.src = cocktail.drinks[0].strDrinkThumb;

    drinkArea.append(img);

    for (var i = 1; i < 16; i++) {
        console.log(i)
        var ingredient = document.createElement("h5");
        ingredient.innerHTML = cocktail.drinks[0].strIngredient;

        drinkArea.append(ingredient);

    }
}