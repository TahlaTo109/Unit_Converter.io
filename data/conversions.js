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
      "Please enter a number and units";
  }

  const conversions = {
    //LENGTH CONVERSIONS
    Kilometers: {
      Kilometers: value, //Default
      Meters: value * 1000,
      Centimeters: value * 100000,
      Millimeters: value * 1e6,
      Microns: value * 1e9,
      Nanometers: value * 1e12,
      Miles: value / 1.609,
      Yards: value * 1094,
      Feet: value * 3281,
      Inches: value * 39370,
      Nautical_Miles: value / 1.852,
    },
    Meters: {
      Kilometers: value / 1000,
      Meters: value, //Default
      Centimeters: value * 100,
      Millimeters: value * 1000,
      Microns: value * 1e6,
      Nanometers: value * 1e9,
      Miles: value / 1609,
      Yards: value * 1.094,
      Feet: value * 3.281,
      Inches: value * 39.37,
      Nautical_Miles: value / 1852,
    },
    Centimeters: {
      Kilometers: value / 100000,
      Meters: value / 100,
      Centimeters: value, //Default
      Millimeters: value * 10,
      Microns: value * 10000,
      Nanometers: value * 1e7,
      Miles: value / 160900,
      Yards: value / 91.44,
      Feet: value / 30.48,
      Inches: value / 2.54,
      Nautical_Miles: value / 185200,
    },
    Millimeters: {
      Kilometers: value / 1e6,
      Meters: value / 1000,
      Centimeters: value / 10,
      Millimeters: value, //Default
      Microns: value * 1000,
      Nanometers: value * 1e6,
      Miles: value / 1.609e6,
      Yards: value / 914.4,
      Feet: value / 304.8,
      Inches: value / 25.4,
      Nautical_Miles: value / 1.852e6,
    },
    Microns: {
      Kilometers: value / 1e9,
      Meters: value / 1e6,
      Centimeters: value / 10000,
      Millimeters: value / 1000,
      Microns: value, //Default
      Nanometers: value * 1000,
      Miles: value / 1.609e9,
      Yards: value / 914400,
      Feet: value / 304800,
      Inches: value / 25400,
      Nautical_Miles: value / 1.852e9,
    },
    Nanometers: {
      Kilometers: value / 1e12,
      Meters: value / 1e9,
      Centimeters: value / 1e7,
      Millimeters: value / 1e6,
      Microns: value / 1000,
      Nanometers: value, //Default
      Miles: value / 1.609e12,
      Yards: value / 9.144e8,
      Feet: value / 3.048e8,
      Inches: value / 2.54e7,
      Nautical_Miles: value / 1.852e12,
    },
    Miles: {
      Kilometers: value * 1.609,
      Meters: value * 1609,
      Centimeters: value * 160934,
      Millimeters: value * 1.609e6,
      Microns: value * 1.609e9,
      Nanometers: value * 1.609e12,
      Miles: value, //Default
      Yards: value * 1760,
      Feet: value * 5280,
      Inches: value * 63360,
      Nautical_Miles: value / 1.151,
    },
    Yards: {
      Kilometers: value / 1094,
      Meters: value / 1.094,
      Centimeters: value * 91.44,
      Millimeters: value * 914.4,
      Microns: value * 914400,
      Nanometers: value * 9.144e8,
      Miles: value * 1760,
      Yards: value, //Default
      Feet: value * 3,
      Inches: value * 36,
      Nautical_Miles: value / 2025,
    },
    Feet: {
      Kilometers: value / 3281,
      Meters: value / 3.281,
      Centimeters: value * 30.48,
      Millimeters: value * 304.8,
      Microns: value * 304800,
      Nanometers: value * 3.048e8,
      Miles: value / 5280,
      Yards: value / 3,
      Feet: value, //Default
      Inches: value * 12,
      Nautical_Miles: value / 6076,
    },
    Inches: {
      Kilometers: value / 39370,
      Meters: value / 39.37,
      Centimeters: value * 2.54,
      Millimeters: value * 25.4,
      Microns: value * 25400,
      Nanometers: value * 2.54e7,
      Miles: value / 63360,
      Yards: value / 36,
      Feet: value / 12,
      Inches: value, //Default
      Nautical_Miles: value / 72910,
    },
    Nautical_Miles: {
      Kilometers: value * 1.852,
      Meters: value * 1852,
      Centimeters: value * 185200,
      Millimeters: value * 1.852e6,
      Microns: value * 1.852e9,
      Nanometers: value * 1.852e12,
      Miles: value * 1.151,
      Yards: value * 2025,
      Feet: value * 6076,
      Inches: value * 72910,
      Nautical_Miles: value, //Default
    },
    //MASS CONVERSIONS
    Metric_Ton: {
      Metric_Tons: value, //Default
      Kilograms: value * 1000,
      Grams: value * 1e6,
      Milligrams: value * 1e9,
      Micrograms: value * 1e12,
      Imperial_Tons: value / 1.016,
      Pounds: value * 2205,
      Ounces: value * 35270,
    },
    Kilograms: {
      Metric_Tons: value / 1000,
      Kilograms: value, //Default
      Grams: value * 1000,
      Milligrams: value * 1e6,
      Micrograms: value * 1e9,
      Imperial_Tons: value / 1016,
      Pounds: value * 2205,
      Ounces: value * 35.274,
    },
    Grams: {
      Metric_Tons: value / 1e6,
      Kilograms: value / 1000,
      Grams: value, //Default
      Milligrams: value * 1000,
      Micrograms: value * 1e6,
      Imperial_Tons: value / 1.016e6,
      Pounds: value / 452.6,
      Ounces: value / 28.35,
    },
    Milligrams: {
      Metric_Tons: value / 1e9,
      Kilograms: value / 1e6,
      Grams: value / 1000,
      Milligrams: value, //Default
      Micrograms: value * 1000,
      Imperial_Tons: value / 1.016e9,
      Pounds: value / 453600,
      Ounces: value / 28350,
    },
    Micrograms: {
      Metric_Tons: value / 1e12,
      Kilograms: value / 1e9,
      Grams: value / 1e6,
      Milligrams: value / 1000,
      Micrograms: value, //Default
      Imperial_Tons: value / 1.016e12,
      Pounds: value / 4.536e8,
      Ounces: value / 2.835e7,
    },
    Imperial_Tons_Ton: {
      Metric_Tons: value * 1.016,
      Kilograms: value * 1016,
      Grams: value * 1.016e6,
      Milligrams: value * 1.016e9,
      Micrograms: value * 1.016e12,
      Imperial_Tons: value, //Default
      Pounds: value * 2240,
      Ounces: value * 35840,
    },
    Pounds: {
      Metric_Tons: value / 2205,
      Kilograms: value / 2.205,
      Grams: value * 453.6,
      Milligrams: value * 453600,
      Micrograms: value * 4.536e8,
      Imperial_Tons: value / 2240,
      Pounds: value, //Default
      Ounces: value * 16,
    },
    Ounces: {
      Metric_Tons: value / 35270,
      Kilograms: value / 35.274,
      Grams: value * 28.35,
      Milligrams: value * 28350,
      Micrograms: value * 2.835e7,
      Imperial_Tons: value / 35840,
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
    Milliseconds: {
      Milliseconds: value, //Default
      Seconds: value / 1000,
      Minutes: value / 60000,
      Hours: value / 3.6e6,
      Days: value / 8.64e7,
      Weeks: value / 6.048e8,
      Months: value / 2.628e9,
      Years: value / 3.154e10,
    },
    Seconds: {
      Milliseconds: value / 1000,
      Seconds: value, //Default
      Minutes: value / 60,
      Hours: value / 3600,
      Days: value / 86400,
      Weeks: value / 604800,
      Months: value / 2.628e6,
      Years: value / 3.154e7,
    },
    Minutes: {
      Milliseconds: value / 60000,
      Seconds: value * 60,
      Minutes: value, //Default
      Hours: value / 60,
      Days: value / 1440,
      Weeks: value / 10080,
      Months: value / 43800,
      Years: value / 525600,
    },
    Hours: {
      Milliseconds: value / 3.6e6,
      Seconds: value * 3600,
      Minutes: value * 60,
      Hours: value, //Default
      Days: value / 24,
      Weeks: value / 168,
      Months: value / 730,
      Years: value / 8760,
    },
    Days: {
      Milliseconds: value / 8.64e7,
      Seconds: value * 86400,
      Minutes: value * 1440,
      Hours: value * 24,
      Days: value, //Default
      Weeks: value / 7,
      Months: value / 30.417,
      Years: value / 365,
    },
    Weeks: {
      Milliseconds: value / 6.048e8,
      Seconds: value * 604800,
      Minutes: value * 10080,
      Hours: value * 168,
      Days: value * 7,
      Weeks: value, //Default
      Months: value / 4.345,
      Years: value / 52.143,
    },
    Months: {
      Milliseconds: value / 2.628e9,
      Seconds: value * 2.628e6,
      Minutes: value * 43800,
      Hours: value * 730,
      Days: value * 30.417,
      Weeks: value * 4.345,
      Months: value, //Default
      Years: value / 12,
    },
    Years: {
      Milliseconds: value / 3.154e10,
      Seconds: value * 3.15e7,
      Minutes: value * 525600,
      Hours: value * 8760,
      Days: value * 365,
      Weeks: value * 52143,
      Months: value * 12,
      Years: value, //Default
    },
    //DIGITAL STORAGE CONVERSIONS
    Byte: {
      Byte: value, //Default
      Kilobyte: value / 1000,
      Megabyte: value / 1e6,
      Gigabyte: value / 1e9,
      Terabyte: value / 1e12,
    },
    Kilobyte: {
      Byte: value * 1000,
      Kilobyte: value, //Default
      Megabyte: value / 1000,
      Gigabyte: value / 1e6,
      Terabyte: value / 1e9,
    },
    Megabyte: {
      Byte: value * 1e6,
      Kilobyte: value * 1000,
      Megabyte: value, //Default
      Gigabyte: value / 1000,
      Terabyte: value / 1e6,
    },
    Gigabyte: {
      Byte: value * 1e9,
      Kilobyte: value * 1e6,
      Megabyte: value * 1000,
      Gigabyte: value, //Default
      Terabyte: value / 1000,
    },
    Terabyte: {
      Byte: value * 1e12,
      Kilobyte: value * 1e9,
      Megabyte: value * 1e6,
      Gigabyte: value * 1000,
      Terabyte: value, //Default
    },
  };
  result = conversions[fromUnit][toUnit];

  document.getElementById("result").innerHTML = `${formatter.format(
    value
  )} ${fromUnit} to ${formatter.format(result)} ${toUnit}`;
}
