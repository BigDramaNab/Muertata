WA.sendChatMessage('TEST SCRIPT JS DE 16h07', 'PIVOT');

let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('ZONETEST', () => {
    WA.openPopup("popupRectangle", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
};

// Close the popup when we leave the zone.
WA.onLeaveZone('ZONETEST', () => {
    helloWorldPopup.close();
});

WA.sendChatMessage('TEST numéro2 JS DE 16h07', 'PIVOT');

let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('ZONETEST2', () => {
    WA.sendChatMessage('Il voit la zone', 'PIVOT');[{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
};

// Close the popup when we leave the zone.
WA.onLeaveZone('ZONETEST2', () => {
    helloWorldPopup.close();
});