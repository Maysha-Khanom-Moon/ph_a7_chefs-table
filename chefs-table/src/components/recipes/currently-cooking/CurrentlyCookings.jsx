import PropTypes from 'prop-types'

function CurrentlyCookings({currentlyCooking}) {
  return (
    <div className='flex flex-col gap-4 mb-8'>
        <h2 className='text-center text-2xl font-bold'>Want to cook: {currentlyCooking.length}</h2>

        <span className='flex justify-center'><hr className='w-5/7 text-gray-200' /></span>

        <div>
          <div>
            <div className='flex justify-around items-center bg-gray-100 py-4 px-6'>
              <p className='w-1/12'></p>
              <p className='w-1/2'>Name</p>
              <p className='w-1/4'>Time</p>
              <p className='w-1/4'>Calories</p>
            </div>

            <div className='bg-gray-100 flex flex-col gap-6 mt-4 py-4 px-6'>
              {
                currentlyCooking.map((recipe, index) => (
                  <div className='flex items-center text-center' key={index}>
                    <p className='w-1/12 text-left'>{index+1}</p>
                    <p className='w-3/7 text-left'>{recipe.recipe_name}</p>
                    <p className='w-1/4 pl-2 text-left'>{recipe.preparing_time}</p>
                    <p className='w-1/4  text-left'>{recipe.calories}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
    </div>
  )
}

CurrentlyCookings.propTypes = {
    currentlyCooking: PropTypes.array.isRequired
}

export default CurrentlyCookings

