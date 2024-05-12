var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
// create instance
//let myCustomer = new Customer();
// myCustomer.firstName = "Gaurav";
// myCustomer.lastName = "Singh";
var myCustomer = new Customer("Gaurav", "Singh");
console.log("".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
