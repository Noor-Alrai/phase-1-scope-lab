// Write your solution in this file!
var customerName="Khalid";
let bestCustomer ="not bob";
const leastFavoriteCustomer= " John";
function upperCaseCustomerName(){
    return customerName.toUpperCase();
}
function setBestCustomer(){
   
    return bestCustomer;
}
function overwriteBestCustomer(){
bestCustomer= "is bob";
return bestCustomer
}
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "not John";
    return leastFavoriteCustomer;
}
console.log(upperCaseCustomerName())
console.log(setBestCustomer())
console.log(overwriteBestCustomer())
console.log(changeLeastFavoriteCustomer()) //error because we change constant variable.
