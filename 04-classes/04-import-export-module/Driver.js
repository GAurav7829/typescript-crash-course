"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var myCustomer = new Customer_1.Customer("Gaurav", "Singh");
myCustomer.firstName = "Saurav";
console.log("".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
