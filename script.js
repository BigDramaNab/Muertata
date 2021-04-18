WA.sendChatMessage('TEST SCRIPT JS DE 18H08', 'PIVOT');


WA.onEnterZone('ZONETEST', () => {
    WA.disablePlayerControls();
    WA.openPopup("myPopup2", 'This is an imporant message!', [{
        label: "Got it!",
        className: "primary",
        callback: (popup) => {
            WA.restorePlayerControls();
            popup.close();
        }
    }]);
});




WA.onEnterZone('ZONETEST3', () => {
WA.sendChatMessage("Tu as le droit d'aller la", 'Alfred');
})

WA.onLeaveZone('ZONETEST3', () => {
    WA.sendChatMessage("Goodbye tardif! ", 'Alfred');
})

var zoneName = "popUpGoToPageZone";
var urlPricing = "https://workadventu.re/pricing";
var urlGettingStarted = "https://workadventu.re/getting-started";
var isCoWebSiteOpened =  false;

WA.onChatMessage((message => {
    WA.sendChatMessage('Poly Parrot says: "'+message+'"', 'Poly Parrot');
}));