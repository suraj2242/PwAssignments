// ========================
//        Problem
// ========================

// Write a function that takes an object representing a person as input, and extracts the name and street properties from a nested object using object destructuring. The function should return an object with these two properties. A sample object is given below.

// ========================
//        Solution
// ========================

function extractNameAndStreet(personObject) {
    const { Name, Address: { street } } = personObject;
    return {Name, street}
}



const person = {
    Name: "Suraj Verma",
    Age : 26,
  Address: {
    street: "XYZ Street",
      State: "UP",
    country: "India"
  }
};
console.log(extractNameAndStreet(person));
