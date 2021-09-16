import { NavLink } from "react-router-dom"

const GameWin = () => {
    return (
        <div>
            <h1>You Win</h1>
            <NavLink to = "/menu">Играть еще раз</NavLink>
        </div>
    )
}
export default GameWin