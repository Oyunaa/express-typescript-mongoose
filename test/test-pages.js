const expect = require("chai").expect;
const request = require("request");
let base_url = "http://localhost:3030";

it("Main page content", function (done) {
  request(`${base_url}/api`, function (error, response, body) {
    expect(body).to.equal("Welcome to REST API");
    done();
  });
});
