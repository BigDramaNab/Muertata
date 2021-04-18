WA.onEnterZone('ZONETEST', () => {
    WA.disablePlayerControls();
    WA.openPopup("POPUP", 'This is an imporant message!', [{
        label: "Got it!",
        className: "primary",
        callback: (popup) => {
            WA.restorePlayerControls();
            popup.close();
        }
    }]);
});