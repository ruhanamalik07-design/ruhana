//Part1 : Form Interaction

// Select the form and message area
const form = document.getElementById("welcomeForm");
const message = document.getElementById("welcomeMessage");

//Add submit event listener
form.addEventListener("submit", function(event){
      // Prevent page from refreshing
    event.preventDefault();

    // Get the value entered by the user
    const name = document.getElementById("nameInput").value;

    // Display welcome message dynamically
    message.textContent = `Welcome, ${name}!`;

});

//Part2 : Dark Mode Toggle

//select toggle button
const toggleBtn = document.getElementById("toggleBtn");

//Add click event listener
toggleBtn.addEventListener("click", function()
{
    //Toggle dark mode class on body
    document.body.classList.toggle("dark-mode");
});