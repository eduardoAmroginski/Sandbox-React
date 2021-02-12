import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';



const ExempleBootstrap5 = () => {
    return (
        ReactDOM.render(
            <React.StrictMode>
              <App />
            </React.StrictMode>,
            document.getElementById('root'),
        )
    )
}

export default ExempleBootstrap5;
