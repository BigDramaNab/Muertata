var isFirstTimeTuto = false;
var text1 = 'Bienvenue dans le didacticiel';
var text2 = "Vous pouvez communiquer avec votre équipe en vous croisant ";
var text3 = "une bulle apparaîtra autour de vous";
var text4 = "N’oubliez pas que les écouteurs sont obligatoires !";
var text9 = "Bienvenue dans le pavillon des gardiens.";
var text10 = "Le château a brûlé, mais la famille habite ici. Il y a des indices partout. ";
var targetObjectTutoBubble9 ='TutoBubble9';
var targetObjectTutoBubble10 ='TutoBubble10';
var targetObjectTutoBubble11 ='TutoBubble11';
var targetObjectTutoBubble12 ='TutoBubble12';
var targetObjectTutoBubble13 ='TutoBubble13';
var targetObjectTutoBubble14 ='TutoBubble14';
var targetObjectTutoChat ='tutoChat';
var targetObjectTutoExplanation ='tutoExplanation';
var popUpExplanation = undefined;




function launchTuto (){
    WA.openPopup(targetObjectTutoBubble9, text9, [
        {
            label: "Suite",
            className: "popUpElement",
            callback: (popup) => {
                popup.close();

                WA.openPopup(targetObjectTutoBubble10, text10, [
                    {
                        label: "Suite",
                        className: "popUpElement",
                        callback: (popup1) => {
                            
                            popup1.close();
                            WA.openPopup("TutoBubble11","Si vous avez un problème, allez voir la police dans la zone commissaire.",[
                                {
                                    label: "Compris !",
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




WA.onEnterZone('PopupZone9', () => {
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



WA.onEnterZone('PopupZone10', () => {
    currentPopup =  WA.openPopup("TutoBubble12","N'allez vers le commissariat que si vous en avez reçu l'autorisation !",[
        {
            label: "J'ai compris",
            className: "popUpElement",
            callback: (popup => {
                popup.close();
            })
        }]);
})
WA.onLeaveZone('PopupZone10', closePopUp)



WA.onEnterZone('PopupZone13', () => {
    currentPopup =  WA.openPopup("TutoBubble13","Voici l’arbre généalogique des Florimond à garder sous la main.",[
        {
            label: "OUVRIR",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab('https://www.bigdrama.fr/parfumdefamille/j06c/');
            })
        }]);
})
WA.onLeaveZone('PopupZone13', closePopUp)



WA.onEnterZone('PopupZone14', () => {
    currentPopup =  WA.openPopup("TutoBubble14","Prenez bien connaissance du compte-rendu du commissaire.",[
        {
            label: "OUVRIR",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab('https://www.bigdrama.fr/parfumdefamille/z01//');
            })
        }]);
})
WA.onLeaveZone('PopupZone14', closePopUp)



function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}