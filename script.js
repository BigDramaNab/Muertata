WA.sendChatMessage('TEST SCRIPT JS DE 17H38', 'PIVOT');


WA.onEnterZone('ZONETEST3', () => {
WA.sendChatMessage("Tu as le droit d'aller la", 'Alfred');
})

WA.onLeaveZone('ZONETEST3', () => {
    WA.sendChatMessage("Goodbye tardif! ", 'Alfred');
})

WA.onEnterZone('ZONETEST', () => {
WA.sendChatMessage("Tu n'as pas le droit d'être ici", 'Alfred');
})

WA.onLeaveZone('ZONETEST', () => {
    WA.sendChatMessage("Goodbye tardif! ", 'Alfred');
})