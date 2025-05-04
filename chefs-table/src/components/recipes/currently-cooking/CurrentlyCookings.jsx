import PropTypes from 'prop-types'

function CurrentlyCookings({currentlyCooking}) {
  return (
    <div>
      <h1>{currentlyCooking.length}</h1>
    </div>
  )
}

CurrentlyCookings.propTypes = {
    currentlyCooking: PropTypes.array.isRequired
}

export default CurrentlyCookings

