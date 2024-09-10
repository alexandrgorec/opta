import "./ChoosePlayer.css";

function ChoosePlayer({setPlayerId}){
	const firstPlayerClick  = () => setPlayerId(1);
	const SecondPlayerClick = () => setPlayerId(2);
	return(
	<div className='choosePlayer'>
		<div className='hero' onClick={firstPlayerClick}><p>Player1</p></div>
		<div className='hero' onClick={SecondPlayerClick}><p>Player2</p></div>
	</div>
)}

export default ChoosePlayer;