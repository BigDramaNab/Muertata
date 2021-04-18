let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('ZONETEST', () => {
    WA.openPopup("myPopup1", 'C PLUS POLI COMME CA?', [{
        label: "Close",
        className: "warning",
        callback: (popup) => {
            
 popup.close();
        }
    });
};