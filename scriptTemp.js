
WA.sendChatMessage('TEST SCRIPT JS DE 21H10 ET CA CA MARCHE', 'PIVOT');





WA.onChatMessage((message => {
    WA.sendChatMessage('Poly Parrot says: "'+message+'"', 'Poly Parrot');
}));

WA.onEnterZone(zoneName, () => {
    WA.openPopup("myPopup","Open Links",[
        {
            label: "Open Tab",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(urlPricing);
                popup.close();
            })
        },
        {
            label: "Go To Page", className : "popUpElement",
            callback:(popup => {
                WA.goToPage(urlPricing);
                popup.close();
            })

        }
        ,
        {
            label: "openCoWebSite", className : "popUpElement",
            callback:(popup => {
                WA.openCoWebSite(urlPricing);
                isCoWebSiteOpened = true;
                popup.close();
            })

        }]);
})

WA.onLeaveZone(zoneName, () => {
    if (isCoWebSiteOpened) {
        WA.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

WA.onLeaveZone('popupZone', () => {

})


WA.sendChatMessage('TEST SCRIPT JS DE 21H12 ET CA CA MARCHE', 'PIVOT');