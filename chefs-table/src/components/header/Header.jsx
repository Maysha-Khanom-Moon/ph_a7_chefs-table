import { IoSearchOutline } from "react-icons/io5";
import { LuCircleUserRound } from "react-icons/lu";

function Header() {
  return (
    <div> 
      {/* navbar */}
      <nav className="flex justify-between items-center mb-10">
            <h1>Recipe Calories</h1>

            <ul className="flex gap-4">
                <li className="text-lg font-semibold">Home</li>
                <li className="text-lg font-semibold">Recipes</li>
                <li className="text-lg font-semibold">About</li>
                <li className="text-lg font-semibold">Search</li>
            </ul>

            <div className="flex items-center gap-4">
                <div className="flex items-center bg-[#150B2B0D] px-4 py-2 text-2xl font-normal gap-2 rounded-2xl">
                    <button className="p-1 cursor-pointer"><IoSearchOutline /></button>
                    <input type="text" placeholder="Search..." className="rounded-md px-4 py-1 w-60" />
                </div>
                <div className="bg-[#0BE58A] p-2 rounded-full w-14 h-14 flex items-center justify-center">
                  <LuCircleUserRound />
                </div>
            </div>
      </nav>

      {/* banner */}
      <div className="banner h-[600px] bg-[url('chef.jpg')] bg-cover flex flex-col justify-center items-center px-40 text-center gap-10 relative rounded-3xl">
        <div className="absolute z-2 bg-black opacity-50 w-full h-full rounded-3xl"></div>

        <div className="z-10 flex flex-col gap-10 text-white justify-center items-center">
          <h1>Discover an exceptional cooking class tailored for you!</h1>
          <p>Learn and master the essentials of culinary artistry — from fundamental techniques and flavor-building to recipe structuring, plating, and kitchen management.</p>
          
          <div className="flex gap-6">
            <button className="button">Explore Now</button>
            <button className="text-white text-xl font-semibold border-2 px-6 py-4 rounded-4xl">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
