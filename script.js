WA.sendChatMessage('Bienvenueee', 'Alfred');

WA.onEnterZone('test', () => {
    WA.sendChatMessage('what', 'Alfred');
})

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('test', () => {
    WA.openPopup("popupRectangle", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
}]);

// Close the popup when we leave the zone.
WA.onLeaveZone('alfred', () => {
    helloWorldPopup.close();
});

