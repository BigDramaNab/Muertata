WA.sendChatMessage('TEST SCRIPT JS DE 17H58', 'PIVOT');


WA.onEnterZone('ZONETEST', () => {
    WA.disablePlayerControls();
    WA.openPopup("myPopup1", 'This is an imporant message!', [{
        label: "Got it!",
        className: "primary",
        callback: (popup) => {
            WA.restorePlayerControls();
            popup.close();
        }
    }]);
});