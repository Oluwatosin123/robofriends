
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots'

ReactDOM.render(
  <React.StrictMode>
    <div>
       <Card id={robots[0]} name={robots[0].name} email={robots[0].email}/>
       <Card id={robots[1]} name={robots[1].name} email={robots[1].email}/>
       <Card id={robots[2]} name={robots[2].name} email={robots[2].email}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
