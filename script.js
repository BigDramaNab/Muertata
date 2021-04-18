WA.sendChatMessage('TEST SCRIPT JS DE 17H28', 'PIVOT');

WA.onEnterZone('ZONETEST3', () => {
    WA.openPopup("popupRectangle", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
};

