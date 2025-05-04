import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/header/Header';
import OurRecipes from './components/recipes/OurRecipes';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('recipes.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, []);

  return (
    <div className='px-36 pt-10 pb-24'>
      <Header></Header>
      <OurRecipes recipes={recipes}></OurRecipes>
    </div>
  )
}

export default App
