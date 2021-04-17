WA.sendChatMessage('Bienvenue dans la maison.Toute la famille est actuellement au commissariat. Dailleurs, lun dentre eux voudrait vous contacter par téléphone : rendez-vous tous immédiatement dans la pièce centrale de la maison pour lui parler, avant de partir à la recherche dindices.', 'Alfred');

WA.onEnterZone('alfred', () => {
    WA.sendChatMessage("Hello!", 'Mr Robot');
})