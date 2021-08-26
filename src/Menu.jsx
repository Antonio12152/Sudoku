import { NavLink } from "react-router-dom"

const Menu = () => {
    return (
        <div className="menu">
            <ul className="menu__list">
                <li><NavLink to="/level1">Легкий</NavLink></li>
                <li><NavLink to="/level2">Средний</NavLink></li>
                <li><NavLink to="/level3">Сложный</NavLink></li>
            </ul>
        </div>
    )
}
export default Menu;