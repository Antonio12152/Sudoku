import { useState } from "react";

export const Level1 = (props) => {
    const [inderArr, newIndexArr] = useState([0, 0]);
    const setActiveInput = (a, b) => {
        newIndexArr([a, b])
    }
    let tbody = props.matrix.map((tr, trIndex) => {
        return (
            <tr key={trIndex}>{tr.map((td, index) => {
                return (
                    <td key={`_${trIndex}_${index}`} onClick={() => setActiveInput(trIndex, index)} className="ceil">
                        {td || ""}
                    </td>
                )
            })}</tr>
        )
    })
    let sbody = props.values.map((span) => {
        return (
            <span key={`_${span}_`}>{span}</span>
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