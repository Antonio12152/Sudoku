import { NavLink } from "react-router-dom"

const GameOver = () => {
return(
    <div>
        <h1>GAME OVER</h1>
        <NavLink to = "/menu">Играть еще раз</NavLink>
    </div>
)
}
export default GameOver