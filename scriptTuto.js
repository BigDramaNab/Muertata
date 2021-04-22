var isFirstTimeTuto = false;
var textFirstPopup = 'Bienvenue dans le didacticiel';
var textSecondPopup = "Vous pouvez parler avec votre équipe dans les bulles (4 maximum)";
var textThirdPopup = "ou dans les zones d'échange";
var targetObjectTutoBubble ='Tutobubble';
var targetObjectTutoChat ='tutoChat';
var targetObjectTutoExplanation ='tutoExplanation';
var popUpExplanation = undefined;

















function launchTuto (){
    WA.openPopup(targetObjectTutoBubble, textFirstPopup, [
        {
            label: "Suite",
            className: "popUpElement",
            callback: (popup) => {
                popup.close();

                WA.openPopup(targetObjectTutoChat, textSecondPopup, [
                    {
                        label: "Suite",
                        className: "popUpElement",
                        callback: (popup1) => {
                            popup1.close();
                            WA.openPopup(targetObjectTutoChat, textThirdPopup, [
                    {
                        label: "Suite",
                        className: "popUpElement",
                        callback: (popup2) => {
                            popup2.close();
                            WA.openPopup("TutoFinal","N'oubliez pas que les écouteurs sont obligatoires !",[
                                {
                                    label: "Compris !",
                                    className : "success",callback:(popup3 => {
                                        popup3.close();
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
        popUpExplanation = WA.openPopup(targetObjectTutoExplanation, 'Avez vous besoin de revoir les explications ?', [
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
