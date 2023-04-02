import React from 'react'
import './css/ScreenListHolder.css'

function ScreenListHolder({ data, index, setCurrentCover, setCurrentSelected, title, number, isActive }) {
    const changeWindow = () => {
        const dataObject = data[index];
        setCurrentSelected(dataObject?.id);
        setCurrentCover(dataObject?.cover);
    }

    return (
        // content holder
        // ***************************************************************************
        <div style={{
            padding: '15px',
            width: '420px',
            backgroundColor: '#e6e7ee',
            margin: '10px',
            height: '120px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            fontFamily: 'Nunito',
            flexDirection: 'column',
            marginBottom: '20px'
        }}
            className="content-holder">

            <div className="title-holder" style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
                {/* window title */}
                {/* ********************************************************* */}
                <span onClick={changeWindow} style={{
                    fontFamily: 'Nunito',
                    fontWeight: '600',
                    fontSize: '1.2rem',
                    cursor: 'pointer'
                }}>
                    {title ?? 'Title'}
                </span>
                {/* ********************************************************* */}

                {/* ********************************************************* */}
                <span style={{
                    fontFamily: 'Nunito',
                    fontSize: '1rem'
                }} className="accesories-number">
                    {number ? `${number} accessories` : '0 accesories'}
                </span>
                {/* ********************************************************* */}
            </div>


            {/* ********************************************************* */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '20px', width: '40px',
                borderRadius: '5px',
                backgroundColor: isActive ? '#56F000' : '#FF3838'
            }} className="active-badge">
                <span style={{
                    fontFamily: 'Nunito',
                    fontSize: '0.7rem',
                    color: '#FFF'
                }}>{isActive ? 'ON' : 'OFF'}</span>
            </div>
            {/* ********************************************************* */}
        </div>
        // ***************************************************************************
    )
}

export default ScreenListHolder