const formatter = new Intl.NumberFormat("en-US", {
  style: "decimal",
  minimumFractionDigits: 2,
});

export function convert() {
  const value = parseFloat(document.getElementById("value").value);
  const fromUnit = document.getElementById("dropdownTwo").value;
  const toUnit = document.getElementById("dropdownThree").value;
  let result;

  if (isNaN(value)) {
    document.getElementById("result").innerHTML =
      "Please enter a valid number.";
  }

  const conversions = {
    Meters: {
      Meters: value, //Default
      Centimeters: value * 100,
      Millimeters: value * 1000,
      Kilometers: value / 1000,
      Inches: value * 39.37,
      Feet: value * 3.281,
      Yards: value * 1.094,
    },
    Centimeters: {
      Meters: value / 100,
      Centimeters: value, //Default
      Millimeters: value * 10,
      Kilometers: value / 100000,
      Inches: value / 2.54,
      Feet: value / 30.48,
      Yards: value / 91.44,
    },
    Millimeters: {
      Meters: value / 1000,
      Centimeters: value / 10,
      Millimeters: value, //Default
      Kilometers: value / 1e6,
      Inches: value / 25.4,
      Feet: value / 304.8,
      Yards: value / 914.4,
    },
    Kilometers: {
      Meters: value * 1000,
      Centimeters: value * 100000,
      Millimeters: value * 1e6,
      Kilometers: value, //Default
      Inches: value * 39370,
      Feet: value * 3281,
      Yards: value * 1094,
    },
    Inches: {
      Meters: value / 39.37,
      Centimeters: value * 2.54,
      Millimeters: value * 25.4,
      Kilometers: value / 39370,
      Inches: value, //Default
      Feet: value / 12,
      Yards: value / 36,
    },
    Feet: {
      Meters: value / 3.281,
      Centimeters: value * 30.48,
      Millimeters: value * 304.8,
      Kilometers: value / 3281,
      Inches: value * 12,
      Feet: value, //Default
      Yards: value / 3,
    },
    Yards: {
      Meters: value / 1.094,
      Centimeters: value * 91.44,
      Millimeters: value * 914.4,
      Kilometers: value / 1094,
      Inches: value * 36,
      Feet: value * 3,
      Yards: value, //Default
    },
    //MASS CONVERSIONS
    Grams: {
      Grams: value, //Default
      Kilograms: value / 1000,
      Pounds: value / 452.6,
      Ounces: value / 28.35,
    },
    Kilograms: {
      Grams: value * 1000,
      Kilograms: value, //Default
      Pounds: value * 2205,
      Ounces: value * 35.274,
    },
    Pounds: {
      Grams: value * 453.6,
      Kilograms: value / 2.205,
      Pounds: value, //Default
      Ounces: value * 16,
    },
    Ounces: {
      Grams: value * 28.35,
      Kilograms: value / 35.274,
      Pounds: value / 16,
      Ounces: value, //Default
    },
    //TEMPERATURE CONVERSIONS
    Celsius: {
      Celsius: value, //Default
      Fahrenheit: (value * 9) / 5 + 32,
      Kelvin: value + 273.15,
    },
    Fahrenheit: {
      Celsius: ((value - 32) * 5) / 9,
      Fahrenheit: value, //Default
      Kelvin: ((value - 32) * 5) / 9 + 273.15,
    },
    Kelvin: {
      Celsius: value - 273.15,
      Fahrenheit: ((value - 273.15) * 9) / 5 + 32,
      Kelvin: value, //Default
    },
    //TIME CONVERSIONS
    Seconds: {
      Seconds: value, //Default
      Minutes: value / 60,
      Hours: value / 3600,
      Days: value / 86400,
      Weeks: value / 604800,
      Months: value / 2.628e6,
      Years: value / 3.154e7,
    },
    Minutes: {
      Seconds: value * 60,
      Minutes: value, //Default
      Hours: value / 60,
      Days: value / 1440,
      Weeks: value / 10080,
      Months: value / 43800,
      Years: value / 525600,
    },
    Hours: {
      Seconds: value * 3600,
      Minutes: value * 60,
      Hours: value, //Default
      Days: value / 24,
      Weeks: value / 168,
      Months: value / 730,
      Years: value / 8760,
    },
    Days: {
      Seconds: value * 86400,
      Minutes: value * 1440,
      Hours: value * 24,
      Days: value, //Default
      Weeks: value / 7,
      Months: value / 30.417,
      Years: value / 365,
    },
    Weeks: {
      Seconds: value * 604800,
      Minutes: value * 10080,
      Hours: value * 168,
      Days: value * 7,
      Weeks: value, //Default
      Months: value / 4.345,
      Years: value / 52.143,
    },
    Months: {
      Seconds: value * 2.628e6,
      Minutes: value * 43800,
      Hours: value * 730,
      Days: value * 30.417,
      Weeks: value * 4.345,
      Months: value, //Default
      Years: value / 12,
    },
    Years: {
      Seconds: value * 3.15e7,
      Minutes: value * 525600,
      Hours: value * 8760,
      Days: value * 365,
      Weeks: value * 52143,
      Months: value * 12,
      Years: value, //Default
    },
  };
  result = conversions[fromUnit][toUnit];

  document.getElementById(
    "result"
  ).innerHTML = `${value} ${fromUnit} to ${formatter.format(result)} ${toUnit}`;
}
