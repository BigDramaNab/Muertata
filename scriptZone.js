WA.sendChatMessage("Bienvenue dans le didacticiel, Veuillez le suivre attentivement afin de profiter au mieux de l'experience", 'Alfred');


WA.onEnterZone('zoneEchange', () => {
WA.sendChatMessage("Vous entrez dans la zone d'échange, cliquez dans la map pour reprendre votre exploration", 'Alfred');
})

WA.onLeaveZone('zoneEchange', () => {
    WA.sendChatMessage("Vous quittez la zone d'échange, n'hésitez pas à me faire signe si vous rencontrez le moindre problème", 'Alfred');
})


WA.onEnterZone('zoneErreurPorte', () => {
WA.sendChatMessage("Attention, vous ne semblez pas vous rendre vers la porte correspondant à votre équipe!", 'Alfred');
})