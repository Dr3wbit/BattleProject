
const DEFUALT_STATE = {
    position: [0, 0],
}

const playerReducer = (state = DEFUALT_STATE, action) => {
    switch(action.type) {
        case 'MOVE_PLAYER':
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export default playerReducer