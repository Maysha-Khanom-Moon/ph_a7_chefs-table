import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/header/Header';
import OurRecipes from './components/recipes/OurRecipes';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [wantToCook, setWantToCook] = useState([]);

  useEffect(() => {
    fetch('recipes.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, []);

  const handleWantToCook = (recipe) => {
    if (wantToCook.includes(recipe)) {
      alert('You have already added this recipe to your list');
    }
    else {
      setWantToCook([...wantToCook, recipe]);
    }
  }

  return (
    <div className='px-36 pt-10 pb-24'>
      <Header></Header>
      <OurRecipes recipes={recipes} handleWantToCook={handleWantToCook} wantToCook={wantToCook}></OurRecipes>
    </div>
  )
}

export default App
