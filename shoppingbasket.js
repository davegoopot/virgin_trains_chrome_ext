window.document.onkeypress = function(evt) {
    "use strict";

    function ctrl_y_pressed(evt) {
        return evt.ctrlKey && evt.keyCode === 25;
    }

    function save_seat_change() {
        const save_button = document.getElementById("SeatPickerSaveButton");
        if (save_button) {
            save_button.click();
        }
    }


    function seat_change_needs_saving() {
        const infopanel = document.querySelector(
            "#InnerDiv > div.panel_container.panel_container_bottom.cf > div.panel_secondary.panel_secondary_selection_summary");

        // Needs saving if the text on the info panel is like "A1 to B2"
        return infopanel.innerText.includes("to");
    }


    function close_seat_change_popup() {
        document.getElementById("closeseatPicker_dialogcontent8").click();
    }


    function change_seat() {
        if (seat_change_needs_saving()) {
            save_seat_change();
        } else {
            close_seat_change_popup();
        }
    }

    if (ctrl_y_pressed(evt)) {
        change_seat();
    }
};


window.onload = function(evt) {
    "use strict";
    
    reason_on_business();
	function reason_on_business() {
	    document.querySelector('#travel_reason [value="BUSINESS"]').selected = true;
	}
};
