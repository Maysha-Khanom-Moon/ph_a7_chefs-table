import propTypes from "prop-types";

function Recipe({recipe}) {
  return (
    <div className='our-recipes p-6 flex flex-col gap-4 justify-center items-center bg-white rounded-lg border-1 border-gray-200'> 
      <img className="h-48 rounded-2xl" src={recipe.image} alt="" />

      <div className="flex flex-col gap-4"> 
        <h2 className="text-xl">{recipe.recipe_name}</h2>
        <p>{recipe.short_description}</p>
        <hr className="text-gray-300" />
        <h3>Ingredients: {recipe.ingredients.length}</h3>

        <ul className="list-disc ml-12 text-gray-500">
            {
                recipe.ingredients.map((ingredient, index) => <li key={index}>
                    <p>{ingredient}</p>
                </li>)
            }
        </ul>
      </div>
    </div>
  )
}

Recipe.PropTypes = {
    recipe: propTypes.object.isRequired
}

export default Recipe

