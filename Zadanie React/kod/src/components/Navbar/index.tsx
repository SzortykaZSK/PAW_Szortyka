import { routes } from '@/Helpers/routing';
import './navbar.scss'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div id="app-nav">
      <div className="navbar-brand">
        App name
      </div>
      <nav>
        <ul className="navbar-nav">
          {routes.map((route) => (
              <li className={"nav-item"} key={route.path}>
                  <Link className="nav-link" to={route.path}>{route.label}</Link>
              </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}