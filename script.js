function generateName() {
  var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var firstName = document.getElementById("FirstName").value;
  console.log(firstName);
  var middleName = document.getElementById("MiddleName").value;
  console.log(middleName);
  var lastName = document.getElementById("LastName").value;
  console.log(lastName);
  var dateInput = document.getElementById("DateOfBirth").value;

  var dob = new Date(document.getElementById("DateOfBirth").value);
  var gender = document.getElementById("Gender").value;
  var year = dob.getFullYear().toString();

  var CC = year.slice(0, 2);
  var YY = year.slice(2, 4);
  var MM = dob.getMonth() + 1;
  var DD = dob.getDate();
  // var DY = dob.getDay();

  console.log(CC + "/" + YY + "/" + MM + "/" + DD);

  var d = parseInt(
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7
  );

  console.log("Day of the week-> (dob->getDay()) ", dob.getDay());
  console.log("Date of the week-> (dob->getDate()) ", dob.getDate());
  console.log("Value of d -> ", d);

  if (firstName == null || firstName == "") {
    alert("Please Fill In Your First Name");
    return false;
  }
  if (middleName == null || middleName == "") {
    alert("Please Fill In Your Middle Name");
    return false;
  }
  if (lastName == null || lastName == "") {
    alert("Please Fill In Last Name");
    return false;
  }
  if (dateInput == null || dateInput == "") {
    alert("Please Fill In Your Date Of Birth");
    return false;
  }
  if (gender == "Male") {
    document.getElementById("display-name").innerHTML =
      "<p>Your AKan Name is <strong> " +
      male[d] +
      "</strong> and you were born on  <strong>" +
      day[d] +
      "</strong ></p>";
  } else if (gender == "Female") {
    document.getElementById("display-name").innerHTML =
      "<p>Your AKan Name is <strong> " +
      female[d] +
      "</strong> and you were born on <strong>" +
      day[d] +
      "</strong> </p>";
  } else {
    alert("Please select your gender.");
  }
}
function clearPage() {
  document.getElementById("display-name").innerHTML = " ";
}
