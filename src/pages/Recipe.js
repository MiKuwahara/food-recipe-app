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

    const image = recipes[index].image;
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
            <div className="recipe-image-area">
                <img 
                    className="recipe-image"
                    src={image}
                    alt="recipe image" 
                />
            </div>
            <div className="recipe-detail-area">
                <h3>- {buttonText} -</h3>
                <h4>Ingredients</h4>
                <p>{ingredients}</p>
            </div>
        </div>
    );
}

export default Recipe;
// 
<Link to="/"><button>Home</button></Link>
/*<h1>{buttonText}: Recipe</h1>
            <p>{ingredients}</p>
            <button><Link to="/">Back to main</Link></button> */