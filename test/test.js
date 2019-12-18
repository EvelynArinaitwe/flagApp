//import { request } from "express";
const request = require('express');
const app = require('express');

//import { request } from "express";

//import { request } from "express"

/*var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});*/

/*var should = require('should');
var assert = require('assert');
var request = require('supertest');
var app = require('../src/lib/app');*/

describe('get redflag', function(){
  it('should get a redflag from a ds', function(done){
    request(app)
      .get('/redflags')
      .expect(200, done);
  });

});