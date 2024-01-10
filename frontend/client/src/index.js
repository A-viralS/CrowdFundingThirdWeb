import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {ChainId, ThirdwebProvider} from '@thirdweb-dev/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// the thirdwebprovider will be the wrapper and will take the chainid 
<ThirdwebProvider desiredChainId={11155111}>

<Router>
    <App/>
    
</Router>


</ThirdwebProvider>
)