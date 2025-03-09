// Task 2: Adding Employee Cards Dynamically
function addEmployeeCard(name, position) { // Writing a function that uses createElement to build an employee card
    const container = document.getElementById("employeeContainer"); // Gets the employee container

    const card = document.createElement("div"); // Creating the employee card container
    card.setAttribute("class", "employee-card"); //Set attributes using setAttribute as needed

    const employeeName = document.createElement("h3"); // Creating a heading for the employee’s name
    employeeName.textContent = name; // Setting heading text

    const employeePosition = document.createElement("p"); // Creating a paragraph for the employee’s position
    employeePosition.textContent = position; // Set paragraph text

    const editButton = document.createElement("button"); // Creating a "Remove" button for deleting the card
    editButton.textContent = "Edit"; // Set button text
    editButton.setAttribute("class", "edit-btn");

    const removeButton = document.createElement("button"); // Creating a "Remove" button for deleting the card
    removeButton.textContent = "Remove"; // Set button text
    removeButton.setAttribute("class", "remove-btn");

    removeButton.onclick = function (event) { //Function to remove the card when the button is clicked
        // Task 4
        event.stopPropagation() // Using stopPropagation() in the "Remove" button’s event handler to prevent the event from bubbling up to the container
        if (card.parentNode) { // Checks to see if card has a parent
            container.removeChild(card); // "Remove" button that removes its parent employee card using removeChild
        }
    };  
        // Task 5
    editButton.onclick = function (event) { // Edit employee details when button is clicked
        event.stopPropagation(); //Prevent the event from bubbling up to the container
        enableEditing(card, employeeName, employeePosition, editButton);
    };

    card.ondblclick = function () { // Add an event listener to each employee card (or an edit button within it) that, on double-click, swaps static content with input fields
        enableEditing(card, employeeName, employeePosition, editButton);
    }

    // Appending the card elements
    card.appendChild(employeeName); // adds name to card
    card.appendChild(employeePosition); // adds position to card
    card.appendChild(editButton); // adds edit button to card
    card.appendChild(removeButton); // adds remove button to card

    document.getElementById("employeeContainer").appendChild(card); // Appends the employee card to the "employeeContainer" 
}
// Task 5: Inline Editing of Employee Details
function enableEditing(card, employeeName, employeePosition, editButton) {
    
    const nameInput = document.createElement("input"); // Pre-populate the input fields with the existing employee name
    nameInput.type ="text"; // Sets input as text
    nameInput.value = employeeName.textContent;

    const positionInput = document.createElement("input"); // Pre-populate the input fields with the existing employee position.
    positionInput.type = "text"; // Sets input as text
    positionInput.value = employeePosition.textContent;

    const saveButton = document.createElement("button"); // Provide a mechanism (e.g., a "Save" button) that, when clicked, updates the employee card with the new values
    saveButton.textContent = "Save"; // Sets button text
    saveButton.setAttribute("class", "save-btn");

    saveButton.onclick = function (event) { // Ensure the updated details are reflected in the card and revert the inputs back to static text
        event.stopPropagation(); // Prevent the event from bubbling

        // Updating the text of employee details
        employeeName.textContent = nameInput.value; 
        employeePosition.textContent = positionInput.value;

        // Replacing input fields with static text
        card.replaceChild(employeeName, nameInput)
        card.replaceChild(employeePosition, positionInput);
        card.replaceChild(editButton, saveButton);    
    };
     // Replacing static text with input fields
    card.replaceChild(nameInput, employeeName);
    card.replaceChild(positionInput, employeePosition);
    card.replaceChild(saveButton, editButton);
}

// Example Employees
addEmployeeCard("Bethany Mejia", "Graphic Designer");
addEmployeeCard("Deana Jefferson", "Software Developer");
addEmployeeCard("Zara Holloway", "Security Engineer");

// Task 3: Converting NodeLists to Arrays for Bulk Updates
function highlightAllEmployees () {
    const nodeList = document.querySelectorAll(".employee-card"); // Using document.querySelectorAll to select all elements with the employee card class
    const employeeCards = Array.from(nodeList); // Convert the NodeList into an array using Array.from or the spread operator
    employeeCards.forEach(card => { // Use an array method (e.g., .forEach()) to update each card’s style or add a highlighting class
        card.classList.add("highlight");
    });
}
highlightAllEmployees(); // All employee cards will update their appearance


// Task 4: Implementing Removal of Employee Cards with Event Bubbling
document.getElementById("employeeContainer").addEventListener("click", function () { // Attach a click event listener to the "employeeContainer"
    console.log("Card Clicked"); // Logs a message when any card is clicked.
    });


// Check to make sure if code meets all requirements --> see if an undo button is needed to get employees back without refreshing... 