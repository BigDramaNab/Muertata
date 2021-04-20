WA.onEnterZone('ZONETEST', () => {
    WA.openPopup("popupRectangle", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
};

WA.onEnterZone('ZONETEST3', () => {
    WA.disablePlayerControls();
    WA.openPopup("myPopup1", 'myPopup1', [{
        label: "Got it!",
        className: "primary",
        callback: (popup) => {
            WA.restorePlayerControls();
            popup.close();
        }
    }]);
});



WA.sendChatMessage("Hello! ZONE TEST 3", 'Alfred');
})

WA.onLeaveZone('ZONETEST3', () => {
    WA.sendChatMessage("Goodbye tardif! ", 'Alfred');
})


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

let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('myZone', () => {
    WA.openPopup("popupRectangle", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
}]);