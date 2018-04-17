console.log("App loaded");

$(document).ready(function(){

    $("#sample-submit").on("click", function(event){
        event.preventDefault();

        var objectGoingToTheServer = {
            name: $("#sampleName").val(),
            info: $("#sampleInfo").val()
        };

        $.ajax({
            type: "POST",
            url: "/sampleForZech",
            data: objectGoingToTheServer,
            success: function(responseFromServer){
                console.log(responseFromServer);
            }
        });
    });
});