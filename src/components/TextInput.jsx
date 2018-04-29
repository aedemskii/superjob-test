import React from 'react';
function TextInput({placeholder}) {
    return (
        <div className="text-input-holder">
            <input type="text" placeholder={placeholder} />
        </div>
    );
}

export default TextInput;
