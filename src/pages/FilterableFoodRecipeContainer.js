import { useState } from 'react';
import { Link } from 'react-router-dom';

function Card({image, title, category, recipe, onButtonTextClick}){
    const list = [];
  
    recipe.forEach((ingredient) => {
      list.push(
        <li>{ingredient}</li>
      );
    })
    return (
      <div className="card">
        <div className="card-image-area">
          <img 
          class="avatar"
          src={image}
          alt="Avatar" />
        </div>
        
        <h3>{title}</h3>
        <span>{category}</span>
        <Link to="/about" className="card-link"><button onClick={(e) => onButtonTextClick(e.currentTarget.textContent)}>{title}</button></Link>
       
      </div>
    );
  }
  function FoodRecipeContainer({recipes, filterText,  onButtonTextClick}){
    const cards = [];
  
    recipes.forEach((recipe) => {
  
      if(recipe.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
        return;
      }
  
      cards.push(
        <>
          <Card image={recipe.image} title={recipe.title} category={recipe.category} recipe={recipe.recipe} onButtonTextClick={onButtonTextClick}/>
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
          className="search-bar"
          type="text" 
          placeholder="Search recipe..." 
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}/>  
      </form>
    );
  }

function FilterableFoodRecipeContainer({recipes, onButtonTextClick}){
    const [filterText, setFilterText] = useState('');
  
    return (
      <div className="filterable-food-recipe-container">
        <SearchBar 
            filterText={filterText}
            onFilterTextChange={setFilterText}/>
        <FoodRecipeContainer 
            recipes={recipes}
            filterText={filterText}
            onButtonTextClick={onButtonTextClick}
            />
      </div>
    )
  }

  export default FilterableFoodRecipeContainer;