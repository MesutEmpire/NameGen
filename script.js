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
   
  
   }
  