// Task 1: Creating the Base Structure
document.addEventListener("DOMContentLoaded", () => {
    const employeeContainer = document.getElementById("employeeContainer");
}); // does this even do anything LOL

// Task 2: Adding Employee Cards Dynamically
function addEmployeeCard(name, position) { // Writing a function that uses createElement to build an employee card
    
    const card = document.createElement("div"); // Creating the employee card container
    card.setAttribute("class", "employee-card"); //Set attributes using setAttribute as needed

    const nameHeading = document.createElement("h3"); // Creating a heading for the employee’s name
    nameHeading.textContent = name; // Setting heading text

    const positionParagraph = document.createElement("p"); // Creating a paragraph for the employee’s position
    positionParagraph.textContent = position; // Set paragraph text

    const removeButton = document.createElement("button"); // Creating a "Remove" button for deleting the card
    removeButton.textContent = "Remove"; // Set button text
    removeButton.setAttribute("class", "remove-btn");

    removeButton.onclick = function () { //Function to remove the card when the button is clicked
        document.getElementById("employeeContainer").removeChild(card);
    };  
    // Appending the card elements
    card.appendChild(nameHeading); // adds name to card
    card.appendChild(positionParagraph); // adds position to card
    card.appendChild(removeButton); // adds remove button to card

    document.getElementById("employeeContainer").appendChild(card); // Appends the employee card to the "employeeContainer" 
}

// Example Employees
addEmployeeCard("Bethany Mejia", "Graphic Designer");
addEmployeeCard("Deana Jefferson", "Software Developer");