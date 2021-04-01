import React from 'react';

  const scaleNames = {  
    c: 'Celsius',  
    f: 'Fahrenheit'
  };
  const TemperatureInput = (props) => {

  
    function handleChange(e) {
      console.log('Atirando mesmo ')
      props.onTemperatureChange(e.target.value);
    }
  

      const temperature = props.temperature;
      const scale = props.scale;
      console.log('atirando ainda ', temperature, scale)
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]} o Calculator:</legend>
          <input
            value={temperature}
            onChange={handleChange} />
        </fieldset>
      );

  }

  export default TemperatureInput;