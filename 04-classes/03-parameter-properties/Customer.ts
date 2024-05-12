class Customer {
  // shortcut way
  constructor(private _firstName: string, private _lastName: string) {}

  // by default public
  get firstName(): string {
    return this._firstName;
  }
  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }
  set lastName(value: string) {
    this._lastName = value;
  }
}

let myCustomer1 = new Customer("Gaurav", "Singh");

myCustomer1.firstName = "Saurav";

console.log(`${myCustomer1.firstName} ${myCustomer1.lastName}`);
