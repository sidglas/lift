import React from 'react';
import ReactDOM from 'react-dom';
import { Link , BrowserRouter} from 'react-router-dom';

import './index.css';
//
import CalculatorClass from './CalculatorClass';
import CalculatorFunction from './CalculatorFunction';

ReactDOM.render(
  <React.StrictMode>
    
    <br />
    Calculator Using Class (the way it is on reactjs.org)
    <CalculatorClass />
    <br /><br />
    CalculatorFunction
    <CalculatorFunction />

    <BrowserRouter basename="/">
      <Link to="https://www.freecodecamp.org/news/react-router-tutorial">About</Link>
    </BrowserRouter>

    https://reactrouter.com/web/api/Link
    https://www.freecodecamp.org/news/react-router-tutorial/


  </React.StrictMode>,
  document.getElementById('root')
);

