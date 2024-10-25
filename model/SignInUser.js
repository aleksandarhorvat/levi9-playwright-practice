import { LoggedInUser } from "./LoggedInUser";

export class SignInUser extends LoggedInUser{
    constructor(username, email, password, day, month, year, 
        firstName, lastName, company, address1, address2, country, 
        state, city, zipcode, mobile_number){
            super(email, password, username);
            this.day = day;
            this.month = month;
            this.year = year;
            this.firstName = firstName;
            this.lastName = lastName;
            this.company = company;
            this.address1 = address1;
            this.address2 = address2;
            this.country = country;
            this.state = state;
            this.city = city;
            this.zipcode = zipcode;
            this.mobile_number = mobile_number;
        }
}