// ===================
//       Problem
// ===================
// You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements.

// ===================
//       Solution
// ===================

function noDuplicate(array) {
    arrayToSet = new Set(array);
    const arrayWithNoDuplicate = [...arrayToSet];
    return arrayWithNoDuplicate;
}
console.log(noDuplicate([3, 45, 5, 667, 78, 8, 8, 8]));
