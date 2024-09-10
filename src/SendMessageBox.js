import "./SendMessageBox.css";
import axios from "axios";


const enterCode = 13;
const urlSendMessage = 'http://localhost:3001/sendmessage';

function SendMessageBox({playerId, setMessages, ws}){
    const handleKeyDown = async (evt) => {
        console.log("start function")
        if ( evt.keyCode === enterCode ){
            let messageElement = document.querySelector('.sendMessage');
            let message = messageElement.value;
            console.log(message);
            if (message!=''){
                let response = await axios.post(urlSendMessage,[playerId,message]);
                setMessages(response.data);
                messageElement.value = '';
            }
        }
    }

    return (
    <div>
        <input className='sendMessage' type='text' onKeyDown={handleKeyDown}/>
        <div className='placeHolder'>
        <label>Отправить сообщение</label>
        </div>
    </div>
);}

export default SendMessageBox;