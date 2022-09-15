var customerName = "bob";

function upperCaseCustomerName() {
    this.customerName = customerName.toUpperCase();
}

var bestCustomer;
function setBestCustomer(str) {
    this.bestCustomer = "not bob";
    return bestCustomer;
}

function overwriteBestCustomer() {
    this.bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = "bob";
    leastFavoriteCustomer = "not bob";
}