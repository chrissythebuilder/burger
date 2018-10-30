$(function() {

    $(".create-form").on("submit", function() {
        event.preventDefault();
        // alert("create form working");
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
        // console.log("devour form working!");
        var id = $(this).children(".burger_id").val();
        $.ajax({
            type: "PUT",
            url: "/burgers/" + id,
        }).then(
            function() {
            location.reload();
        })
    })
})