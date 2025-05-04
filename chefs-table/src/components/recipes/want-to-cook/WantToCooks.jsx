import React from 'react'
import PropTypes from 'prop-types'

function WantToCooks({wantToCook, handleCurrentlyCooking}) {
  return (
    <div className='flex flex-col gap-4 mb-8'>
        <h2 className='text-center text-2xl font-bold'>Want to cook: {wantToCook.length}</h2>

        <span className='flex justify-center'><hr className='w-5/7 text-gray-200' /></span>

        <div>
          <div>
            <div className='flex items-center gap-12'>
              <p className='w-1/12'></p>
              <p className='w-1/6 lg:w-fit'>Name</p>
              <p className='w-1/7 lg:w-fit'>Time</p>
              <p className='w-1/6'>Calories</p>
              <p></p>
            </div>

            <div className='bg-gray-100 flex flex-col gap-4 mt-4 py-4 px-6'>
              {
                wantToCook.map((recipe, index) => (
                  <div className='flex justify-around items-center' key={recipe.recipe_id}>
                    <p className='w-1/12 text-left'>{index+1}</p>
                    <p className='w-1/5 text-left'>{recipe.recipe_name}</p>
                    <p className='w-1/7 pl-2'>{parseInt(recipe.preparing_time)}</p>
                    <p className='w-1/6  text-center'>{parseInt(recipe.calories)}</p>
                    <button onClick={() => handleCurrentlyCooking(recipe)} className='px-4 py-2 h-fit bg-[#0BE58A] text-sm font-medium rounded-3xl'>Preparing</button>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
    </div>
  )
}

WantToCooks.propTypes = {
    wantToCook: PropTypes.array.isRequired,
    handleCurrentlyCooking: PropTypes.func.isRequired
}

export default WantToCooks

