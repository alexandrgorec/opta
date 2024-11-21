function wsSignalsClient(event, body, changeState) {
    switch (event) {
        case "sendAllMessages":
            changeState.ChatMessages([...body]);
            break;
        case "sendPlayerHand":
            changeState.Hand([...body]);
            break;
        case "sendStepPlayerId":
            changeState.stepActive(body);
            break;
        case "sendPlayerArmory":
            changeState[`player${body.playerId}`](body);
            console.log(body);
            break;
        case "sendGameProcess":
            //console.log(body);
            changeState.GameProcess([...body]);
            break;
        case "sendCheckEndGame":
            changeState.loosers(body);
            break;
    }
}

export default wsSignalsClient;