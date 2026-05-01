document.getElementById("AkanForm").addEventListener("submit", function(e) {
  e.preventDefault();
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