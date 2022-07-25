import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const divWithRootId = document.getElementById('root');
if (divWithRootId) {
    const root = ReactDOM.createRoot(divWithRootId);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
}
