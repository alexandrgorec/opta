import React from 'react';
import './App.css';
import ChoosePlayer from './ChoosePlayer';
import Chat from './Chat';


function App({ws}) {
	ws.onopen =  () => {};
	ws.onclose = () => {alert("close")};
	const [playerId,setPlayerId] = React.useState(null);
	let content = playerId === null 
	? <ChoosePlayer setPlayerId={setPlayerId}/> 
	: <Chat player={playerId} ws={ws}/>;
	return (
		content
	);}

export default App;
