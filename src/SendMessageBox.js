import "./SendMessageBox.css";


function SendMessageBox({ playerId, ws }) {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        let messageElement = document.querySelector('.sendMessage');
        let message = messageElement.value;
        if (message != '') {
            let wsMessage = {};
            wsMessage.event = "sendMessage";
            wsMessage.body = {
                playerId,
                message,
            };
            ws.send(JSON.stringify(wsMessage));
            messageElement.value = '';
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className='sendMessage' type='text' />
            <div className='placeHolder'>
                <label>Отправить сообщение</label>
            </div>
        </form>
    );
}

export default SendMessageBox;