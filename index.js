// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = "unknown initial value";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();

}

function setBestCustomer() {
    bestCustomer = "not bob";
    return bestCustomer;
}

function overwriteBestCustomer() {
     bestCustomer = "maybe bob";
    return bestCustomer;
}

function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = "ozzy";
}


