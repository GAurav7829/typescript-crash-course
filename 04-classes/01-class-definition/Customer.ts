class Customer {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
//  getters and setters in traditional way
//   public getFirstName(): string {
//     return this.firstName;
//   }
//   public setFirstName(firstName: string): void {
//     this.firstName = firstName;
//   }
}

// create instance
//let myCustomer = new Customer();
// myCustomer.firstName = "Gaurav";
// myCustomer.lastName = "Singh";

let myCustomer = new Customer("Gaurav", "Singh");

console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);
