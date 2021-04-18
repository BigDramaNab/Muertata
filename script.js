WA.sendChatMessage('TEST SCRIPT JS DE 17H38', 'PIVOT');


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
}]);
WA.onLeaveZone('ZONETEST', () => {
    helloWorldPopup.close();
});

