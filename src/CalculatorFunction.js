import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';


function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water woulder boil.</p>;
  }
  return <p>The water woulder not boil.</p>;
}

function toCelsius(fahrenheit) {

  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {

  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const CalculatorFunction =  () => {
  
  const [temperature, setTemperature] = useState('')
  const [scale, setScale] = useState('c')
                                                   
  
  function handleCelsiusChange(temperature) {
    setScale('c')
    setTemperature(temperature);
  }

  function handleFahrenheitChange(temperature) {
    setScale('f')
    setTemperature(temperature);
  }

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={ handleCelsiusChange } />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={ handleFahrenheitChange } />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );

}
export default CalculatorFunction;

