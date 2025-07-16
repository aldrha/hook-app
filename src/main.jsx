import React from 'react';
import ReactDOM from 'react-dom/client';
// import { CounterApp } from './01-useState/CounterApp';
// import { HooksApp } from './HooksApp';
import { CounterWithCutomHook } from './01-useState/CounterWithCutomHook';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterWithCutomHook />
    </React.StrictMode>
);
