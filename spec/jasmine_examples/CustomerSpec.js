var request = require('request');
var base_url = 'http://localhost:3000/customer/1095466';

let Customer = {
    customerNumber:1095466,
    firstName:"",
    lastName:"",
    birthDate:"",
    username:"",
    password:""
};

describe("Customer Detail Api Exists", () => {
    describe('GET Customer By customerNumber /customer/{customerNumber}', () => {
        it('Return status code 200', (done) => {
            request.get(base_url, (error,response,body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it('Api response should be valid json', (done) => {
            request.get(base_url, (error,response,body) => {
                expect( () => {
                    JSON.parse(body);
                    //test output
                    let data = JSON.parse(body);
                    console.log(data.data);
                }).not.toThrow();
                done();
            });
        });
        it('Api response should be valid array of customer detail objects', (done) => {
            request.get(base_url, (error,response,body) => {
                let customer = JSON.parse(body);
                const row = customer.data.map((data) => {
                    expect(JSON.stringify(Object.keys(Customer).sort()) === JSON.stringify(Object.keys(data).sort())).toBeTruthy();
                });
                done();
            });
        });
        
    });
});