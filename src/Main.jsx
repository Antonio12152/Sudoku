import { NavLink } from 'react-router-dom';
export const Main = () => {
    return (
        <div className="main">
            <h1>Sudoku</h1>
            <NavLink to="/menu" className="main-link">Начать игру</NavLink>
        </div>
    );

}