WA.sendChatMessage('Bienvenue dans la maison.Toute la famille est actuellement au commissariat.', 'Alfred');

WA.onEnterZone('test', () => {
    WA.sendChatMessage("Hello!", 'Mr Robot');
})