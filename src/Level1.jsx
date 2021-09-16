import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
const Level1 = (props) => {
    const [indexArr, newIndexArr] = useState([0, 0]);
    const setActiveInput = (a, b) => {
        newIndexArr([a, b])
    }
    const setValue = (e) => props.setValue(e.target.dataset.value, indexArr);
    const isOver = () => {
        if (props.errors >= 3) {
            props.startGame()
            props.history.push("/gameover")
        }
    }
    const isWin = () => {
        for (let arr of props.matrix) {
            if (arr.includes(0)) return;
        }
        props.startGame()
        props.history.push("/gamewin")
    }
    useEffect(() => {
        isOver()
        isWin()
        window.onpopstate = props.startGame
    }, [props.errors, props.matrix])
    let tbody = props.matrix.map((tr, trIndex) => {
        return (
            <tr key={trIndex}>{tr.map((td, index) => {
                return (
                    <td key={`_${trIndex}_${index}`} onClick={() => setActiveInput(trIndex, index)} className={(trIndex === indexArr[0] && index === indexArr[1]) ? "ceil active-input" : "ceil"}>
                        {td || ""}
                    </td>
                )
            })}</tr>
        )
    })
    let sbody = props.values.map((span) => {
        return (
            <span key={`_${span}_`} data-value={span} onClick={setValue}>{span}</span>
        )
    })
    return (
        <div className="game">
            <table className="table">
                <tbody>{tbody}</tbody>
            </table>
            <div className="sBody">
                {sbody}
            </div>
            <p>Errors: {props.errors}/3</p>
        </div>
    )
}
export default withRouter(Level1)