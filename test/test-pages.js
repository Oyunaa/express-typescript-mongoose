const expect = require("chai").expect;
const request = require("request");
let base_url = "http://localhost:4000";
//"http://localhost:3030";

it("Main page content", function (done) {
  request(`${base_url}/api`, function (error, response, body) {

    var jsonData = JSON.parse(body);

    expect(jsonData).to.property("messages").equal("Welcome to REST API");
    done();
  });
});
