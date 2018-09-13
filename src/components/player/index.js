import React from 'react'
import { connect } from 'react-redux'
import handleMovement from './movement'



function Player(props){
        return (
            <div
                style={{
                    position: 'absolute',
                    bottom: props.position[1],
                    left: props.position[0],
                    backgroundColor: 'red',
                    backgroundPosition: '0 0',
                    height: '20px',
                    width: '20px'
                }}
            />
        )  
    }


function mstp(state) {
    return {
        ...state.player,
    }
}

export default connect(mstp)(handleMovement(Player));