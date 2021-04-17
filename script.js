WA.sendChatMessage('Hello world', 'Alfred');




// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('violetta', () => {
    WA.openPopup("popup", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
}]);

// Close the popup when we leave the zone.
WA.onLeaveZone('violetta', () => {
    helloWorldPopup.close();
});