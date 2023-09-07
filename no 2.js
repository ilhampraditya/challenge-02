const checkTypeNumber = (givenNumber) => {
  if (typeof givenNumber === "undefined") {
    return "Error: bro where is the parameter?";
  }

  if (typeof givenNumber !== "number") {
    return "Error: Invalid data type";
  }

  return givenNumber % 2 === 0 ? "GENAP" : "GANJIL";
};

console.log(checkTypeNumber(10)); // Output: "GENAP"
console.log(checkTypeNumber(3)); // Output: "GANJIL"
console.log(checkTypeNumber("3")); // Output: "Error: Invalid data type"
console.log(checkTypeNumber({})); // Output: "Error: Invalid data type"
console.log(checkTypeNumber([])); // Output: "Error: Invalid data type"
console.log(checkTypeNumber()); // Output: "Error: bro where is the parameter?"
