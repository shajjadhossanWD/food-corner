const searchFood = () => {
    const searchFild = document.getElementById('input-src');
    const srcTxt = searchFild.value;
    searchFild.value = '';
    console.log(srcTxt)
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${srcTxt}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals))
}

const displayFood = meals =>{
    const foodDiv = document.getElementById('displayFoods');
    meals.forEach(food => {
        console.log(food);
         const newDiv = document.createElement('div');
         newDiv.classList.add('col');
         newDiv.innerHTML=`
         <div class="card">
            <img src="${food.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">${food.strMeal}</h5>
               <p class="card-text">${food.strInstructions.slice(0, 50)}</p>
            </div>
         </div>
        
         `
         foodDiv.appendChild(newDiv);
    })
}