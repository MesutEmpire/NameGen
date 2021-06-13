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
    var dob = new Date(document.getElementById("DateOfBirth").value);
    var gender = document.getElementById("Gender").value;
    var year = dob.getFullYear().toString();
  
    var CC = year.slice(0, 2);
    var YY = year.slice(2, 4);
    var MM = dob.getMonth() + 1;
    var DD = dob.getDate();
    var DY = dob.getDay();
  
    console.log(CC + "/" + YY + "/" + MM + "/" + DD);
  
    var d = parseInt(
      (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7
    );
  
    console.log("Day of the week-> (dob->getDay()) ", dob.getDay());
    console.log("Date of the week-> (dob->getDate()) ", dob.getDate());
    console.log("Value of d -> ", d);
  
    if (gender == "Male") {
      document.getElementById("display-name").innerHTML =
        "<p>Your AKan Name is <strong> " +
        male[DY] +
        "</strong> and you were born on  " +
        day[DY] +
        "</p>";
    } else if (gender == "Female") {
      document.getElementById("display-name").innerHTML =
        "<p>Your AKan Name is <strong> " +
        female[DY] +
        "</strong> and you were born on " +
        day[DY] +
        "</p>";
    } else {
      document.getElementById("display-name").innerHTML =
        "Error.Please select your gender.";
    }
  }
  