var zoneOfficeName = "popupOfficeZone";
var zoneEventName = "popupEventZone";
var zoneSchoolName = "popupSchoolZone";
var zoneTCMName = "popupTCMZone";

var urlPricing = "https://www.bigdrama.fr/parfumdefamille/z01/";
var urlSchoolOffer = "https://workadventu.re/school-offer";
var urlEvent = "https://workadventu.re/events";
var currentPopup = undefined;

WA.onEnterZone(zoneOfficeName, () => {
   currentPopup =  WA.openPopup("popUpOffice","Cliquez pour faire apparaitre votre brief dans un nouvel onglet ",[
        {
            label: "Afficher brief",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(urlPricing);
            })
        }]);
})



WA.onEnterZone(zoneTCMName, () => {
    WA.disablePlayerControls();
    currentPopup =  WA.openPopup("popUpTCM","Equipez vous d'un casque pour continuer!",[{
        label: "Got it!",
        className: "popUpElement",
        callback: (popup) => {
            WA.restorePlayerControls();
            popup.close();
               }
    }]);
});

WA.onEnterZone(zoneTCMName, () => {
    WA.disablePlayerControls();
    currentPopup = WA.openPopup("popUpTCM", 'This is an imporant message!', [{
        label: "Got it!",
        className: "primary",
        callback: (popup) => {
            WA.restorePlayerControls();
            popup.close();
        }
    }]);
});

WA.onEnterZone(zoneSchoolName, () => {
    currentPopup =  WA.openPopup("popUpSchool","WorkAdventure is free for teachers a the moment ! Take advantage of our offer ",[
        {
            label: "See the offer",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(urlSchoolOffer);
            })
        }]);
})

WA.onLeaveZone(zoneSchoolName, closePopUp)

WA.onLeaveZone(zoneTCMName, closePopUp)

WA.onLeaveZone(zoneEventName, closePopUp)

WA.onLeaveZone(zoneOfficeName, closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
