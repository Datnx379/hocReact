import { Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/navBar'
import { Features, HomePage, Programs, Reviews, Teaching } from './pages'

function App() {

  return (
    <div className='App'>
      <NavBar />
      <Route path='' element={<Features />} />
      <Route path='' element={<Programs />} />
      <Route path='' element={<Reviews />} />
      <Route path='' element={<Teaching/>} />
      <Route path='' element={<HomePage />} />
    </div>
  )
}

export default App
