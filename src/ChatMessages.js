import "./ChatMessages.css";
import { useState } from 'react';

function ChatMessages({ playerId, changeState }) {
	const [messages, setMessages] = useState([]);
	changeState.ChatMessages = setMessages;
	return (
		<div className='chatMessages'>
			{
				messages.map((message) =>
					<p key={message.key} className={`${message.playerId === playerId ? 'rightMessage' : 'leftMessage'} ${message.playerId === 0 ? 'systemMessage' : ''} `}>{message.message}</p>)
			}
		</div>
	);
}


export default ChatMessages;