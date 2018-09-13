import store from '../../config/store'
import { PLAYER_SIZE, WORLD_WIDTH, WORLD_HEIGHT } from '../../config/constants'


export default function handleMovement(player) {


    function dispatchMove(direction) {
        const oldPos = store.getState().player.position
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: observBoundaries(oldPos, getNewPosition(direction))
            }
        })
    }

    function observBoundaries(oldPos, newPos) {
        return  (newPos[0] >= 0 && newPos[0] <= WORLD_WIDTH - PLAYER_SIZE) &&
                (newPos[1] >= 0 && newPos[1] <= WORLD_HEIGHT - PLAYER_SIZE)
                ? newPos : oldPos
    }


    function getNewPosition(direction) {
        const oldPos = store.getState().player.position
        switch (direction) {
            case 'LEFT':
                return [oldPos[0] - PLAYER_SIZE, oldPos[1]]
            case 'RIGHT':
                return [oldPos[0] + PLAYER_SIZE, oldPos[1]]
            case 'UP':
                return [oldPos[0], oldPos[1] + PLAYER_SIZE]
        }
    }

    function handleKeyDown(e) {
        e.preventDefault()

        switch (e.keyCode) {
            case 65:
                return dispatchMove('LEFT')
            case 68:
                return dispatchMove('RIGHT')
            case 32:
                return dispatchMove('UP')
            default:
        }
    }



    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player
}
