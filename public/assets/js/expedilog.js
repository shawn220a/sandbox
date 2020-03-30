let background = function() {
  // Event listener for our cat-button

  // Storing our giphy API URL for a random cat image
  // var queryURL = "https://pixabay.com/api/?key=15801379-7b9c3ade3001b04f83cbbf0cd&q=travel&per_page=200";

  // // Perfoming an AJAX GET request to our queryURL
  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // })

  // // After the data from the AJAX request comes back
  //   .then(function(response) {

  //   // Saving the image_original_url property
  //     const rando = Math.floor(Math.random() * 200); 
  //     const tinyImageUrl = response.data.hits[rando].previewURL;
  //     const tinyImageLength = tinyImageURL.length;
  //     const imageURL = tinyImageUrl.slice(0, tinyImageLength-7)+"960_720.jpg";

  //     // Prepending the catImage to the images div
      document.querySelector("body").setAttribute("style", `background-image: url("https://cdn.pixabay.com/photo/2015/03/26/09/49/river-690374_960_720.jpg")`);
  //     // $("body").setAttribute("style", `background-image: url("https://cdn.pixabay.com/photo/2016/07/05/18/35/aircraft-1499171_960_720.jpg")`);
  //   });
}

// $(function() {
//   $(".devourIt").on("click", function (event) {
//     let id = $(this).data("id");
//     // let nowDevoured = $(this).data("devoured");

//     var nowDevouredState = {
//       devoured: 1   //nowDevoured
//     };

//     // Send the PUT request.
//     $.ajax("/api/burgers/" + id, {
//       type: "PUT",
//       data: nowDevouredState
//     }).then(
//       function() {
//         console.log("changed sleep to 1");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $(".create-form").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var newBurger = {
//       burger_name: $("#ca").val().trim(),
//       devoured: 0  //$("[name=devoured]:checked").val().trim()
//     };

//     // Send the POST request.
//     $.ajax("/api/burgers", {
//       type: "POST",
//       data: newBurger
//     }).then(
//       function() {
//         console.log("created new burger");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   // $(".delete-cat").on("click", (event) => {
//   //   var id = $(this).data("id");

//   //   // Send the DELETE request.
//   //   $.ajax("/api/cats/" + id, {
//   //     type: "DELETE"
//   //   }).then(
//   //     function() {
//   //       console.log("deleted cat", id);
//   //       // Reload the page to get the updated list
//   //       location.reload();
//   //     }
//   //   );
//   // });
// });
