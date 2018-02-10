window.document.onkeypress = function(evt) {
    "use strict";

    function ctrl_y_pressed(evt) {
        return evt.ctrlKey && evt.keyCode === 25;
    }

    function add_another_journey() {
        const add_journey_button = document.getElementById("AddAnotherJourney");
        if (add_journey_button) {
            add_journey_button.click();
        }
    }

    function travel_options() {
        add_another_journey();
    }


	// Handler for the key press dispatching
    if (ctrl_y_pressed(evt)) {
        travel_options();
    }
};