let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
let femaleNames = ["Akosue", "Adwoa", "Abenaa", "Akue", "Yaa", "Afua", "Ama"]
let genders = document.getElementsByClassName("gender")

function displayDate() {

    let userDateInput = document.forms["myForm"]["date"].value;
    let userSexInput = document.forms["myForm"]["sex"].value;
    let z = document.getElementById("message")
    let isValidDate = Date.parse(userDateInput);
    let date = new Date(isValidDate)
    let index = date.getDay();

    if (x == "" && document.getElementById("flexRadioDefault1").checked) {
        alert("This is not a valid date format!!!");
        return false;
    } else if (x == "" && document.getElementById("flexRadioDefault2").checked) {
        alert("This is not a valid date format!!")
        return false;
    } else if (x !== "" && document.getElementById("flexRadioDefault1").checked) {
        z.innerHTML = (`You were born on ${days[index]} and your Akan name is ${maleNames[index]}.`)
    } else {z.innerHTML = (`You were born on ${days[index]} and your Akan name is ${femaleNames[index]}.`)}
    
    displayContainer();
}

function displayContainer() {
    let x = document.getElementById("container1")
    let y = document.getElementById("container2")
    x.style.display = "none";
    y.style.display = "block";
}