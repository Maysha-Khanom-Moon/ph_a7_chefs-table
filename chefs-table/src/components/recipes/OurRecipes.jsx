import propTypes from "prop-types";
import Recipe from "./Recipe";

function OurRecipes({recipes}) {
  return (
    <div>
      <div className="our-recipes flex flex-col gap-4 justify-center items-center text-center mt-20 mb-12">
        <h1>Our Recipes</h1>
        <p className="w-[823px]">Discover delicious cooking recipes from around the world. From hearty comfort food to healthy dishes, learn step-by-step techniques to create meals that impress. Master flavors.</p>
      </div>

      <div>
        <div className="w-2/3">
          {
            recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
          }
        </div>

        <div className="w-1/3">

        </div>
      </div>
    </div>
  )
}

OurRecipes.PropTypes = {
  recipes: propTypes.array.isRequired
}

export default OurRecipes
