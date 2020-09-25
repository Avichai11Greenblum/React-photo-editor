import React, {useState} from 'react';
import './App.css';
import Slider from './Slider';
import SidebarItem from './sidebarItem';

const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    unit: '%',
    range: {
      min: 0,
      max: 200
    }
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    unit: '%',
    range: {
      min: 0,
      max: 200
    }
  },  
  {
    name: "Saturation",
    property: "saturation",
    value: 100,
    unit: '%',
    range: {
      min: 0,
      max: 200
    }
  },  
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    unit: '%',
    range: {
      min: 0,
      max: 100
    }
  },  
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    unit: '%',
    range: {
      min: 0,
      max: 100
    }
  },  
  {
    name: "Hue rotate",
    property: "hue-rotate",
    value: 0,
    unit: 'deg',
    range: {
      min: 0,
      max: 360
    }
  },  
  {
    name: "Blur",
    property: "blur",
    value: 0,
    unit: 'px',
    range: {
      min: 0,
      max: 20
    }
  }  
];

function App() {

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const selectedOption = options[selectedOptionIndex];

  function handleSliderChange( {target} ){
    setOptions(prevOptions => {
        return prevOptions.map( (option, index) => {
          if (index !== selectedOptionIndex) return option
          return { ...option, value: target.value}
        })
    })
  }

  return(
    <div className="container">
      <div className="main-image"/>
      <div className="sideBar">
        {options.map( (option, index) => {
          return (
            <SidebarItem 
              key = {index}
              name = {option.name}
              active = {index === selectedOptionIndex}
              handleClick = {() => setSelectedOptionIndex(index)}
            />
          )
        })}
          
      </div>
      <Slider
        min = {selectedOption.range.min}
        max = {selectedOption.range.max}
        value = {selectedOption.value}
        handleChange = {handleSliderChange}
      />
    </div>
  )
}

export default App;
