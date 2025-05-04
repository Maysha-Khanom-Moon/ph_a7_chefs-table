import './App.css'
import Header from './components/header/Header';
import OurRecipes from './components/recipes/OurRecipes';

function App() {
  return (
    <div className='px-36 pt-10 pb-24'>
      <Header></Header>
      <OurRecipes></OurRecipes>
    </div>
  )
}

export default App
