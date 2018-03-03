window.onload = function() {
    "use strict";
    
    pick_fast_ticket_delivery();
    function pick_fast_ticket_delivery() {
        const option = document.getElementById("KIOSKDeliveryMethod");
        if (option) {
            option.click();
        }
    }
};
