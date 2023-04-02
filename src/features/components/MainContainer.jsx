import React from 'react'

function MainContainer({ children, style }) {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            ...style
        }}>
            {children}
        </div>
    )
}

export default MainContainer
