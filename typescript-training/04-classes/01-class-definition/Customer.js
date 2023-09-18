var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// let's create an instance
var myCustomer = new Customer("Furkan", "GEREM");
console.log("".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
