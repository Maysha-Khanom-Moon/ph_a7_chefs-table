import propTypes from "prop-types";
import Recipe from "./Recipe";
import WantToCooks from "./want-to-cook/WantToCooks";
import CurrentlyCookings from "./currently-cooking/CurrentlyCookings";

function OurRecipes({recipes, handleWantToCook, wantToCook, currentlyCooking, handleCurrentlyCooking}) {
  return (
    <div>
      <div className="our-recipes flex flex-col gap-4 justify-center items-center text-center mt-20 mb-12">
        <h1>Our Recipes</h1>
        <p className="w-[823px]">Discover delicious cooking recipes from around the world. From hearty comfort food to healthy dishes, learn step-by-step techniques to create meals that impress. Master flavors.</p>
      </div>

      <div className="our-recipes flex gap-6 justify-center items-start">
        <div className="w-3/5 grid grid-cols-2 gap-6">
          {
            recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} handleWantToCook={handleWantToCook}></Recipe>)
          }
        </div>

        <div className="w-2/5 rounded-lg border-1 border-gray-200 py-8 h-fit">
          <WantToCooks wantToCook={wantToCook} handleCurrentlyCooking={handleCurrentlyCooking}></WantToCooks>

          <CurrentlyCookings currentlyCooking={currentlyCooking}></CurrentlyCookings>
        </div>
      </div>
    </div>
  )
}

OurRecipes.PropTypes = {
  recipes: propTypes.array.isRequired,
  handleWantToCook: propTypes.func.isRequired,
  wantToCook: propTypes.array.isRequired,
  currentlyCooking: propTypes.array.isRequired,
  handleCurrentlyCooking: propTypes.func.isRequired
}

export default OurRecipes
