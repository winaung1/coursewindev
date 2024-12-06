const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')
const recipeList = document.getElementById('recipeList')
const recipeDetails = document.getElementById('recipeDetails')

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

async function fetchRecipes(query){
  try{
    const response = await fetch(API_URL + query)
    const data = await response.json()

    if(data.meals){
        displayRecipes(data.meals)
    } else {
        recipeList.innerHTML = "<p>No recipes found. Try again!</p>"
        recipeDetails.style.display = "none"
    }

  } catch (error){
    console.error("Error fetching:", error)
    recipeList.innerHTML = "<p>Something went wrong. Try again!</p>"
  }
}

function displayRecipes(recipes){

    recipeList.innerHTML = ""
console.log(recipes)
    recipes.forEach(recipe => {
        const recipeCard = document.createElement("div")
        recipeCard.className = "recipe-card"
        recipeCard.innerHTML = `<img src="${recipe.strMealThumb}" alt="${recipe.strMeal}"/>
        <h3>${recipe.strMeal}<h3/>
        `
        recipeCard.addEventListener('click', () => displayRecipeDetails(recipe))
        recipeList.appendChild(recipeCard)
    })
}

function displayRecipeDetails(recipe){
    recipeDetails.style.display = "block"

    recipeDetails.innerHTML =` <h2>${recipe.strMeal}</h2>
    <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" style="width:100%; max-width: 300px;"/>
    <p><strong>Category: <strong> ${recipe.strCategory}</p>
    <p><strong>Area: <strong> ${recipe.strArea}</p>
    <p><strong>Instructions: <strong> ${recipe.strInstructions}</p>
    <h4>Ingredients:</h4>
    <ul>
        ${getIngredientList(recipe).map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>

    
    `

}

function getIngredientList(recipe){
    const ingredients = []

    for(let i = 1; i <= 20; i++){
        const ingredient = recipe[`strIngredient${i}`]
        const measure = recipe[`strMeasure${i}`];

        if(ingredient && ingredient.trim() !== ""){
            ingredients.push(`${ingredient} - ${measure}`)
        }
    }

    return ingredients;
}

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim()

    if(query){
        fetchRecipes(query)
    } else {
        alert("Please enter a search keyword!")
    }
})




