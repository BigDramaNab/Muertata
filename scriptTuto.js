var isFirstTimeTuto = false;
var text1 = 'Bienvenue dans le didacticiel';
var text2 = "Vous pouvez communiquer avec votre équipe en vous croisant ";
var text3 = "une bulle apparaîtra autour de vous";
var text4 = "N’oubliez pas que les écouteurs sont obligatoires !";
var text9 = "Bienvenue dans le pavillon des gardiens.";
var text10 = "Le château a brûlé, mais la famille habite ici. Il y a des indices partout. ";
var targetObjectTutoBubble1 ='TutoBubble1';
var targetObjectTutoBubble2a ='TutoBubble2a';
var targetObjectTutoBubble2b ='TutoBubble2b';
var targetObjectTutoBubble2c ='TutoBubble2c';
var targetObjectTutoBubble3 ='TutoBubble3';
var targetObjectTutoBubble6 ='TutoBubble6';
var targetObjectTutoBubble7 ='TutoBubble7';
var targetObjectTutoBubble8 ='TutoBubble8';
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

                WA.openPopup(targetObjectTutoBubble2b, text3, [
                    {
                        label: "Suite",
                        className: "popUpElement",
                        callback: (popup1) => {
                            
                            popup1.close();
                            WA.openPopup("TutoBubble2c","ou dans les zones d’échange avec leur sol à damier",[
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





WA.onEnterZone('PopupZone3', () => {
    currentPopup =  WA.openPopup("TutoBubble3","N’oubliez pas que les écouteurs sont obligatoires !",[
        {
            label: "J'ai compris",
            className: "popUpElement",
            callback: (popup => {
                popup.close();
            })
        }]);
})
WA.onLeaveZone('PopupZone3', closePopUp)





WA.onEnterZone('PopupZone1', () => {
    WA.openPopup("TutoBubble1","Bienvenue dans le didacticiel !",[
        {
            label: "Suite",
            className: "popUpElement",
            callback: (popup => {
                popup.close();
            })
        }]);
})
WA.onLeaveZone('PopupZone1', closePopUp)





WA.onEnterZone('PopupZone6', () => {
    currentPopup =  WA.openPopup("TutoBubble6","Voici l’arbre généalogique des Florimond à garder sous la main",[
        {
            label: "OUVRIR",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab('https://www.bigdrama.fr/parfumdefamille/j06c/');
            })
        }]);
})
WA.onLeaveZone('PopupZone6', closePopUp)



WA.onEnterZone('PopupZone7', () => {
    currentPopup =  WA.openPopup("TutoBubble7","Prenez bien connaissance du compte-rendu du commissaire",[
        {
            label: "OUVRIR",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab('https://www.bigdrama.fr/parfumdefamille/z01//');
            })
        }]);
})
WA.onLeaveZone('PopupZone7', closePopUp)



WA.onEnterZone('PopupZone8', () => {
    currentPopup =  WA.openPopup("TutoBubble8","Bravo vous avez terminé le didacticiel. Vous pouvez entrer dans le pavillon et explorer les indices.",[
        {
            label: "Bonne enquête !",
            className: "popUpElement",
            callback: (popup => {
                popup.close();
            })
        }]);
})
WA.onLeaveZone('PopupZone8', closePopUp)



