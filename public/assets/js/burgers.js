$(function() {
    $(".eatburger").on("click", function(event) {
      var id = $(this).attr("id");
  
      var newHungerState = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newHungerState
      }).then(
        function() {
          console.log("burger eaten");
          // Reload the page to get the updated list
          location.reload();
        });
    });
  
    $("#addburger").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log(event);
      var newBurger = {
        burger_name: $("#newBurger")
          .val()
          .trim(),
        devoured: 0
      };
      console.log(newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  