// Selects all elements with the class "popup" and stores them in the 'popups' NodeList.
const popups = document.querySelectorAll(".popup");

// Selects the first element with the class "output" to serve as the container for displaying popup messages.
const popupsOutput = document.querySelector(".output");

// Selects the first element with the class "message" where the popup message text will be displayed.
const popupMessage = document.querySelector(".message");

// Selects the first element with the class "close" which will be used as a button to hide the popup message container.
const closeButton = document.querySelector(".close");

// Adds an event listener to the close button. When clicked, it adds the "hide" class to the popupsOutput element, effectively hiding it.
closeButton.addEventListener("click", function () {
  popupsOutput.classList.add("hide");
});

// Loops through each popup element in the 'popups' NodeList.
for (let x = 0; x < popups.length; x++) {
  console.log(popups[x]); // Logs the current popup element to the console for debugging.
  // Adds a click event listener to each popup element.
  popups[x].addEventListener("click", function () {
    console.log(popups[x]); // Logs the current popup element to the console when it is clicked.
    let outputText = this.getAttribute("data-message"); // Retrieves the 'data-message' attribute value from the clicked popup element.
    message(outputText); // Calls the 'message' function with the retrieved 'data-message' value as its argument.
  });
}

// Defines the 'message' function, which is used to display a message in the popupMessage element and make the popupsOutput element visible.
function message(output) {
  popupsOutput.classList.remove("hide"); // Removes the "hide" class from the popupsOutput element, making it visible.
  popupMessage.innerText = output; // Sets the text content of the popupMessage element to the provided 'output' string.
}
