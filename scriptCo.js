var isFirstTimeTuto = false;
var text18 = "Bienvenue au commissariat.";
var text19 = "Il est temps de comprendre ce qui s'est passé le jour du mariage.";
var targetObjectTutoBubble18 ='TutoBubble18';
var targetObjectTutoBubble19 ='TutoBubble19';
var targetObjectTutoBubble20 ='TutoBubble20';
var targetObjectTutoChat ='tutoChat';
var targetObjectTutoExplanation ='tutoExplanation';
var popUpExplanation = undefined;



WA.onEnterZone('exitZoneA', () => {
    WA.goToPage('https://www.bigdrama.fr/parfumdefamille/explicationsa');
})

WA.onEnterZone('exitZoneB', () => {
    WA.goToPage('https://www.bigdrama.fr/parfumdefamille/explicationsb');
})

WA.onEnterZone('exitZoneC', () => {
    WA.goToPage('https://www.bigdrama.fr/parfumdefamille/explicationsc');
})

WA.onEnterZone('exitZoneD', () => {
    WA.goToPage('https://www.bigdrama.fr/parfumdefamille/explicationsd');
})

WA.onEnterZone('exitZoneE', () => {
    WA.goToPage('https://www.bigdrama.fr/parfumdefamille/explicationse');
})




function launchTuto (){
    WA.openPopup(targetObjectTutoBubble18, text18, [
        {
            label: "Suite",
            className: "popUpElement",
            callback: (popup) => {
                popup.close();

                WA.openPopup(targetObjectTutoBubble19, text19, [
                    {
                        label: "Suite",
                        className: "popUpElement",
                        callback: (popup1) => {
                            
                            popup1.close();
                            WA.openPopup("TutoBubble20","Écoutez les archives audio, regardez les vidéos et échangez avec votre équipe.",[
                                {
                                    label: "J'y vais !",
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




WA.onEnterZone('PopupZone20', () => {
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


function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
