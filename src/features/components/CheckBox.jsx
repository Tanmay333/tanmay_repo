import React from 'react'
import "./css/CheckBox.css"
function CheckBox({ checked, setChecked }) {
    // ***************************************************
    return (
        <label className="switch">
            <input type="checkbox" onChange={setChecked} checked={checked} />
            <span className="slider round"></span>
        </label>
    )
    // ***************************************************
}

export default CheckBox