console.log("hi");

// the document ready function
$(function() {

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

    // iterate over the keys to data
    for (var key in data) {
        // create a dummy div to hold the accordion
        var accordion = $("<div></div>");
        // put the title into this accordion
        accordion.append("<h3>" + key + "</h3>");
        // create a dummy div to hold the content of the accordion, it should be a list of question / answer pairs
        var content = $("<div></div>");
        // the value is a list of question / answer pairs, iterate over them
        for (var i = 0; i < data[key].length; i++) {
            // create a dummy div to hold the question / answer pair
            var qa = $("<div></div>");
            // add QA
            qa.append("<p>" + data[key][i] + "</p>");
            // append this div to the content div
            content.append(qa);
        }
        // append the content div to the accordion div
        accordion.append(content);
        // append the accordion div to the data div
        $("#data_here").append(accordion);
    }
            


});
