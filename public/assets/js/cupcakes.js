// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/cupcakes/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devoured to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newCupcake = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/cupcakes", {
      type: "POST",
      data: newCupcake
    }).then(
      function() {
        console.log("created new cupcake");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-cupcake").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cupcakes/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cupcake", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
