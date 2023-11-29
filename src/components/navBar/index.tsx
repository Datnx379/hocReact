import {Link} from "react-router-dom"


export const NavBar = () => {
  return (
    <nav className="flex justify-between">
        <div className="flex items-center">
            <img src={logo} alt="" />
            <p>LOGO</p>
        </div>
        <div className="flex gap-9">
        <ul className="flex gap-9 cursor-pointer text-black text-3xl font-normal self-center">
            <li>
                <Link to={'/programs'}>Programs</Link>    
            </li>
            <li >
                <Link to={'/reviews'}>Reviews</Link>
            </li>
            <li>
                <Link to={'/features'}>Features</Link>
            </li>
            <li>
                <Link to={'teaching'}> Teaching</Link>
            </li>
        </ul>
        <button className="rounded-xl w-96 h-20 border-primary border-2 border-blue-800 text-4xl text-blue-500">Free Masterclasses</button>
        </div>
    </nav>
  )
}
