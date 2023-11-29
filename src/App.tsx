import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/navBar'
import { Features, HomePage, Programs, Reviews, Teaching } from './pages';
import "./styles.scss";

export const App =() => {

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/features' element={<Features />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='reviews' element={<Reviews />} />
        <Route path='teaching' element={<Teaching/>} />
      </Routes>
    </div>
  )
}
