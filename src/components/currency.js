import React from 'react';

function Currency() {

    const selectorStyle = {
        backgroundColor: "lime",
        color: "white",
        width: "180px",
        height: "60px",
        paddingLeft: "10px",
    };

    const optionStyle = {
        appearance: "none",
        backgroundColor: "lime",
        color: "white",
    }
    
    return (
        <div>
        <select id="currencyselect" style={selectorStyle}>
            <option defaultValue>Currency (£ Pound)</option>
            <option style={optionStyle} value="Dollar" name="dollar">$ Dollar</option>
            <option style={optionStyle} value="Pound" name="pound">£ Pound</option>
            <option style={optionStyle} value="Euro" name="euro">€ Euro</option>
            <option style={optionStyle} value="Ruppee" name="ruppee">₹ Ruppee</option>
        </select>
        </div>
    );
};

export default Currency;