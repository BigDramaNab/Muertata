/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

!doctype html>
<html lang="en">
    <head>
        <script src="https://play.workadventu.re/iframe_api.js"></script>
    </head>
    <body>
    </body>
</html>


// You can write your WorkAdventure script here, if any.
// The "WA" global object is available from anywhere.

<script>

console.log('Script started successfully');
WA.openCoWebSite('https://workadventu.re');


WA.sendChatMessage('Scripttest fonctionne bien', 'Mr Robot');


WA.sendChatMessage('TEST SCRIPT JS DE 16h07', 'PIVOT');

WA.onEnterZone('ZONETEST3', () => {
    WA.sendChatMessage("Hello! ZONE TEST 3", 'Mr Robot');
})

WA.onLeaveZone('ZONETEST3', () => {
    WA.sendChatMessage("Goodbye! ZONE TEST 3", 'Mr Robot');
})

let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('ZONETEST', () => {
    WA.openPopup("popupRectangle", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
};

// Close the popup when we leave the zone.
WA.onLeaveZone('ZONETEST', () => {
    helloWorldPopup.close();
});

WA.sendChatMessage('TEST numéro2 JS DE 16h07', 'PIVOT');

let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('ZONETEST2', () => {
    WA.sendChatMessage('Il voit la zone', 'PIVOT');[{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
};

// Close the popup when we leave the zone.
WA.onLeaveZone('ZONETEST2', () => {
    helloWorldPopup.close();
});