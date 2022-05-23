const request = require('request');
const expect = require('chai').expect;
const PORT = process.env.port || 3001;


describe('server', function() {

  // before(function (done) {
  //   this.timeout(1000);
  //   server.on("ready", () => {
  //     done();
  //   });
  // });

  it('should respond to initial GET request with a 200 status code', function(done) {
    request('http://127.0.0.1:3001', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should respond to GET request to "/api" endpoint with a 200 status code and an object', function(done) {
    request('http://127.0.0.1:3001/api', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(typeof response).to.equal('object');
      done();
    });
  });


})