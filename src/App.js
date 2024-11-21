import React from 'react';
import ChoosePlayer from './ChoosePlayer';
import AppWrapper from './AppWrapper';
import "./App.css";

function App({ ws, changeState, imgServer }) {
	const [playerId, setPlayerId] = React.useState(null);
	let content = playerId === null
		? <ChoosePlayer setPlayerId={setPlayerId} ws={ws}/>
		: <AppWrapper playerId={playerId} ws={ws} changeState={changeState} imgServer={imgServer}/>;
	return (
		<div style={{ backgroundImage: `url(${imgServer}?img=background.png)` }} className="app">
		{content}
		</div>
	);
}

export default App;
