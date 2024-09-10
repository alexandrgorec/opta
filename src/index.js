import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { io } from "socket.io-client";

const ws = new io('ws://localhost:9000');
//ws.binaryType = "arraybuffer";
//ws.onmessage = (message) => {console.log(message.data)}
ws.on("hello", () => {console.log("eventHello")} );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App ws={ws}/>
  );
