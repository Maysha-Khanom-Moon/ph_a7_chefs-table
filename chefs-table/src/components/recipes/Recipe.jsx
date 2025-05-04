import propTypes from "prop-types";

function Recipe({recipe}) {
  return (
    <div className='p-6 flex flex-col gap-4 justify-center items-center text-center bg-white rounded-lg border-1'> 
      <h1>{recipe.recipe_name}</h1>
    </div>
  )
}

Recipe.PropTypes = {
    recipe: propTypes.object.isRequired
}

export default Recipe

