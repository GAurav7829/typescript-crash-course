import { Customer } from "./Customer";

let myCustomer = new Customer("Gaurav", "Singh");

myCustomer.firstName = "Saurav";

console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);
