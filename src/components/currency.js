import React from 'react';

function Currency() {
    
    return (
        <div style="background-color: lime; 
        width: 400px;">
        <select id="currencyselect" style="background-color: lime; 
    width: 400px;">
            <option defaultValue>Currency (£ Pound)</option>
            <option value="Dollar" name="dollar"> Dollar</option>
            <option value="Pound" name="pound"> Pound</option>
            <option value="Euro" name="euro"> Euro</option>
            <option value="Ruppee" name="ruppee"> Ruppee</option>
        </select>
        </div>
    );
};

export default Currency;