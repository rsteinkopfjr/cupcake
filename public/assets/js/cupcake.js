$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: newDevour
        };
        $.ajax("/api/cupcakes" + id, {
            type: "PUT",
            data: newDevourState
        }).then(function () {
            console.log("changed sleep to", newSleep);
            location.reload;
        })
    });
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newCupcake = {
            name: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        $.ajax("/api/cupcakes", {
            type: "POST",
            data: newCupcake
        }).then(function () {
            console.log("created new cat");
            location.reload();
        });
    });
});