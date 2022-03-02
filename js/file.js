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

function checkDay(x) {
    let isValidDate = Date.parse(x);
    let date = new Date(isValidDate)
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let year = (date.getFullYear()).toString();
    // console.log(d, m, year)
    let c = year.substring(0, 2);
    let y = year.substring(2, 4);
    let index = date.getDay();
    let z = document.getElementById("message")
    z.innerHTML = (`You were born on ${days[index]} and your Akan name is ${femaleNames[index]}.`)


    // console.log(`You were born on ${days[index]} and your Akan name is ${femaleNames[index]}.`)

    //console.log(date.getDay());
    // console.log(c, y);
    // console.log(Math.floor((((c / 4) - 2 * c - 1) + ((5 * y / 4)) + ((26 * (m + 1) / 10)) + d) % 7));
}