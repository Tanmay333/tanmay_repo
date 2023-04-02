import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ShopCard({ title, address, location }) {

    return (
        <div style={{
            // backgroundColor: '#ebebeb',
            width: '48%',
            height: '45%',
            margin: '10px',
            marginBottom: '20px',
            borderRadius: '3px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'

        }} className="card">
            <div className="image-container" style={{
                position: 'relative',
                width: '44%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                    alt="Shop Image"
                    style={{
                        position: 'absolute',
                        width: '85%',
                        height: '85%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            <div className="card-content-holder" style={{
                flex: 1,
                height: '100%',
                display: 'flex',
                padding: '10px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-evenly',
            }}>
                {/* title */}
                {/* ***************************************************************************** */}
                <div className="shop-title">
                    <span>
                        <Link style={{
                            textDecoration: 'none',
                            color: '#000',
                            fontFamily: 800,
                            fontSize: '20px'
                        }} to='/window'>{title}</Link>
                    </span>
                </div>
                {/* ***************************************************************************** */}

                {/* address */}
                {/* ***************************************************************************** */}
                <div className="shop-address">
                    {
                        address && Array.isArray(address) ? (
                            address.map((item, index) => (
                                <p
                                    key={index}
                                    style={{
                                        textOverflow: 'ellipsis',
                                        wordWrap: 'break',
                                        overflow: 'hidden',
                                        fontWeight: 400
                                    }}>{item}</p>
                            ))
                        ) : (<></>)
                    }
                </div>
                {/* ***************************************************************************** */}

                {/* location */}
                {/* ***************************************************************************** */}
                <div className="shop-location">
                    <p style={{
                        fontWeight: 400
                    }}><strong>Location:</strong> {location}</p>
                </div>
                {/* ***************************************************************************** */}

            </div>

        </div >
    )
}

export default ShopCard