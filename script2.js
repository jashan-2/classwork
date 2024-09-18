// 01. Calculate the average marks
const marks = [85, 97, 44, 37, 76, 60];
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const averageMarks = totalMarks / marks.length;
console.log(averageMarks); // Output: 65.0

// 02. Apply 10% discount
const prices = [250, 645, 300, 900, 50];
const discountedPrices = prices.map(price => price * 0.9);
console.log(discountedPrices); // Output: [225, 580.5, 270, 810, 45]

// 03. Manipulate the companies array
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift(); // Remove first company
const uberIndex = companies.indexOf("Uber");
if (uberIndex !== -1) {
  companies.splice(uberIndex, 1, "Ola"); // Replace Uber with Ola
}
companies.push("Amazon"); // Add Amazon at the end
console.log(companies); // Output: ["Microsoft", "Ola", "Google", "IBM", "Netflix", "Amazon"]