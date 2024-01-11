import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import App from './App'; // Make sure to import your App component
import "./index.css";
import { StateContextProvider } from './context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // the ThirdwebProvider will be the wrapper and will take the chainId
  <ThirdwebProvider desiredChainId={11155111}>
    <Router>
      <StateContextProvider>
      <App />
      </StateContextProvider>
      
    </Router>
  </ThirdwebProvider>
);
