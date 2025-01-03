const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]


//   Declare an empty array;
let arr = [];

//   Declare an array with more than 5 number of elements
let arr7 = Array(7);
arr7 = [1,2,3,4,5,6,7];

//   Find the length of your array
let length = arr7.length
console.log(length)

//   Get the first item, the middle item and the last item of the array
let first = arr7[0]
let middle = arr7[(length/2) - 0.5]
let last = arr7[length-1]
console.log(first, middle, last)

//   Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ['Int', 'Float', 'Bool', 'String', 'Char', 'undefined'];

//   Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon
let itCompaniesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let itCompanies = itCompaniesString.split(', ');

//   Print the array using console.log()
console.log(itCompanies);

//   Print the number of companies in the array
console.log(itCompanies.length)

//   Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[(itCompanies.length/2)-0.5], itCompanies[itCompanies.length-1])

//   Change each company name to uppercase one by one and print them out
let itCompaniesUpper = itCompanies.map(str => str.toUpperCase())
console.log(itCompaniesUpper);

//   Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.slice(0, itCompanies.length-1).join(', ') + ' and ' + itCompanies[itCompanies.length -1 ] + ' are big IT companies');

//   Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = 'Facebook'

if (itCompanies.includes(company)) {
    console.log(company)
} else {
    console.log('company is not found')
}

//   Filter out companies which have more than one 'o' without the filter method
let filteredItCompanies =[]
itCompanies.forEach(str => {
let count = 0;
for (let c of str) {
    if (c == 'o' || c == 'O') {
        count++;
    }
}
if (count > 1) {
    filteredItCompanies.push(str);
}
});

console.log(filteredItCompanies)

//   Sort the array using sort() method
itCompanies = itCompanies.sort();
console.log(itCompanies);

//   Reverse the array using reverse() method
itCompanies = itCompanies.reverse();
console.log(itCompanies);

//   Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

//   Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length-3, itCompanies.length));

//   Slice out the middle IT company or companies from the array
let arr_len = itCompanies.length;
if (arr_len % 2 == 0) {
    console.log(itCompanies.slice((arr_len/2)-1, (arr_len/2)+1));
} else {

    console.log(itCompanies.slice((arr_len/2)-0.5, (arr_len/2)+0.5 ));
}

//   Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

//   Remove the middle IT company or companies from the array
arr_len = itCompanies.length;
if (arr_len % 2 == 0) {
    itCompanies.splice((arr_len/2)-1, 2);
} else {

    itCompanies.splice((arr_len/2)-0.5, 1);
}
console.log(itCompanies);
//   Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

//   Remove all IT companies
itCompanies.splice(0);
console.log(itCompanies);