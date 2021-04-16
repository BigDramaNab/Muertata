WA.onEnterZone('violetta', () => {
    WA.sendChatMessage("Hello!", 'Afred');
})

WA.onEnterZone('iris', () => {
    WA.disablePlayerControls();
    WA.openPopup("popupRectangle", 'Merci de lire ce message message!', [{
        label: "Jai lu",
        className: "primary",
        callback: (popup) => {
            WA.restorePlayerControls();
            popup.close();
        }
    }]);
});


WA.sendChatMessage('Bonjour et bienvenue dans la maison !', 'Alfred');