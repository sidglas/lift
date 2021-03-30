import React from 'react';
import ReactDOM from 'react-dom';
import { Link , BrowserRouter} from 'react-router-dom';

import './index.css';
//
import Input from './Input'
import CalculatorDaDocumentacao from './CalculatorDaDocumentacao';
import CalculatorFunction from './CalculatorFunction';

ReactDOM.render(
  <React.StrictMode>
    Input
    <Input />
    <br />
    
    <BrowserRouter basename="/">
      <Link to="https://www.freecodecamp.org/news/react-router-tutorial">About</Link>
    </BrowserRouter>

    https://reactrouter.com/web/api/Link
    https://www.freecodecamp.org/news/react-router-tutorial/
    <br />
    CalculatorDaDocumentacao
    <CalculatorDaDocumentacao />
    <br /><br />
    CalculatorFunction
    <CalculatorFunction />
  </React.StrictMode>,
  document.getElementById('root')
);

