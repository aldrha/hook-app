import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCutomHook } from './01-useState/CounterWithCutomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultiplesCustomHooks } from './03-examples/MultiplesCustomHooks';
// import { FocuesScreen } from './04-useRef/FocuesScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
import { CallbackHook } from './06-memos/CallbackHook';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    //<React.StrictMode>
    <CallbackHook />
    //</React.StrictMode>
);
