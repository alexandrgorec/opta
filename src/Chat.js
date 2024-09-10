import "./Chat.css";
import React, { useEffect } from 'react';
import ChatMessages from './ChatMessages';
import SendMessageBox from './SendMessageBox';

function Chat( {playerId, ws} ){
	const [messages,setMessages] = React.useState([]);
	useEffect( () => 
		ws.on("message", (message) => {
			setMessages(JSON.parse(message.data));	
		})
	)
	return(
	<>
		<ChatMessages messages={messages} player={playerId}/>
		<SendMessageBox player={playerId} setMessages={setMessages} ws={ws}/>
	</>
);}

export default Chat;