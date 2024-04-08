// factory function
// function createdAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     };
// }
// let address = createdAddress('a', 'b', 'c');
// console.log(address);

let address = new Address('a', 'b', 'c');
console.log(address);

// constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}