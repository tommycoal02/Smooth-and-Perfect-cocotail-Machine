// questions
// 1: Handle drinks that have multiple names(space)
// 2 Mis-spellings
// 3 Push== make into a rotating charasell of whiskey drinks
// 4 Do the nasa API

document.querySelector('button').addEventListener('click', coctailDrinks)
function coctailDrinks(){
    let drinkChoice = document.querySelector('input').value
    drinkChoice = drinkChoice.split(" ").join("%20")
    console.log(drinkChoice)
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+drinkChoice

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data.drinks[0])
            document.querySelector('h2').innerText= data.drinks[0].strDrink
            document.querySelector('.drinkCategory').innerText= data.drinks[0].strAlcoholic
            document.querySelector('img').src= data.drinks[0].strDrinkThumb
            document.querySelector('h3').innerText= data.drinks[0].strInstructions

        })
        .catch(err =>{
            console.log(`error ${err}`)
           
                document.getElementById("errorText").innerText="This type of drink does not Exist";
                console.log('seen it')
           
        })
}
"https://www.thecocktaildb.com/images/media/drink/yhzvk91643821739.jpg"
strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/qcgz0t1643821443.jpg"
