const expect = require("chai").expect;
const request = require("request");
let base_url = "http://localhost:3030";

it("Main page content", function (done) {
  request(`${base_url}/api`, function (error, response, body) {
    console.log(response.body);
    // expect(body).to.equal("Welcome to REST API");
    // expect(response).to.have.property("body");
    expect(body).to.deep.equal("Welcome to REST API");
    done();
  });
});
