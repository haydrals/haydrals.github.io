function init() {
    let btn = document.getElementById("fetch-btn");
    btn.addEventListener("click", fetchDog);

    let mealBtn = document.getElementById("meal-btn");
    mealBtn.addEventListener("click", fetchMeal);

    let jokeBtn = document.getElementById("joke-btn");
    jokeBtn.addEventListener("click", fetchJoke);

    let pBtn = document.getElementById("p-btn");
    pBtn.addEventListener("click", fetchJoke);
}

function fetchDog() {
    let url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
        .then(statusCheck)
        .then(resp => resp.json())
        .then(showDog)
        .catch(handleError);
}

function showDog(data) {
    console.log("Dog data:", data);
    let img = document.createElement("img");
    img.src = data.message;
    img.alt = "A random dog";
    document.getElementById("output").appendChild(img);
}

async function statusCheck(res) {
    if (!res.ok) {
        throw new Error(await res.text());
    }
    return res;
}

function handleError(err) {
    console.error("Something went wrong:", err);
    document.getElementById("output").textContent =
        "The kitchen is closed! (Error loading data)";
}

function fetchMeal() {
    let food = document.getElementById("food-input").value;
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + food;
    fetch(url)
        .then(statusCheck)
        .then(resp => resp.json())
        .then(showMeals)
        .catch(handleError);
}

function showMeals(data) {
    document.getElementById("output").innerHTML = "<p></p>";
    //<!-- name, category, thumbnail -->
    console.log("Meal data:", data);
    if (data.meals == null) {
        const empty = document.createElement("p");
        empty.textContent = "Sorry, that's not on our menu!";
        document.getElementById("output").appendChild(empty);
    } else {
        for (const meal of data.meals) {

            console.log(meal);

            const name = document.createElement("p");
            name.textContent = meal.strMeal;
            document.getElementById("output").appendChild(name);
            const cat = document.createElement("p");
            cat.textContent = meal.strCategory;
            document.getElementById("output").appendChild(cat);
            let img = document.createElement("img");
            img.src = meal.strMealThumb;
            img.alt = "A meal";
            document.getElementById("output").appendChild(img);
        }
    }
}

let punchlineTimer;

function fetchJoke() {
    const url = "https://official-joke-api.appspot.com/random_joke";

    fetch(url)
        .then(statusCheck)
        .then(resp => resp.json())
        .then(showJoke)
        .catch(handleError);
}

function showJoke(data) {
    const setup = document.getElementById("setup");
    const punchline = document.getElementById("punchline");
    const btn = document.getElementById("revealBtn");

    clearTimeout(punchlineTimer);
    punchline.classList.remove("show");

    setup.textContent = data.setup;
    punchline.textContent = data.punchline;

    punchline.style.display = "none";

    btn.style.display = "inline-block";

    punchlineTimer = setTimeout(() => {
        revealPunchline();
    }, 3000);
}

function revealPunchline() {
    const punchline = document.getElementById("punchline");
    punchline.style.display = "block";

    document.getElementById("revealBtn").style.display = "none";
}


init()