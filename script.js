WA.sendChatMessage('TEST SCRIPT JS DE 17H26', 'PIVOT');

WA.onEnterZone('ZONETEST3', () => {
    WA.sendChatMessage("Hello! ZONE TEST 3", 'Alfred');
})

WA.onLeaveZone('ZONETEST3', () => {
    WA.sendChatMessage("Goodbye tardif! ", 'Alfred');
})

