import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import wsSignalsClient from './wsSignalsClient';

const ws = new WebSocket(`ws://${window.location.hostname}:9000`);
const imgServer = `http://${window.location.hostname}:3001/img`;
ws.binaryType = "arraybuffer";
const changeState = {};
ws.onmessage = (message) => {
  let getMessage = JSON.parse(message.data)
  wsSignalsClient(getMessage.event, getMessage.body, changeState);
}
// ws.onopen =  () => {};
ws.onclose = () => { alert("Соединение разорвано, обновите страницу!") };
const root = ReactDOM.createRoot(document.getElementById('root'));
window.oncontextmenu = (evt) => {evt.preventDefault()};
root.render(
  <App ws={ws} changeState={changeState} imgServer={imgServer}/>
);
