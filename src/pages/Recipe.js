import { Link } from 'react-router-dom';
function Recipe({recipes, buttonText}){

    function getObject(object) {
        if(buttonText.toLowerCase() === object.title.toLowerCase()){
            return true;
        }

        return false;
    }
      
    const index = recipes.findIndex(getObject); // -1, not found

    console.log(index);
    let ingredients = [];
    recipes[index].recipe.forEach((item) => {
        ingredients.push(
            <li>{item}</li>
        );
    });
    /*
    function getObject(object) {
        if(buttonText.toLowerCase() === object.title.toLowerCase()){
            return true;
        }

        return false;
    }
      
    const index = recipes.findIndex(getObject); // -1, not found
    let ingredients = [];
    recipes[index].recipe.forEach((item) => {
        ingredients.push(
            <li>{item}</li>
        );
    });

    */
    
    return(
        <div className="recipe-area">
            <h3>{buttonText}: Recipe</h3>
            <p>{ingredients}</p>
            <Link to="/"><button>Home</button></Link>
        </div>
    );
}

export default Recipe;

/*<h1>{buttonText}: Recipe</h1>
            <p>{ingredients}</p>
            <button><Link to="/">Back to main</Link></button> */