import React from 'react';

export default function Slider( {min, max, value, handleChange} ) {

    return (
        <div className="Slider-container">
            <input
            type="range" 
            className="Slider"
            min={min}
            max={max}
            value={value}
            onChange={handleChange}
            />
        </div>
    )
};

