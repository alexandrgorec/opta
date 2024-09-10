import "./ChatMessages.css";

function ChatMessages({messages=[],playerId}){
	return (
	<div className='chatMessages'>
	{
		messages.slice(-10).map( (message) => 
		<p className={message[0] === playerId ? 'rightMessage' : 'leftMessage'}>{message[1]}</p>)
	}
		</div>
);}

export default ChatMessages;