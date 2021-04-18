WA.sendChatMessage('TEST SCRIPT JS DE 19H14', 'PIVOT');


WA.onEnterZone('ZONETEST', () => {
    WA.disablePlayerControls();
    WA.openPopup("myPopup1", 'NIQUE TOI TA MERE PUTAIN', [{
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

WA.onEnterZone('myZone', () => {
    WA.disablePlayerControls();
    WA.openPopup("myPopup2", 'NIQUE TOI TA GRAND MERE PUTAIN', [{
        label: "Got it!",
        className: "primary",
        callback: (popup) => {
            WA.restorePlayerControls();
            popup.close();
        }
    }]);
});