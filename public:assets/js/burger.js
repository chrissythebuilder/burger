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

    $(".devour-form").on("submit", function() {
        event.preventDefault();

        var id = $("#devour-btn").data("id");

        var devouredBurger = {
            devoured: true
        };

        $.ajax({
            method: "PUT",
            url: "/burgers/devour/" + id
        }).then(function(data) {
            location.reload();
        })
    })
})