let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('ZONETEST', () => {
    WA.openPopup("myPopup1", 'Hello world!', [{
        label: "Close",
        className: "warning",
        callback: (popup) => {
            
 popup.close();
        }
    });
}]);