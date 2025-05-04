import propTypes from "prop-types";
import { CiStopwatch } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

function Recipe({recipe, handleWantToCook}) {
  return (
    <div className='p-6 flex flex-col gap-4 justify-center items-center rounded-lg border-1 border-gray-200'> 
      <img className="h-72 lg:h-48 rounded-2xl w-full" src={recipe.image} alt="" />

      <div className="flex flex-col gap-4"> 
        <h2 className="text-xl">{recipe.recipe_name}</h2>
        <p>{recipe.short_description}</p>
        <hr className="text-gray-300" />
        <h3 className="text-lg font-medium">Ingredients: {recipe.ingredients.length}</h3>

        <ul className="list-disc ml-12 text-gray-500">
            {
                recipe.ingredients.map((ingredient, index) => <li key={index}>
                    <p>{ingredient}</p>
                </li>)
            }
        </ul>

        <hr className="text-gray-300" />

        <div className="flex gap-4 justify-start items-center">
            <div className="flex gap-2 justify-center items-center">
                <CiStopwatch />
                <p>{recipe.preparing_time}</p>
            </div>

            <div className="flex gap-2 justify-center items-center">
                <AiOutlineFire />
                <p>{recipe.calories}</p>
            </div>
        </div>

        <button onClick={() => handleWantToCook(recipe)} className="button w-fit">Want to Cook</button>
      </div>
    </div>
  )
}

Recipe.PropTypes = {
    recipe: propTypes.object.isRequired,
    handleWantToCook: propTypes.func.isRequired
}

export default Recipe

