import React, { useEffect, useRef, useState } from 'react'
import MainContainer from './MainContainer'
import CheckBox from './CheckBox'

function WindowController({ data, setData, id }) {
    {/* ***************************************************************************** */ }
    const [cover, setCover] = useState();
    const [title, setTitle] = useState();
    const [isActive, setIsActiveData] = useState(false);
    const [index, setIndex] = useState();

    useEffect(() => {
        if (id != undefined) {
            const dataObject = data.filter((item, ind) => {
                if (item?.id == id) {
                    setIndex(ind);
                    return true;
                } else { return false; }
            });
            if (dataObject && dataObject[0]) {
                setCover(dataObject[0]?.cover);
                setTitle(dataObject[0]?.title);
                setIsActiveData(dataObject[0]?.isActive);
            }
        }
    }, [id])

    const setIsActive = () => { }
    {/* ***************************************************************************** */ }




    return (
        <div style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        }}>
            {/* ***************************************************************************** */}
            <div className="image-container" style={{
                flex: 1,
                width: '100%',
                position: 'relative',
                padding: '20px',
            }}>
                <img style={{ height: '100%', width: '100%', objectFit: 'cover' }} src={cover} alt="" />
            </div>
            {/* ***************************************************************************** */}
            <div className="control-container" style={{
                width: '100%',
                height: '40%',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                padding: '20px',
                flexDirection: 'column'

            }}>
                {/* ***************************************************************************** */}
                <div className="title-container" style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    flex: 1,
                    height: '100%',
                    flexDirection: 'column',
                }}>
                    {/* title */}
                    {/* ***************************************************************************** */}
                    <span style={{
                        fontSize: '1.25rem',
                        fontWeight: 400,
                    }}>{title}</span>
                    {/* ***************************************************************************** */}
                    {/* is active */}
                    {/* ********************************************************* */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '10px'
                    }} className="active-badge">
                        <span style={{ marginRight: '10px' }}>Toggle Status</span>
                        <CheckBox checked={isActive} setChecked={setIsActive} />
                    </div>
                    {/* ********************************************************* */}
                </div>
                {/* ***************************************************************************** */}

                {/* ***************************************************************************** */}
                <div style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }} className="upload-image-container">
                    <input
                        className='upload-image'
                        style={{
                            height: '40px',
                            padding: '10px',
                            alignSelf: 'center',
                            justifySelf: 'center',
                        }} type="file" />
                </div>
                {/* ***************************************************************************** */}
            </div>
            {/* ***************************************************************************** */}
        </div>
    )
}

export default WindowController