const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

const app = require('../app');
const User = require('../models/User');

chai.use(chaiHttp);

describe('POST /shop/signup', () => {
  after(done => {
    User.deleteMany({}, () => done());
  });
  describe('signup', () => {
    it('Signs up a user', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          username: 'navid',
          phone: '09123456789',
          email: 'navid@email.com',
          password: 'StrongPass1$',
          confirm: 'StrongPass1$',
        },
      };
      chai
        .request(app)
        .post('/shop/signup')
        .send(data)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('User created');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('user');
          res.body.data.should.have.property('token');
          res.body.data.should.have.property('refresh');
          res.body.data.user.should.be.a('object');
          res.body.data.user.should.have.property('username').eql('navid');
          res.body.data.user.should.have
            .property('email')
            .eql('navid@email.com');
          res.body.data.user.should.have.property('phone').eql('09123456789');
          done();
        });
    });
    it('Signs up a user without email', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          username: 'navidi',
          phone: '09123456729',
          password: 'StrongPass1$',
          confirm: 'StrongPass1$',
        },
      };
      chai
        .request(app)
        .post('/shop/signup')
        .send(data)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('User created');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('user');
          res.body.data.should.have.property('token');
          res.body.data.should.have.property('refresh');
          res.body.data.user.should.be.a('object');
          res.body.data.user.should.have.property('username').eql('navidi');
          res.body.data.user.should.have.property('phone').eql('09123456729');
          done();
        });
    });
    it('Avoids signing up when email is already registered', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          username: 'navido',
          phone: '09123456889',
          email: 'navid@email.com',
          password: 'StrongPass1$',
          confirm: 'StrongPass1$',
        },
      };
      chai
        .request(app)
        .post('/shop/signup')
        .send(data)
        .end((err, res) => {
          res.should.have.status(409);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.data.should.be.a('object');
          res.body.data.should.have
            .property('message')
            .eql('Email already registered');
          res.body.data.should.have.property('conflict').eql('email');
          res.body.data.should.have.property('value').eql('navid@email.com');
          done();
        });
    });
    it('Avoids signing up when username is already registered', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          username: 'navid',
          phone: '09123456889',
          email: 'navid@emaail.com',
          password: 'StrongPass1$',
          confirm: 'StrongPass1$',
        },
      };
      chai
        .request(app)
        .post('/shop/signup')
        .send(data)
        .end((err, res) => {
          res.should.have.status(409);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.data.should.be.a('object');
          res.body.data.should.have
            .property('message')
            .eql('Username already registered');
          res.body.data.should.have.property('conflict').eql('username');
          res.body.data.should.have.property('value').eql('navid');
          done();
        });
    });
    it('Avoids signing up when phone number is already registered', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          username: 'navidq',
          phone: '09123456789',
          email: 'navid@emaail.com',
          password: 'StrongPass1$',
          confirm: 'StrongPass1$',
        },
      };
      chai
        .request(app)
        .post('/shop/signup')
        .send(data)
        .end((err, res) => {
          res.should.have.status(409);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.data.should.be.a('object');
          res.body.data.should.have
            .property('message')
            .eql('Phone number already registered');
          res.body.data.should.have.property('conflict').eql('phone');
          res.body.data.should.have.property('value').eql('09123456789');
          done();
        });
    });
    it('Avoids signing up when devId is missing', done => {
      const data = {
        message: '',
        data: {
          username: 'navid',
          phone: '09123456789',
          password: 'StrongPass1$',
          confirm: 'StrongPass1$',
        },
      };
      chai
        .request(app)
        .post('/shop/signup')
        .send(data)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.data.should.be.a('object');
          res.body.data.should.have
            .property('message')
            .eql('Requirement missing');
          res.body.data.should.have.property('conflict').eql('devId');
          done();
        });
    });
    it('Avoids signing up when username is missing', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          phone: '09123456789',
          password: 'StrongPass1$',
          confirm: 'StrongPass1$',
        },
      };
      chai
        .request(app)
        .post('/shop/signup')
        .send(data)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.data.should.be.a('object');
          res.body.data.should.have
            .property('message')
            .eql('Requirement missing');
          res.body.data.should.have.property('conflict').eql('username');
          done();
        });
    });
    it('Avoids signing up when phone number is missing', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          username: 'navid',
          password: 'StrongPass1$',
          confirm: 'StrongPass1$',
        },
      };
      chai
        .request(app)
        .post('/shop/signup')
        .send(data)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.data.should.be.a('object');
          res.body.data.should.have
            .property('message')
            .eql('Requirement missing');
          res.body.data.should.have.property('conflict').eql('phone');
          done();
        });
    });
    it('Avoids signing up when password is missing', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          username: 'navid',
          phone: '09123456789',
          confirm: 'StrongPass1$',
        },
      };
      chai
        .request(app)
        .post('/shop/signup')
        .send(data)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.data.should.be.a('object');
          res.body.data.should.have
            .property('message')
            .eql('Requirement missing');
          res.body.data.should.have.property('conflict').eql('password');
          done();
        });
    });
    it('Avoids signing up when confirm password is missing', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          username: 'navid',
          phone: '09123456789',
          password: 'StrongPass1$',
        },
      };
      chai
        .request(app)
        .post('/shop/signup')
        .send(data)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.data.should.be.a('object');
          res.body.data.should.have
            .property('message')
            .eql('Requirement missing');
          res.body.data.should.have.property('conflict').eql('confirm');
          done();
        });
    });
    it('Avoids signing up when phone number is invalid', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          username: 'navidoo',
          phone: '0912356789',
          password: 'StrongPass1$',
          confirm: 'StrongPass1$',
        },
      };
      chai
        .request(app)
        .post('/shop/signup')
        .send(data)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('conflict').eql('phone');
          res.body.data.should.have
            .property('message')
            .eql('Not a phone number');
          res.body.data.should.have.property('value').eql('0912356789');
          done();
        });
    });
    it('Avoids signing up when email is invalid', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          username: 'navidoo',
          phone: '09123356789',
          email: 'navid@email.wtf',
          password: 'StrongPass1$',
          confirm: 'StrongPass1$',
        },
      };
      chai
        .request(app)
        .post('/shop/signup')
        .send(data)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('conflict').eql('email');
          res.body.data.should.have
            .property('message')
            .eql('Not an email address');
          res.body.data.should.have.property('value').eql('navid@email.wtf');
          done();
        });
    });
    it('Avoids signing up when password is weak', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          username: 'navidoo',
          phone: '09123356789',
          email: 'navidoo@email.com',
          password: 'weakpass',
          confirm: 'weakpass',
        },
      };
      chai
        .request(app)
        .post('/shop/signup')
        .send(data)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('conflict').eql('password');
          res.body.data.should.have.property('message').eql('Password is weak');
          res.body.data.should.have.property('value').eql('weakpass');
          done();
        });
    });
    it("Avoids signing up when passwords don't match", done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          username: 'navidoo',
          phone: '09123356789',
          email: 'navidoo@email.com',
          password: 'AGOODp@ssW0rd',
          confirm: 'AgoodPassword',
        },
      };
      chai
        .request(app)
        .post('/shop/signup')
        .send(data)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('conflict').eql('confirm');
          res.body.data.should.have
            .property('message')
            .eql("Passwords don't match");
          res.body.data.should.have.property('value').eql('AgoodPassword');
          done();
        });
    });
  });
});
