/* 

/* Get all the circle elements
const circles = document.querySelectorAll(".circle");

// Add a click event listener to each circle
circles.forEach((circle) => {
  circle.addEventListener("click", function () {
    // Get the rating number from the clicked circle
    const rating = parseInt(this.textContent);

    // Redirect to a page related to the rating (you can customize the URLs)
    switch (rating) {
      case 1:
        window.location.href =
          "https://interactive-rating-component.webflow.io/rating-1";
        break;
      case 2:
        window.location.href =
          "https://interactive-rating-component.webflow.io/rating-2";
        break;
      // Add cases for other ratings (3, 4, 5) as needed
      case 3:
        window.location.href =
          "https://interactive-rating-component.webflow.io/rating-3";
        break;
      case 4:
        window.location.href =
          "https://interactive-rating-component.webflow.io/rating-4";
        break;
      case 5:
        window.location.href =
          "https://interactive-rating-component.webflow.io/rating-5";
        break;
      default:
        break;
    }
  });
});

</script>


// update to work by clicking Submit button for the redirect to ratings page.

I have five circle divs with different rating numbers (1-5) as text in each. I want the user to click on a circle to change it's background color and then click on a submit button that will then link to a page with information related to the numbered circle clicked. I can set up the numbered circles in webflow and use the interactions tool to change background color when click. I need the javascript custom code to embed in my webflow site t webflow site for the submit button click event that will link me to a page related to the rating number clicked.
Copilot
Sent by Copilot:
Certainly! Let’s break down the steps to achieve this:
1.	Create Your Circles:
o	In Webflow, set up your five circle divs with the different rating numbers (1-5) as text inside each circle.
o	Use interactions to change the background color of a circle when it’s clicked.
2.	Add Custom JavaScript Code:
o	In your Webflow project, go to Project Settings > Custom Code.
o	Add the following JavaScript code snippet to handle the submit button click event:
JavaScript
// Get all the circle elements
const circles = document.querySelectorAll('.circle');

// Add a click event listener to each circle
circles.forEach(circle => {
    circle.addEventListener('click', function() {
        // Get the rating number from the clicked circle
        const rating = parseInt(this.textContent);

        // Redirect to a page related to the rating (you can customize the URLs)
        switch (rating) {
            case 1:
                window.location.href = '/page-for-rating-1';
                break;
            case 2:
                window.location.href = '/page-for-rating-2';
                break;
            // Add cases for other ratings (3, 4, 5) as needed
            default:
                break;
        }
    });
}); } */

// Updated to redirect when hitting Submit button

/*1.	Create Your Circles:
o	Set up your five circle divs with different rating numbers (1-5) as text inside each circle.
o	Use interactions to change the background color of a circle when it’s clicked.
2.	Add Custom JavaScript Code:
o	In your Webflow project, go to Project Settings > Custom Code.
o	Add the following JavaScript code snippet to handle the circle click event and store the selected rating:




// the following commented out on 7/3/24
// Initialize a variable to store the selected rating*/
/*let selectedRating = null;

// Get all the circle elements
const circles = document.querySelector(".circle");

// Add a click event listener to each circle
circles.forEach((circle) => {
  circle.addEventListener("click", function () {
    // Get the rating number from the clicked circle
    selectedRating = parseInt(this.textContent);

    // Change the circle color (you can add your interaction logic here)
    // For example: this.style.backgroundColor = 'blue';
  });
});

// Add a click event listener to the submit button
const submitButton = document.querySelectorAll(".button-2 .w-button"); // Replace with your actual button ID
submitButton.addEventListener("click", function () {
  // Redirect to a page related to the selected rating
  switch (selectedRating) {
    case 1:
      window.location.href =
        "https://interactive-rating-component.design.webflow.com/?pageId=6685a7119ee7b0221c6960db";
      break;
    case 2:
      window.location.href =
        "https://interactive-rating-component.design.webflow.com/?pageId=6685a6267d6a52c80aa22a25";
      break;
    // Add cases for other ratings (3, 4, 5) as needed
    case 3:
      window.location.href =
        "https://interactive-rating-component.webflow.io/rating-3";
      break;
    case 4:
      window.location.href =
        "https://interactive-rating-component.webflow.io/rating-4";
      break;
    case 5:
      window.location.href =
        "https://interactive-rating-component.webflow.io/rating-5";
      break;
    default:
      break;
  }
});
/*AI-generated code. Review and use carefully. More info on FAQ.
3.	Customize the URLs and Circle Interactions:
o	Replace /page-for-rating-1, /page-for-rating-2, etc., with the actual URLs of the pages related to each rating.
o	Customize the circle interactions (changing color) based on your design.
4.	Test and Preview:
o	Preview your site to ensure the circles change color when clicked.
o	Click a circle to select a rating, and then click the submit button to verify the redirection.
This updated code ensures that the redirection happens only after clicking the submit button. 🌟🚀 Redirect to another page or URL after form submitted? - Webflow Forum*/
