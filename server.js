const express = require('express');
const app = express();
const port = 8000;
const faker = require('faker');

class User {
    constructor() {
        this.First_Name = faker.name.firstName();
        this.Last_Name = faker.name.lastName();
        this.Phone_Number = faker.phone.phoneNumber();
        this.Email = faker.internet.email();
        this.Password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.Name = faker.company.companyName();
        this.Address = faker.address.streetAddress();
        this.City =  faker.address.cityName();
        this.State = faker.address.state();
        this.Zip_Code = faker.address.zipCodeByState();
        this.Country = faker.address.country();
    }
}

app.get("/api/users/new", (req,res) => {
    res.json(new User);
})

app.get("/api/companies/new", (req,res) => {
    res.json(new Company);
})

app.get("/api/user/company", (req,res) => {
    res.json({user: new User, company: new Company});
})

app.listen(port, () => console.log(`Running on port ${port}!!`))
