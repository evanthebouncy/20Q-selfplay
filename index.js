console.log("hi");

var model_idx = 0;
var model_names = ["gpt3", "gpt4"];




// the document ready function
$(function() {

        // put a switch on     <button id="switch-model">Switch Model</button>
    $("#switch-model").click(function() {
        console.log("switching model");
        // switch the idx
        model_idx = (model_idx + 1) % model_names.length;
        // render the rows
        render_rows(model_names[model_idx]);
    });


    // check a variable "data" is defined
    if (typeof data !== 'undefined') {
        // if it is, print it
        console.log(data);
    } else {
        // try wait 4 seconds and check again
        setTimeout(function() {
            if (typeof data !== 'undefined') {
                // if it is, print it
                console.log(data);
            } else {
                // if it is not, print an error message
                console.log("data is not defined");
            }
        }, 4000);
    }

    // no idea if the above code is kosher but whatever lmao

    // put the data into <div id="data_here"></div> as a scrollable accordion list
    // $("#data_here").html("fjdkafjkdsa");

    function render_rows(model_name) {
        var data_in = null;
        if (model_name === "gpt3") {
            data_in = data_gpt3;
            // change this thing     <div id="model-type"> model is </div>
            $("#model-type").html("model is gpt3.5-turbo");
        }
        if (model_name === "gpt4") {
            data_in = data_gpt4;
            // change this thing     <div id="model-type"> model is </div>
            $("#model-type").html("model is gpt4");
        }

        // clear the div at data_here
        $("#data_here").html("");
        // iterate over the keys to data
        for (var key in data_in) {
            // create a dummy div to hold the accordion
            var accordion = $("<div></div>");
            // check the number of questions / answers in this accordion
            var numbers = data_in[key].length;
            // if the length is less than 21, the problem is 'solved'
            var solved = numbers < 21;
            // put the title into this accordion, along with whether it is solved or not
            accordion.append("<h2>" + key + " (" + (solved ? "success" : "fail") + ")</h2>");
            // create a dummy div to hold the content of the accordion, it should be a list of question / answer pairs
            var content = $("<div></div>");
            // the value is a list of question / answer pairs, iterate over them
            for (var i = 0; i < data_in[key].length; i++) {
                // create a dummy div to hold the question / answer pair
                var qa = $("<div></div>");
                // add QA
                qa.append("<p>" + data_in[key][i] + "</p>");
                // append this div to the content div
                content.append(qa);
            }
            // append the content div to the accordion div
            accordion.append(content);
            // append the accordion div to the data div
            $("#data_here").append(accordion);
        }
    }
    
    // render the rows
    render_rows("gpt3");


});
