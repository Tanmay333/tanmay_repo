"use strict"
import React, { useEffect, useState } from 'react'
import MainContainer from '../../components/MainContainer';
import ScreenListHolder from '../../components/ScreenListHolder';
import WindowController from '../../components/WindowController';
import "./WindowDisplayScreen.css"

const dataContainer = {
  code: 200,
  message: 'success',
  data: [
    {
      id: 1,
      title: "Left Shopping Window",
      accesories: 10,
      cover: "https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp",
      isActive: true
    },
    {
      id: 2,
      title: "Right Shopping Window",
      accesories: 5,
      cover: "https://mdbcdn.b-cdn.net/img/new/standard/nature/185.webp",
      isActive: false
    },
    {
      id: 3,
      title: "Front Entrance",
      accesories: 12,
      cover: "https://mdbcdn.b-cdn.net/img/new/standard/nature/186.webp",
      isActive: true
    },
    {
      id: 4,
      title: "Shoe Wall",
      accesories: 20,
      cover: "https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp",
      isActive: false
    }
  ]
}


function WindowDisplayScreen() {
  // *Hooks
  // {/* ***************************************************************************** */}
  const [data, setData] = useState([]);
  const [currentCover, setCurrentCover] = useState(null);
  const [currentSelected, setCurrentSelected] = useState(null);

  useEffect(() => {
    try {
      if (dataContainer && dataContainer?.code === 200 && dataContainer?.data) {
        setData(dataContainer?.data);
        setCurrentSelected(dataContainer.data[0]?.id);
        setCurrentCover(dataContainer.data[0]?.cover);
      }
    }
    catch (err) { }
  }, [])

  // {/* ***************************************************************************** */}

  // {/* ***************************************************************************** */}

  return (
    <MainContainer>
      {/* main content holder */}
      {/* ***************************************************************************** */}
      <div className="content-holder-main" style={{
        height: '80%',
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {/* configuration screen holder */}
        {/* ***************************************************************************** */}
        <div className="configuration-holder" style={{
          flex: 1,
          height: '100%',
          overflowX: 'hidden',
          overflowY: 'scroll'

        }}>

          {/* screen list */}
          {/* ***************************************************************************** */}
          {
            data ?
              (
                data.map((item, index) => (
                  <ScreenListHolder
                    data={data}
                    setCurrentCover={setCurrentCover}
                    setCurrentSelected={setCurrentSelected}
                    key={index}
                    index={index}
                    title={item?.title}
                    number={item?.accesories}
                    isActive={item?.isActive}
                  />
                ))
              )
              :
              (<></>)
          }

        </div>
        {/* ***************************************************************************** */}

        {/* preview holder */}
        {/* ***************************************************************************** */}
        <div style={{
          width: '45%',
          height: '100%',
          padding: '20px'
        }} className="window-preview">
          {/* controller */}
          {/* ***************************************************************************** */}
          <WindowController
            id={currentSelected}
            cover={currentCover}
            data={data}
            setData={setData}
          />
          {/* ***************************************************************************** */}
        </div>
        {/* ***************************************************************************** */}
      </div>
      {/* ***************************************************************************** */}
    </MainContainer>
  )
}

export default WindowDisplayScreen;