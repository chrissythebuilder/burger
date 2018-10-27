$(document).ready(function(){
    $(".create-form").on("submit", function() {
        event.preventDefault();
        
        var newBurger = {
            name: $("#myburger").val().trim(),
            devoured: false
        };

        $.ajax("/burgers/create", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
            location.reload();
        })
        console.log("working");
        $("#myburger").val("");
    });

    $(".devour-form").on("submit", function(event) {
        event.preventDefault();

        var id = $(this).children(".burger_id").val();
        $.ajax({
            method: "PUT",
            url: "/burgers/" + id,
        }).then(function(data) {
            console.log("Devour Form working");

            location.reload();
        })
    })
})