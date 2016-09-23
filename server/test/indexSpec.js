var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");

describe("Testing the first route", function(err){
  it("should handle the JSON data", function(done){
    url
        .get("/batch/getDetails")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
          myObj[0].waveName.should.be.equal("wave 6");
          myObj[0].Location.should.be.equal("bangalore");
          myObj[1].waveName.should.be.equal("wave 7");
          done();
        });

  });
  it("should send the JSON data", function(done){
    url
        .post("/batch/add")
        .expect(200)
        .send({
            "waveName": "wave 9",
            "waveType": "Hybrid",
            "Location": "kOLKATA",
            "NumberOfParticipants": 20,
            "plannedStartDate": "2016-10-18",
            "plannedEndDate": "2016-11-28"
            })
        .end(function(err,res,body){
          should.not.exist(err);
          res.text.should.be.equal("batch added");
          done();
        });

  });
  it("should display the recent added JSON data", function(done){
    url
        .get("/batch/getDetails")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
          var length=myObj.length-1;
          myObj[length].waveName.should.be.equal("wave 9");
          myObj[length].Location.should.be.equal("kOLKATA");
          done();
        });

  });

});
