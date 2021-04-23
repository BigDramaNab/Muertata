var isFirstTimeTuto = false;
var text18 = "Bienvenue au commissariat.";
var text19 = "Il est temps de comprendre ce qui s'est passé le jour du mariage.";
var targetObjectTutoBubble18 ='TutoBubble18';
var targetObjectTutoBubble19 ='TutoBubble19';
var targetObjectTutoBubble20 ='TutoBubble20';
var targetObjectTutoBubble24 ='TutoBubble24';
var targetObjectTutoBubble22 ='TutoBubble22';
var targetObjectTutoBubble21 ='TutoBubble21';
var targetObjectTutoBubble21a ='TutoBubble21a';
var targetObjectTutoBubble21b ='TutoBubble21b';
var targetObjectTutoBubble21c ='TutoBubble21c';
var targetObjectTutoBubble21d ='TutoBubble21d';
var targetObjectTutoBubble21e ='TutoBubble21e';
var targetObjectTutoChat ='tutoChat';
var targetObjectTutoExplanation ='tutoExplanation';
var popUpExplanation = undefined;



WA.onEnterZone('PopupZone21a', () => {
    currentPopup =  WA.openPopup("TutoBubble21","Voici votre rapport d'enquête à remplir à l'aide des indices présents dans le commissariat.",[
        {
            label: "OUVRIR",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab('https://docs.google.com/document/d/1UcJgXgf2oXVQjRFh8VnQ_wcqB89qF0Gx5bNmbBRkypg/edit?usp=sharing');
            })
        }]);
})
WA.onLeaveZone('PopupZone21a', closePopUp)


WA.onEnterZone('PopupZone21b', () => {
    currentPopup =  WA.openPopup("TutoBubble21","Voici votre rapport d'enquête à remplir à l'aide des indices présents dans le commissariat.",[
        {
            label: "OUVRIR",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab('https://docs.google.com/document/d/1OfPIkOuWaJc_DnN8D4xY-FilwjYy8UHxB_hM7WKIuyM/edit?usp=sharing');
            })
        }]);
})
WA.onLeaveZone('PopupZone21b', closePopUp)


WA.onEnterZone('PopupZone21c', () => {
    currentPopup =  WA.openPopup("TutoBubble21","Voici votre rapport d'enquête à remplir à l'aide des indices présents dans le commissariat.",[
        {
            label: "OUVRIR",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab('https://docs.google.com/document/d/1NVEHjWr8jyWLo_ormDmP4KCZRPe7RmPzVjdIsYApRUc/edit?usp=sharing');
            })
        }]);
})
WA.onLeaveZone('PopupZone21c', closePopUp)


WA.onEnterZone('PopupZone21d', () => {
    currentPopup =  WA.openPopup("TutoBubble21","Voici votre rapport d'enquête à remplir à l'aide des indices présents dans le commissariat.",[
        {
            label: "OUVRIR",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab('https://docs.google.com/document/d/111y8aWje2_Ez_kHnfErNV0uHX9wd9SFY40uMRKfDlvY/edit?usp=sharing');
            })
        }]);
})
WA.onLeaveZone('PopupZone21d', closePopUp)


WA.onEnterZone('PopupZone21e', () => {
    currentPopup =  WA.openPopup("TutoBubble21","Voici votre rapport d'enquête à remplir à l'aide des indices présents dans le commissariat.",[
        {
            label: "OUVRIR",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab('https://docs.google.com/document/d/1BWLDsUHp7LmQFaTXXkT4QlTeg1jwJk_BZMOcNKf2TqQ/edit?usp=sharing');
            })
        }]);
})
WA.onLeaveZone('PopupZone21e', closePopUp)





WA.onEnterZone('PopupZone22', () => {
    currentPopup =  WA.openPopup("TutoBubble22","Toutes les archives audio sont compilées ici.",[
        {
            label: "OUVRIR",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab('https://www.bigdrama.fr/parfumdefamille/a00');
            })
        }]);
})
WA.onLeaveZone('PopupZone22', closePopUp)



WA.onEnterZone('PopupZone24', () => {
    currentPopup =  WA.openPopup("TutoBubble24","Tous les interrogatoires sont compilés ici.",[
        {
            label: "OUVRIR",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab('https://www.bigdrama.fr/parfumdefamille/v00/');
            })
        }]);
})
WA.onLeaveZone('PopupZone24', closePopUp)

               
               

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
