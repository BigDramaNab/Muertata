WA.sendChatMessage('TEST SCRIPT JS DE 16h07', 'PIVOT');

WA.onEnterZone('ZONETEST3', () => {
    WA.sendChatMessage("Hello! ZONE TEST 3", 'Mr Robot');
})

WA.onLeaveZone('ZONETEST3', () => {
    WA.sendChatMessage("Goodbye! ZONE TEST 3", 'Mr Robot');
})

