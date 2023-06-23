// import React from 'react';
// import ReactDOM from 'react-dom';
// import APP from './APP';

// ReactDOM.render(<APP />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './APP.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

