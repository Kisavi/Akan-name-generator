//declaring initial variables
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
let femaleNames = ["Akosue", "Adwoa", "Abenaa", "Akue", "Yaa", "Afua", "Ama"]
let genders = document.getElementsByClassName("gender")

function displayDate() {
//declaring more variables
    let userDateInput = document.forms["myForm"]["date"].value;
    let outputParagraph = document.getElementById("message")
    let isValidDate = Date.parse(userDateInput);
    let date = new Date(isValidDate)
    let index = date.getDay();
//conditions to be checked in order to display the correct Akan details
    if (userDateInput == "" && document.getElementById("flexRadioDefault1").checked) {
        alert("This is not a valid date format!!!");
        return false;
    } else if (userDateInput == "" && document.getElementById("flexRadioDefault2").checked) {
        alert("This is not a valid date format!!")
        return false;
    } else if (userDateInput !== "" && document.getElementById("flexRadioDefault1").checked) {
        outputParagraph.innerHTML = (`You were born on ${days[index]} and your Akan name is ${maleNames[index]}.`)
    } else {outputParagraph.innerHTML = (`You were born on ${days[index]} and your Akan name is ${femaleNames[index]}.`)}
    
    displayContainer();
}
//funtion for hiding the form container and display the result's paragraph container.
function displayContainer() {
    let x = document.getElementById("container1")
    let y = document.getElementById("container2")
    x.style.display = "none";
    y.style.display = "block";
}