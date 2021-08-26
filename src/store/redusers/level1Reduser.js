const dataOption = {
    chooseOption() {
        return Math.floor(Math.random() * this.option.length);
    },
    option: [
        [
            [
                [3, 5, 6, 1, 4, 2],
                [1, 2, 4, 6, 3, 5],
                [4, 6, 1, 5, 2, 3],
                [2, 3, 5, 4, 6, 1],
                [5, 4, 2, 3, 1, 6],
                [6, 1, 3, 2, 5, 4]
            ],
            [
                [0, 0, 0, 0, 0, 2],
                [0, 0, 0, 6, 3, 0],
                [4, 0, 0, 5, 0, 3],
                [2, 0, 5, 0, 0, 1],
                [0, 4, 2, 0, 0, 0],
                [6, 0, 0, 0, 0, 0]
            ]
        ],
        [
            [
                [3, 5, 6, 1, 4, 2],
                [1, 2, 4, 6, 3, 5],
                [4, 6, 1, 5, 2, 3],
                [2, 3, 5, 4, 6, 1],
                [5, 4, 2, 3, 1, 6],
                [6, 1, 3, 2, 5, 4]
            ],
            [
                [0, 0, 0, 0, 0, 2],
                [0, 0, 0, 6, 3, 0],
                [4, 0, 0, 5, 0, 3],
                [2, 0, 5, 0, 0, 1],
                [0, 4, 2, 0, 0, 0],
                [6, 0, 0, 0, 0, 0]
            ]
        ],
        [
            [
                [3, 5, 6, 1, 4, 2],
                [1, 2, 4, 6, 3, 5],
                [4, 6, 1, 5, 2, 3],
                [2, 3, 5, 4, 6, 1],
                [5, 4, 2, 3, 1, 6],
                [6, 1, 3, 2, 5, 4]
            ],
            [
                [0, 0, 0, 0, 0, 2],
                [0, 0, 0, 6, 3, 0],
                [4, 0, 0, 5, 0, 3],
                [2, 0, 5, 0, 0, 1],
                [0, 4, 2, 0, 0, 0],
                [6, 0, 0, 0, 0, 0]
            ]
        ]
    ]
}
const initialState = {
    values: [1, 2, 3, 4, 5, 6],
    errors: 0,
    matrix: []
}
const randomOptionChoose = (state, dataOption) => {
    let randomOption = dataOption.chooseOption()
    let start = JSON.parse(JSON.stringify(dataOption.option[randomOption][1]))
    let end = JSON.parse(JSON.stringify(dataOption.option[randomOption][0]))
    return {
        ...state,
        matrix: {
            ...state.matrix,
            start,
            end
        },
        errors: 0
    }
}
const level1Reduser = (state = initialState, action) => {
    return randomOptionChoose(state, dataOption)
}
export default level1Reduser;