WA.sendChatMessage('TEST SCRIPT JS DE 16h07', 'PIVOT');

WA.onEnterZone('ZONETEST3', () => {
    WA.sendChatMessage("Hello! ZONE TEST 3", 'Mr Robot');
})

WA.onLeaveZone('ZONETEST3', () => {
    WA.sendChatMessage("Goodbye! ZONE TEST 3", 'Mr Robot');
})

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