import React from 'react'
import Player from '../player'
import World from '../world'

function Instance(props) {
    return (
        <div
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                backgroundColor: 'black',
                margin: '20px auto'
            }}
        >
            <World />
            <Player />
        </div>
    )
}

export default Instance