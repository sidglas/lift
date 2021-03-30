import React from 'react';
import TemperatureInput from './TemperatureInput';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water woulder boil.</p>;
  }
  return <p>The water woulder not boil.</p>;
}

function toCelsius(fahrenheit) {

  console.log('na toceslsius')
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {

  console.log('estou na try try tryconvert')
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    console.log('Estou na Celsius', temperature)
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    console.log('Estou na Farenheit')
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    console.log('A ESCALA É ', scale)
    const temperature = this.state.temperature;
    console.log('Estou no Render da input', temperature)
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    console.log('celsius', celsius)

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}


export default Input;

