var isFirstTimeTuto = false;
var textFirstPopup = 'Bonjour, voici comment communiquer, vous pouvez être 4 maximum par bulle';
var textSecondPopup = 'Vous pouvez aussi utiliser le chat pour communiquer! ';
var targetObjectTutoBubble ='Tutobubble';
var targetObjectTutoChat ='tutoChat';
var targetObjectTutoExplanation ='tutoExplanation';
var popUpExplanation = undefined;



WA.sendChatMessage('Bienvenue dans le didacticiel', 'Police');













function launchTuto (){
    WA.openPopup(targetObjectTutoBubble, textFirstPopup, [
        {
            label: "Next",
            className: "popUpElement",
            callback: (popup) => {
                popup.close();

                WA.openPopup(targetObjectTutoChat, textSecondPopup, [
                    {
                        label: "Open Chat",
                        className: "popUpElement",
                        callback: (popup1) => {
                            WA.sendChatMessage("Vous pouvez parler ici!", 'La police');
                            popup1.close();
                            WA.openPopup("TutoFinal","Vous avez compris",[
                                {
                                    label: "Got it!",
                                    className : "success",callback:(popup2 => {
                                        popup2.close();
                                        WA.restorePlayerControl();
                                    })
                                }
                            ])
                        }
                    }

                ])
            }
        }
    ]);
    WA.disablePlayerControl();

}


WA.onEnterZone('popupZone', () => {
    WA.displayBubble();
    if (!isFirstTimeTuto) {
        isFirstTimeTuto = true;
        launchTuto();
    }
    else {
        popUpExplanation = WA.openPopup(targetObjectTutoExplanation, 'Avez vous besoin de revoir les explications?', [
            {
                label: "Non",
                className: "error",
                callback: (popup) => {
                    popup.close();
                }
            },
            {
                label: "Oui",
                className: "success",
                callback: (popup) => {
                    popup.close();
                    launchTuto();
                }
            }
        ])
    }
});

WA.onLeaveZone('popupZone', () => {
    if (popUpExplanation !== undefined) popUpExplanation.close();
    WA.removeBubble();
})
