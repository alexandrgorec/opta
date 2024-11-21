import "./ChoosePlayer.css";


function ChoosePlayer({ setPlayerId, ws }) {
	const sendPlayerId = (playerId) => {
		let wsMessage = {};
		wsMessage.event = "sendPlayerId";
		wsMessage.body = {playerId};
		ws.send(JSON.stringify(wsMessage));
	}
	const firstPlayerClick = () => {
		const playerId = 1;
		setPlayerId(playerId);
		sendPlayerId(playerId);
	}
	const SecondPlayerClick = () => {
		const playerId = 2;
		setPlayerId(playerId);
		sendPlayerId(playerId);
	}


	return (
		<div className='choosePlayer'>
			<div className='hero' onClick={firstPlayerClick}><p>Player1</p></div>
			<div className='hero' onClick={SecondPlayerClick}><p>Player2</p></div>
		</div>
	)
}

export default ChoosePlayer;