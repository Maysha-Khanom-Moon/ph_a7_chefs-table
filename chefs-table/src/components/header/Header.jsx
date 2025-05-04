import { IoSearchOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

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
                    <button><IoSearchOutline /></button>
                    <input type="text" placeholder="Search..." className="border-2 border-gray-300 rounded-md px-4 py-2" />
                </div>
                <div>
                  <FaRegUserCircle />
                </div>
            </div>
      </nav>
    </div>
  )
}

export default Header

