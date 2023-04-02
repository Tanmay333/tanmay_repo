"use strict";
import React, { useEffect, useState } from 'react';
import MainContainer from "../../components/MainContainer";
import ShopCard from '../../components/ShopCard';
import HomeScreenSpinner from '../../components/HomeScreenSpinner';
import './HomeScreen.css';
import { useNavigate, useNavigation } from 'react-router-dom';

const dataContainer = {
    code: 200,
    message: 'success',
    data: [
        {
            id: 1,
            title: 'Mukesh Kirana',
            address: [
                "Shop 6, Viman Palace Lane 8",
                "Viman Nagar Rd, Viman Nagar, Pune",
                "Maharashtra Pune"
            ],
            location: 'Viman Nagar'
        },
        {
            id: 2,
            title: 'Poonam V General Stores',
            address: [
                "Shop 6, Viman Palace Lane 8",
                "Viman Nagar Rd, Viman Nagar, Pune",
                "Maharashtra Pune"
            ],
            location: 'Alandi'
        },
        {
            id: 3,
            title: 'Pune shoping',
            address: [
                "Shop 6, Viman Palace Lane 8",
                "Viman Nagar Rd, Viman Nagar, Pune",
                "Maharashtra Pune"
            ],
            location: 'Shaniwar Wada'
        },
        {
            id: 4,
            title: 'Dipali General Store',
            address: [
                "Shop 6, Viman Palace Lane 8",
                "Viman Nagar Rd, Viman Nagar, Pune",
                "Maharashtra Pune"
            ],
            location: 'Aundh'
        },
        {
            id: 5,
            title: 'Western India Provision Stores',
            address: [
                "Shop 6, Viman Palace Lane 8",
                "Viman Nagar Rd, Viman Nagar, Pune",
                "Maharashtra Pune"
            ],
            location: 'Hinjewadi'
        },
        {
            id: 6,
            title: 'Mhalxsmi Treding',
            address: [
                "Shop 6, Viman Palace Lane 8",
                "Viman Nagar Rd, Viman Nagar, Pune",
                "Maharashtra Pune"
            ],
            location: 'Pune Station'
        },
        {
            id: 7,
            title: 'Monginis Cake Shop',
            address: [
                "Shop 6, Viman Palace Lane 8",
                "Viman Nagar Rd, Viman Nagar, Pune",
                "Maharashtra Pune"
            ],
            location: 'Ch Shivaji Nagar'
        }
    ]
}

const HomeScreen = () => {
    // *Hooks
    // {/* ********************************************************************* */ }
    const [originalData, setOriginalData] = useState([]);
    const [data, setData] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        try {
            if (document.cookie != "") {
                // ajax request here
                // *****************************************************************************
                const dataResult = dataContainer;
                if (dataResult && dataResult?.code === 200 && dataResult?.data) {
                    setOriginalData(dataResult?.data);
                    setData(dataResult?.data);
                    setShowSpinner(false);
                } else {
                    // show message that you are not connected to network
                }
                // *****************************************************************************
            }
            else { navigate('/login', { replace: true }) }

        }
        catch (err) { }

    }, [])

    const search = () => {
        // ajax call here
        // {/* ********************************************************************* */ }
        const filterData = originalData.filter((item) => {
            if (item.location.toLowerCase().includes(searchValue.toLowerCase())) { return true }
            else { return false }
        })
        setData(filterData);
        // {/* ********************************************************************* */ }
    }

    function deleteAllCookies() {
        const cookies = document.cookie.split(";");

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }

    const logout = () => {
        deleteAllCookies();
        navigate('/login', { replace: true });

    }
    // {/* ********************************************************************* */ }


    return (
        <MainContainer style={{ backgroundColor: "#ebebeb" }}>
            {/* login screen */}
            {/* ********************************************************************* */}
            <div className="signup-container" style={{
                position: 'absolute',
                zIndex: 9999999,
                height: '40px',
                width: '120px',
                top: '15px',
                right: '15px'
            }}>
                <button style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#007bff',
                    borderRadius: '5px',
                    color: '#fff',
                    fontFamily: 'Nunito',
                    fontSize: '18px'

                }} className="logout-button" onClick={logout}>Logout</button>

            </div>
            {/* ********************************************************************* */}

            {/* content holder container */}
            {/* ********************************************************************* */}
            <div style={{
                height: '80%',
                width: '80%',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }} className="content-container">
                {/* search bar container */}
                {/* ********************************************************************* */}
                <div style={{
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%'
                }} className="search-holder">
                    {/* ********************************************************************* */}
                    <input type="text"
                        style={{
                            height: '50px',
                            width: '60%',
                            borderRadius: '5px',
                            padding: '10px',
                            fontSize: '17px',
                            outline: 'none',
                            marginRight: '10px',
                            outlineWidth: 0,
                        }}
                        className="search-bar"
                        placeholder='Search'
                        value={searchValue}
                        onChange={(event) => { setSearchValue(event.target.value) }}
                    />
                    {/* ********************************************************************* */}
                    <button
                        className="search-button"
                        style={{
                            height: '50px',
                            width: '100px',
                            borderRadius: '5px',
                            fontWeight: 700,
                            fontSize: '15px',
                            cursor: 'pointer'
                        }} onClick={search}>
                        Search
                    </button>
                    {/* ********************************************************************* */}
                </div>
                {/* ********************************************************************* */}

                {/* shop content holder */}
                {/* ********************************************************************* */}
                <div style={{
                    flex: 1,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    overflowY: 'auto',
                    flexWrap: 'wrap',
                    padding: '10px'
                }} className="card-holder">
                    {
                        showSpinner ?
                            (<HomeScreenSpinner />)
                            :
                            (
                                data ? (
                                    // {/* cards */ }
                                    // {/* ********************************************************************* */}
                                    data.map((item, index) => (
                                        <ShopCard
                                            key={index}
                                            title={item?.title}
                                            address={item?.address}
                                            location={item?.location}
                                        />
                                    ))
                                    // {/* ********************************************************************* */}
                                ) : (<></>)
                            )
                    }
                </div>
                {/* ********************************************************************* */}
            </div>
            {/* ********************************************************************* */}


        </MainContainer >

    );
}

export default HomeScreen;
