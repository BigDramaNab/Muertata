WA.sendChatMessage('TEST SCRIPT JS DE 17H53', 'PIVOT');


let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('ZONETEST', () => {
    WA.openPopup("myPopup1", 'je mérite des nuggets!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
}]);