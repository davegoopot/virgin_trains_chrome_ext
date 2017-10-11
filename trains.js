window.document.onkeypress = function(evt) {
    "use strict";
    const page_dispatch = {
        "/buytickets/travelessentials.aspx": travel_options,
        "/buytickets/shoppingbasket.aspx": change_seat,
    };


    function ctrl_y_pressed(evt) {
        return evt.ctrlKey && evt.keyCode === 25;
    }


    function select_quiet_coach() {
        const selectbox = document.getElementById("Environment");
        if (selectbox) {
            selectbox.value = "QUIE";
        }
    }


    function add_another_journey() {
        const add_journey_button = document.getElementById("AddAnotherJourney");
        if (add_journey_button) {
            add_journey_button.click();
        }
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


    function travel_options() {
        select_quiet_coach();
        add_another_journey();
    }


    if (ctrl_y_pressed(evt)) {
        const web_path = document.location.pathname;
        if (web_path in page_dispatch) {
            page_dispatch[web_path]();
        }
    }
};
