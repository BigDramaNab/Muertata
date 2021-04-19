WA.sendChatMessage("Bienvenue! Veuillez suivre le didacticiel afin de profiter de l'experience", 'Alfred');


WA.onEnterZone('zoneEchange', () => {
WA.sendChatMessage("Vous entrez dans la zone d'échange", 'Alfred');
})

WA.onLeaveZone('zoneEchange', () => {
    WA.sendChatMessage("Vous quittez la zone d'échange ", 'Alfred');
})


