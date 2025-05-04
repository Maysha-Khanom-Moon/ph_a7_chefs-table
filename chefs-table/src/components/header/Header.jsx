function Header() {
  return (
    <div>
      {/* navbar */}
      <nav>
            <h1>Recipe Calories</h1>

            <ul className="flex gap-4">
                <li className="text-lg font-semibold">Home</li>
                <li className="text-lg font-semibold">Recipes</li>
                <li className="text-lg font-semibold">About</li>
                <li className="text-lg font-semibold">Search</li>
            </ul>

            <div>
                <div>
                    <button></button>
                </div>
            </div>
      </nav>
    </div>
  )
}

export default Header

