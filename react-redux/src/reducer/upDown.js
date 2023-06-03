const initialState = 0;

const changeThenumber = (state = initialState, action) => {
    switch (action.type) {
        case "InCREMEnT": return state + 1;
        case "DECREMEnT": return state - 1;
        default: return state
    }
}

export default changeThenumber;