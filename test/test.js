//import { request } from "express";
const request = require('supertest');
const expect = require('chai').expect;
const app = require('express');

describe('get redflag', function(){
  it('should get redflags from a ds', function(done){
    request(app)
      .get('/redflags')
      .expect(200) 
        done();
  });

});

describe('get intervention', function(){
  it('should get interventions from a ds', function(done){
    request(app)
      .get('/interventions')
      .expect(200) 
        done();
  });

});

describe('post red flag', function(){
  it('should post a redflag', function(done){
    var flg=[
      {'id' : 1, 'name' : 'yes', 'geo' : '75' }
    ];

    request(app)
      .post('/redflags')
      .send(flg)
      .expect(201)
      done();
  });
});