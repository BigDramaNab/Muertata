var isFirstTimeTuto = false;
var text1 = 'Bienvenue dans le didacticiel';
var text2 = "Vous pouvez communiquer avec votre équipe en vous croisant (une bulle apparaîtra)";
var text3 = "ou dans les zones d’échange (sol à damier)";
var text4 = "N’oubliez pas que les écouteurs sont obligatoires !";
var targetObjectTutoBubble1 ='TutoBubble1';
var targetObjectTutoBubble2a ='TutoBubble2a';
var targetObjectTutoBubble2b ='TutoBubble2b';
var targetObjectTutoBubble3 ='TutoBubble3';
var targetObjectTutoChat ='tutoChat';
var targetObjectTutoExplanation ='tutoExplanation';
var popUpExplanation = undefined;





function launchTuto (){
    WA.openPopup(targetObjectTutoBubble2a, text2, [
        {
            label: "Suite",
            className: "popUpElement",
            callback: (popup) => {
                popup.close();

             
                            WA.openPopup("TutoFinal","ou dans les zones d’échange avec sol à damier",[
                                {
                                    label: "Compris !",
                                    className : "success",callback:(popup1 => {
                                        popup1.close();
                                        WA.restorePlayerControl();
                                    })
                                }
                            ])
                        
                    

                
            }
        }
    ]);
    WA.disablePlayerControl();

}









WA.onEnterZone('PopupZone2', () => {
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

WA.onLeaveZone('PopupZone2', () => {
    if (popUpExplanation !== undefined) popUpExplanation.close();
    WA.removeBubble();
})


