import "./Chat.css";
import ChatMessages from './ChatMessages';
import SendMessageBox from './SendMessageBox';

function Chat({ playerId, ws , changeState}) {
	return (
		<div className="chat">
			<ChatMessages playerId={playerId} ws={ws} changeState={changeState} />
			<SendMessageBox playerId={playerId} ws={ws} />
		</div>
	);
}

export default Chat;