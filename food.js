const searchFood = async () => { //async
    const searchFild = document.getElementById('input-src');
    const srcTxt = searchFild.value;
    searchFild.value = '';
    // console.log(srcTxt)
    const srcDiv = document.getElementById('srcDiv');
    srcDiv.innerHTML='';
    if(srcTxt== ''){
        const errordiv = document.createElement('div');
        errordiv.innerHTML= `
        <h5 class= "text-center text-danger">please write something whatever you want</h5>
        `
        srcDiv.appendChild(errordiv);
    }
    else{

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${srcTxt}`
        const res = await fetch(url);
        const data = await res.json();
        displayFood(data.meals);
        // fetch(url)
        // .then(res => res.json())
        // .then(data => displayFood(data.meals))
    }

}

const displayFood = meals =>{
    const foodDiv = document.getElementById('displayFoods');
    foodDiv.innerHTML= '';
    // foodDiv.textContent= '';
    if(meals.length == 0){
        const emptydiv = document.createElement('div');
        emptydiv.classList.add('emptydiv');
        emptydiv.innerHTML= `
        <h1 class="text-center text-danger  mx-auto" >Sorry! this kinds of food item's are not avilble here</h1>
        <p class="text-center text-white mx-auto">please order our another food items</p>
        `
        foodDiv.appendChild(emptydiv);
    }
    else{
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

}

const loadMealDetail = async mealId  => {
    // console.log(mealId);
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
   const res = await fetch(url);
   const data = await res.json();
   displayDetailsMeal(data.meals[0]);
//    fetch(url)
//    .then(res => res.json())
//    .then(data => displayDetailsMeal(data.meals[0]))
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
           <a href= "${mealItem.strYoutube}" class="btn btn-info w-25 m-3" target="_blank" >saw vedio</a>
       </div>
    `;
    mealDetail.appendChild(div);
}