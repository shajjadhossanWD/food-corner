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
         <div onclick="loadMealDetail(${food.idMeal})" class="card">
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

const loadMealDetail = mealId  => {
    // console.log(mealId);
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
   fetch(url)
   .then(res => res.json())
   .then(data => displayDetailsMeal(data.meals[0]))
}

const displayDetailsMeal = mealItem => {
     console.log(mealItem)
    const mealDetail = document.getElementById('meals-detail');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
       <div class="card">
           <img src="${mealItem.strMealThumb}" class="card-img-top" alt="...">
           <div class="card-body">
               <p class="card-text">${mealItem.strInstructions.slice(0, 250)}</p>
           </div>
           <a href= "${mealItem.strYoutube}" class="btn btn-info w-25 p-3" target="_blank" >saw vedio</a>
       </div>
    `;
    mealDetail.appendChild(div);
}