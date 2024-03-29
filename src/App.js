/*
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


function Card({image, title, category, recipe}){
  const list = [];

  recipe.forEach((ingredient) => {
    list.push(
      <li>{ingredient}</li>
    );
  })
  return (
    <div className="card">
      <img 
      class="avatar"
      src={image}
      alt="Avatar" />
      <h2>{title}</h2>
      <p><span>Category:</span> {category}</p>
      <button>Get Recipe</button>
    </div>
  );
}
function FoodRecipeContainer({recipes, filterText}){
  const cards = [];

  recipes.forEach((recipe) => {

    if(recipe.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
      return;
    }

    cards.push(
      <>
        <Card image={recipe.image} title={recipe.title} category={recipe.category} recipe={recipe.recipe}/>
      </>
    );
  });

  return (
    <div className="row-cards">
      {cards}
    </div>
    
  );
}

function SearchBar({
  filterText,
  onFilterTextChange // is the setFilterText
}){

  return (
    <form>
      <input 
        type="text" 
        placeholder="Search..." 
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}/>  
    </form>
  );
}

function FilterableFoodRecipeContainer({recipes}){
  const [filterText, setFilterText] = useState('');

  return (
    <div className="filterable-food-recipe-container">
      <SearchBar 
        filterText={filterText}
        onFilterTextChange={setFilterText}/>
      <FoodRecipeContainer 
        recipes={recipes}
        filterText={filterText}/>
    </div>
  )
}

// Array of objects
// and each object has object(s)
// i.e. recipe, an object,  is a property of the object
//

// Hard code data for now
// Later JSON API
const RECIPES = [
  { category: "American", 
    title: "Four Cheese Pizza", 
    recipe: ["Dough", "Tomato Sauce", "Cheese"],
    image: "https://picsum.photos/200" 
  },
  { category: "Japanese", 
    title: "Pork Tonkatsu", 
    recipe: ["Boneless Pork Chops", "bBead Crumbs", "Egg", "Corn Starch", "Oil"] ,
    image: "https://picsum.photos/200"
  },
  { 
    category: "Filipino", 
    title: "Maruya", 
    recipe: ["Kardaba", "Sugar","Oil"] ,
    image: "https://picsum.photos/200"
  },
  { 
    category: "Filipino", 
    title: "Filipino Spaghetti", 
    recipe: ["Pasta", "Sweet Tomato Sauce","Ground Pork", "Hot Dog"] ,
    image: "https://picsum.photos/200"
  },
  { 
    category: "Thailand", 
    title: "Thai Omelette", 
    recipe: ["Eggs", "FIsh Sauce","Oil"] ,
    image: "https://picsum.photos/200"
  },
  { 
    category: "Japanese", 
    title: "Janapese Curry", 
    recipe: ["Curry Mix", "Chicken","Vegetables"] ,
    image: "https://picsum.photos/200"
  },
];

function App() {
  return <FilterableFoodRecipeContainer recipes={RECIPES}/>;
}

export default App;
*/

import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
//import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Nav from './pages/Nav';
import FilterableFoodRecipeContainer from './pages/FilterableFoodRecipeContainer';


const RECIPES = [
  { category: "American", 
    title: "Four Cheese Pizza", 
    recipe: ["1 Pound Dough", "1 Cup Tomato Sauce", "2 Cups Cheese"],
    image: "https://picsum.photos/200" 
  },
  { category: "Japanese", 
    title: "Pork Tonkatsu", 
    recipe: ["6 Boneless Pork Chops", "2 Cups Bead Crumbs", "2 Egg", "1 Cup Corn Starch", "2 CUps Oil"] ,
    image: "https://picsum.photos/200"
  },
  { 
    category: "Filipino", 
    title: "Maruya", 
    recipe: ["Kardaba", "Sugar","Oil"] ,
    image: "https://picsum.photos/200"
  },
  { 
    category: "Filipino", 
    title: "Filipino Spaghetti", 
    recipe: ["Pasta", "Sweet Tomato Sauce","Ground Pork", "Hot Dog"] ,
    image: "https://picsum.photos/200"
  },
  { 
    category: "Thailand", 
    title: "Thai Omelette", 
    recipe: ["Eggs", "FIsh Sauce","Oil"] ,
    image: "https://picsum.photos/200"
  },
  { 
    category: "Japanese", 
    title: "Janapese Curry", 
    recipe: ["Curry Mix", "Chicken","Vegetables"] ,
    image: "https://picsum.photos/200"
  },
];

function App() {
  const [buttonText, setButtonText] = useState('');
  
  return (
    <div className="App">
      <Nav />
      <Routes>
        
        <Route  path="/" 
                element={
                  <FilterableFoodRecipeContainer 
                    recipes={RECIPES}
                    buttonText={buttonText}
                    onButtonTextClick={setButtonText}
                  />
                } 
        />

        <Route 
                path="/about" 
                element={
                  <Recipe 
                    recipes={RECIPES}
                    buttonText={buttonText}
                  />
                } 
        />  
      </Routes>
    </div>
  );
}

export default App;



