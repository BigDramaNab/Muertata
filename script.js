WA.sendChatMessage('TEST SCRIPT JS DE 18H05', 'PIVOT');


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