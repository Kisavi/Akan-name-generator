let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
let femaleNames = ["Akosue", "Adwoa", "Abenaa", "Akue", "Yaa", "Afua", "Ama"]
let genders = document.getElementsByClassName("gender")

function displayDate() {

    let x = document.forms["myForm"]["date"].value;
    let p = document.forms["myForm"]["sex"].value;

    if (x == "") {
        alert("This is not a valid date format!!!");
    }
    //console.log(x)
    //console.log(p)
    checkDay(x);
    displayContainer();
    for (let gender of genders) {
        if (gender.checked) {
            //console.log(gender.value)
            return gender.value;
        }
    }
}

function displayContainer() {
    let o = document.getElementById("container1")
    let q = document.getElementById("container2")
    o.style.display = "none";
    q.style.display = "block";
}