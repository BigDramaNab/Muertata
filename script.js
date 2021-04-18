<script>
let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('myZone', () => {
    WA.openPopup("popupRectangle", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
}]);
</script>
