import { convert } from "./data/conversions.js";

const dropOne = document.getElementById("dropdownOne");
const dropTwo = document.getElementById("dropdownTwo");
const dropThree = document.getElementById("dropdownThree");
const submitBtn = document.getElementById("submit");

const unitOption = [
  "Select a form of Measurement",
  "Length",
  "Mass",
  "Temperature",
  "Time",
  "Digital Storage",
];
const userStart = ["Select the starting unit"];
const userEnd = ["Select the unit to convert"];
const massOption = [
  "Metric_Ton",
  "Kilograms",
  "Grams",
  "Milligrams",
  "Micrograms",
  "Imperial_Ton",
  "Pounds",
  "Ounces",
];
const tempOption = ["Celsius", "Fahrenheit", "Kelvin"];
const lengthOption = [
  "Kilometers",
  "Meters",
  "Centimeters",
  "Millimeters",
  "Microns",
  "Nanometers",
  "Miles",
  "Yards",
  "Feet",
  "Inches",
  "Nautical_Miles",
];
const timeOption = [
  "Seconds",
  "Minutes",
  "Hours",
  "Days",
  "Weeks",
  "Months",
  "Years",
];
const digStorageOption = [
  "Byte",
  "Kilobyte",
  "Megabyte",
  "Gigabyte",
  "Terabyte",
];

addEventListener("load", function () {
  unitOption.forEach((optionText) => {
    const option = document.createElement("option");
    option.text = optionText;
    option.value = optionText;
    dropOne.add(option);
  });
  userStart.forEach((optionText) => {
    const option = document.createElement("option");
    option.text = optionText;
    option.value = optionText;
    dropTwo.add(option);
  });
  userEnd.forEach((optionText) => {
    const option = document.createElement("option");
    option.text = optionText;
    option.value = optionText;
    dropThree.add(option);
  });
});

dropOne.addEventListener("change", function () {
  const dropOneValue = document.getElementById("dropdownOne").value;

  while (dropdownTwo.options.length > 0) {
    dropTwo.remove(0);
    dropThree.remove(0);
  }

  if (dropOneValue === "Select a form of Measurement") {
    //Dropdown 2 changes to "Select the starting unit"
    userStart.forEach((optionText) => {
      const option = document.createElement("option");
      option.text = optionText;
      option.value = optionText;
      dropTwo.add(option);
    });
    userEnd.forEach((optionText) => {
      const option = document.createElement("option");
      option.text = optionText;
      option.value = optionText;
      dropThree.add(option);
    });
    //Dropdown 2 changes to "Select the ending unit"
  } else if (dropOneValue === "Length") {
    //Dropdown 2 changes to "Length"
    lengthOption.forEach((optionText) => {
      const option = document.createElement("option");
      option.text = optionText;
      option.value = optionText;
      dropTwo.add(option);
    });
    //Dropdown 3 changes to "Length"
    lengthOption.forEach((optionText) => {
      const option = document.createElement("option");
      option.text = optionText;
      option.value = optionText;
      dropThree.add(option);
    });
    //#########################################
  } else if (dropOneValue === "Mass") {
    //Dropdown 2 changes to "Mass"
    massOption.forEach((optionText) => {
      const option = document.createElement("option");
      option.text = optionText;
      option.value = optionText;
      dropTwo.add(option);
    });
    //Dropdown 3 changes to "Mass"
    massOption.forEach((optionText) => {
      const option = document.createElement("option");
      option.text = optionText;
      option.value = optionText;
      dropThree.add(option);
    });
    //#########################################
  } else if (dropOneValue === "Temperature") {
    //Dropdown 2 changes to "Temperature"
    tempOption.forEach((optionText) => {
      const option = document.createElement("option");
      option.text = optionText;
      option.value = optionText;
      dropTwo.add(option);
    });
    //Dropdown 3 changes to "Temperature"
    tempOption.forEach((optionText) => {
      const option = document.createElement("option");
      option.text = optionText;
      option.value = optionText;
      dropThree.add(option);
    });
    //#########################################
  } else if (dropOneValue === "Time") {
    //Dropdown 2 changes to "Time"
    timeOption.forEach((optionText) => {
      const option = document.createElement("option");
      option.text = optionText;
      option.value = optionText;
      dropTwo.add(option);
    });
    //Dropdown 3 changes to "Time"
    timeOption.forEach((optionText) => {
      const option = document.createElement("option");
      option.text = optionText;
      option.value = optionText;
      dropThree.add(option);
    });
    //#########################################
  } else if (dropOneValue === "Digital Storage") {
    //Dropdown 2 changes to "Digital Storage"
    digStorageOption.forEach((optionText) => {
      const option = document.createElement("option");
      option.text = optionText;
      option.value = optionText;
      dropTwo.add(option);
    });
    //Dropdown 3 changes to "Digital Storage"
    digStorageOption.forEach((optionText) => {
      const option = document.createElement("option");
      option.text = optionText;
      option.value = optionText;
      dropThree.add(option);
    });
  } else {
    console.log("No Value Detected");
  }
});

submitBtn.addEventListener("click", () => {
  convert();
});

//HALL OF CLOWN PUNS

//When clowns go camping, they never forget their funny gear.
//Life’s a joke, might as well wear the big shoes.
//You’re never fully dressed without a clown nose.
//Clown your blessings.
//Clown’t stop, won’t stop.s
//Stop clowning around and focus!
//Honk Honk
//Donut worry, be happy!Clown.
//Clowning around is a full-time gig!
