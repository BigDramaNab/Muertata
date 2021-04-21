var zoneOfficeName = "popupOfficeZone";
var zoneEventName = "popupEventZone";
var zoneSchoolName = "popupSchoolZone";
var zoneTCMName = "popupTCMZone";

var urlPricing = "https://www.bigdrama.fr/parfumdefamille/z01/";
var urlSchoolOffer = "https://workadventu.re/school-offer";
var urlEvent = "https://workadventu.re/events";
var currentPopup = undefined;

WA.onEnterZone(zoneOfficeName, () => {
   currentPopup =  WA.openPopup("popUpOffice","Ici un petit cadeau de l'amour, Cliquez pour faire apparaitre votre brief dans un nouvel onglet ",[
        {
            label: "Afficher brief",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(urlPricing);
            })
        }]);
})

WA.onEnterZone(zoneEventName, () => {
    currentPopup =  WA.openPopup("popUpEvent","You can create your own Event in WorkAdventure",[
        {
            label: "See the event page",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(urlEvent);
            })
        }]);
})

WA.onEnterZone(zoneTCMName, () => {
    currentPopup =  WA.openPopup("popUpTCM","A tout moment vous pouvez communiquer avec les membres de votre équipe ",[]);
})


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
