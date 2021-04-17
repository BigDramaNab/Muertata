WA.sendChatMessage('Bienvenue', 'Alfred');

WA.onEnterZone('test', () => {
    WA.sendChatMessage("Hello!", 'Mr Robot');
    WA.disablePlayerControls();
})