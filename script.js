document.getElementById("akanForm").addEventListener("submit", function(e) { e. preventDefault();
     const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

//validation rule
if (!day || day < 1 || day > 31) {
    alert("Wrong entry day.Please enter a valid day.");
    return;
}
if (!month || month < 1 || month > 12) {
    alert("Wrong entry month.Please enter a valid month.");
    return;
}
if (!year || year < 1900 || year > 9000) {
    alert("Wrong entry year.Please enter a valid year.");
    return;
}
if (!gender) {
    alert("Don't forget to select a gender🤨.");
    return;
}


//obtaining CC and YY
const CC = Math.floor(year / 100);
const YY = year % 100;

// Day of the week Callculations w zeller formula
const d = Math.floor(((CC/4) - (2*CC) - 1) + ((5*YY)/4) + ((26*(month+1))/10) + day) % 7;

const akanMaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let akanName;
if (gender === "male") {
    akanName = akanMaleNames[d];
} else {
    akanName = akanFemaleNames[d];
}


document.getElementById("result").textContent = `Your Akan name is: ${akanName}`;


//Clear form after submission 

document.getElementById("akanForm").reset();

});