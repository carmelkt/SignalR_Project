//alert("TESTING!! It works!!!")


(function () {

    $("#clickMe").on("click", function () {
        $.connection.myHub.server.getServerDateTime()
            .done(function (data) {
                writeToPage(data);
            })
            .fail(function (e) {
                writeToPage(e);
            });
    })
    //document.getElementById("clickMe").addEventListener("click", function () {
    //    $.connection.myHub.server.getServerDateTime()
    //        .done(function (data) {
    //            writeToPage(data);
    //        })
    //        .fail(function (e) {
    //            writeToPage(e);
    //        });
    //})
    $.connection.hub.start()
        .done(function () {
            $.connection.hub.logging = true;
            writeToPage("TESTING!! It Works!!");
            $.connection.myHub.server.announce("Connected!!");         
        })
        .fail(function () { writeToPage("Error connecting!!"); });

    $.connection.myHub.client.announce = function (message) {
        writeToPage(message);
    }

    var writeToPage = function (message) {
        $("#welcome-messages").append(message + "<br/>");
    }
})()
