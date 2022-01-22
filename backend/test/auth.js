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

describe('POST /shop/login', () => {
  before(done => {
    const data = {
      message: '',
      data: {
        devId: 12345,
        username: 'navid',
        email: 'navid@email.com',
        phone: '09123456789',
        password: 'AStrongp@ssw0rd',
        confirm: 'AStrongp@ssw0rd',
      },
    };
    chai
      .request(app)
      .post('/shop/signup')
      .send(data)
      .end(() => done());
  });
  after(done => {
    User.deleteMany({}, () => done());
  });
  describe('login', () => {
    it('Logs in a user with username', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          user: 'navid',
          password: 'AStrongp@ssw0rd',
          userType: 'username',
        },
      };
      chai
        .request(app)
        .post('/shop/login')
        .send(data)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have
            .property('message')
            .eql('Logged in successfully');
          res.body.should.have.property('data');
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
    it('Logs in a user with email', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          user: 'navid@email.com',
          password: 'AStrongp@ssw0rd',
          userType: 'email',
        },
      };
      chai
        .request(app)
        .post('/shop/login')
        .send(data)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have
            .property('message')
            .eql('Logged in successfully');
          res.body.should.have.property('data');
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
    it('Logs in a user with phone number', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          user: '09123456789',
          password: 'AStrongp@ssw0rd',
          userType: 'phone',
        },
      };
      chai
        .request(app)
        .post('/shop/login')
        .send(data)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have
            .property('message')
            .eql('Logged in successfully');
          res.body.should.have.property('data');
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
    it('Does not login if devId is missing', done => {
      const data = {
        message: '',
        data: {
          user: '09123456789',
          password: 'AStrongp@ssw0rd',
          userType: 'phone',
        },
      };
      chai
        .request(app)
        .post('/shop/login')
        .send(data)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('conflict').eql('devId');
          res.body.data.should.have
            .property('message')
            .eql('Requirement missing');
          done();
        });
    });
    it('Does not login if user(name, phone, email) is missing', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          password: 'AStrongp@ssw0rd',
          userType: 'phone',
        },
      };
      chai
        .request(app)
        .post('/shop/login')
        .send(data)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('conflict').eql('user');
          res.body.data.should.have
            .property('message')
            .eql('Requirement missing');
          done();
        });
    });
    it('Does not login if password is missing', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          user: '09123456789',
          userType: 'phone',
        },
      };
      chai
        .request(app)
        .post('/shop/login')
        .send(data)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('conflict').eql('password');
          res.body.data.should.have
            .property('message')
            .eql('Requirement missing');
          done();
        });
    });
    it('Does not login if userType is missing', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          password: 'AStrongp@ssw0rd',
          user: '09123456789',
        },
      };
      chai
        .request(app)
        .post('/shop/login')
        .send(data)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('conflict').eql('userType');
          res.body.data.should.have
            .property('message')
            .eql('Requirement missing');
          done();
        });
    });
    it('Does not login if password is wrong(due to weakness)', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          password: 'aweakpassword',
          user: '09123456789',
          userType: 'phone',
        },
      };
      chai
        .request(app)
        .post('/shop/login')
        .send(data)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('conflict').eql('password');
          res.body.data.should.have.property('message').eql('Wrong password');
          res.body.data.should.have.property('value').eql('aweakpassword');
          done();
        });
    });
    it('Does not login if password is wrong', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          password: 'AWr0ngP@ssword',
          user: '09123456789',
          userType: 'phone',
        },
      };
      chai
        .request(app)
        .post('/shop/login')
        .send(data)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('conflict').eql('password');
          res.body.data.should.have.property('message').eql('Wrong password');
          res.body.data.should.have.property('value').eql('AWr0ngP@ssword');
          done();
        });
    });
    it('Does not login if user is not signed up', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          password: 'AWr0ngP@ssword',
          user: '09123456780',
          userType: 'phone',
        },
      };
      chai
        .request(app)
        .post('/shop/login')
        .send(data)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('conflict').eql('user');
          res.body.data.should.have.property('message').eql('User not found');
          res.body.data.should.have.property('value').eql('09123456780');
          done();
        });
    });
    it('Does not login if phone number is invalid', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          password: 'AWr0ngP@ssword',
          user: '0912345678',
          userType: 'phone',
        },
      };
      chai
        .request(app)
        .post('/shop/login')
        .send(data)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('conflict').eql('user');
          res.body.data.should.have
            .property('message')
            .eql('Not a phone number');
          res.body.data.should.have.property('value').eql('0912345678');
          done();
        });
    });
    it('Does not login if email address is invalid', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          password: 'AWr0ngP@ssword',
          user: 'a@b.c',
          userType: 'email',
        },
      };
      chai
        .request(app)
        .post('/shop/login')
        .send(data)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('conflict').eql('user');
          res.body.data.should.have
            .property('message')
            .eql('Not an email address');
          res.body.data.should.have.property('value').eql('a@b.c');
          done();
        });
    });
    it('Does not login if username type is invalid', done => {
      const data = {
        message: '',
        data: {
          devId: 12345,
          password: 'AWr0ngP@ssword',
          user: 'ausername',
          userType: 'abcd',
        },
      };
      chai
        .request(app)
        .post('/shop/login')
        .send(data)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('conflict').eql('userType');
          res.body.data.should.have
            .property('message')
            .eql('Not a username type');
          res.body.data.should.have.property('value').eql('abcd');
          done();
        });
    });
  });
});

describe('POST /shop/refresh', () => {
  let token;
  let refresh;
  before(done => {
    const data = {
      message: '',
      data: {
        devId: 12345,
        username: 'navid',
        email: 'navid@email.com',
        phone: '09123456789',
        password: 'AStrongp@ssw0rd',
        confirm: 'AStrongp@ssw0rd',
      },
    };
    chai
      .request(app)
      .post('/shop/signup')
      .send(data)
      .end((err, res) => {
        token = res.body.data.token;
        refresh = res.body.data.refresh;
        done();
      });
  });
  after(done => {
    User.deleteMany({}, () => done());
  });
  describe('refresh', () => {
    it('Avoids refreshing when token is valid', done => {
      const header = `${token}~12345~${refresh}`;
      chai
        .request(app)
        .post('/shop/refresh')
        .set('Authorization', header)
        .end((err, res) => {
          res.should.have.status(425);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have
            .property('message')
            .eql('Token is not expired yet');
          res.body.data.should.have.property('conflict').eql('token');
          res.body.data.should.have.property('value').eql(token);
          done();
        });
    });
    it('Avoids refreshing if header is not set', done => {
      chai
        .request(app)
        .post('/shop/refresh')
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('An error occured');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have
            .property('message')
            .eql('Requirement missing');
          res.body.data.should.have.property('conflict').eql('token');
          done();
        });
    });
  });
});
