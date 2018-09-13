import React from 'react'
import { connect } from 'react-redux'



function Player(props){

        return (
            <div
            style={{
                position: 'relative',
                top: props.postition[1],
                left: props.position[0],
                backgroundColor: red,
                backgroundPosition: '0 0',
                height: '20px',
                width: '20px'
            }}
            />
        )

   
}

function mstp(state){
    return {
        ...state.player,
    }
}

export default connect(mstp)(Player);