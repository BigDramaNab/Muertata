WA.onEnterZone('violetta', () => {
    WA.openTab('https://www.bigdrama.fr/parfumdefamille/rapportlila');
})


WA.onEnterZone('iris', () => {
    WA.goToPage('www.bigdrama.fr/parfumdefamille/rapportdonovan');
    
});


WA.sendChatMessage('Bonjour, et bienvenue dans la maison !!', 'Alfred');


let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('alfred', () => {
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
WA.onLeaveZone('myZone', () => {
    helloWorldPopup.close();
});
  
    