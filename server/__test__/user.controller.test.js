const request = require('supertest');
const app = require('../server'); // Import your Express app
const {User} = require('../models/user.model');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

describe('User Authentication API', () => {
    let server; // Variable to hold the server instance
  
    // Before running the tests, start the server
    beforeAll((done) => {
      server = app.listen(8000, () => {
        console.log('Server is running on port 8000');
        done(); // Signal that the server has started
      });
    });
  
    // After running the tests, close the server
    afterAll((done) => {
      server.close(() => {
        console.log('Server has been closed');
        done(); // Signal that the server has closed
      });
    });
  
    it('should login user with valid credentials and return JWT token', async () => {
      // Create a mock user for testing
      const mockUser = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        confirmPassword: 'password123' // Make sure confirmPassword matches password
      };
  
      // Register the mock user before attempting to log in
      await User.create(mockUser);
  
      // Make a request to the login endpoint with valid credentials
      const response = await request(app)
        .post('/api/users/login')
        .send(mockUser)
        .expect(200);
  
      // Check if the response contains the user token
      expect(response.body).toHaveProperty('message', 'Success!');
      expect(response.body).toHaveProperty('user');
      expect(response.body.user.email).toBe(mockUser.email);
      expect(response.headers['set-cookie']).toBeDefined(); // Ensure cookie is set
    });
  
    it('should return 401 for login with invalid email', async () => {
      const invalidEmail = 'invalid@example.com';
      const validPassword = 'password123';
  
      // Make a request to the login endpoint with invalid email
      const response = await request(app)
        .post('/api/users/login')
        .send({ email: invalidEmail, password: validPassword })
        .expect(401);
  
      // Check if the response contains the error message
      expect(response.body).toHaveProperty('message', 'Email or password is incorrect');
    });
  
    it('should return 401 for login with invalid password', async () => {
      const validEmail = 'test@example.com';
      const invalidPassword = 'invalidpassword';
  
      // Make a request to the login endpoint with invalid password
      const response = await request(app)
        .post('/api/users/login')
        .send({ email: validEmail, password: invalidPassword })
        .expect(401);
  
      // Check if the response contains the error message
      expect(response.body).toHaveProperty('message', 'Email or password is incorrect');
    });
  });


  describe('User Profile API', () => {
    let userToken; // Variable to hold the user token
  
    // Before running the tests, register a user and login to get the token
    beforeAll(async () => {
      // Register a user
      const userData = {
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
        confirmPassword: 'password123',
      };
      await User.create(userData);
  
      // Login to get the token
      const response = await request(app)
        .post('/api/users/login')
        .send({ email: userData.email, password: userData.password });
      
      userToken = response.body.usertoken;
    });
  
    // After running the tests, clear the database
    // afterAll((done) => {
    //     server.close(() => {
    //       console.log('Server has been closed');
    //       done(); // Signal that the server has closed
    //     });
    //   });
  
    it('should return user profile for authenticated user', async () => {
      // Make a request to the profile endpoint with the user token
      const response = await request(app)
        .get('/api/users/profile')
        .set('Cookie', [`usertoken=${userToken}`])
        .expect(200);
  
      // Check if the response contains the user profile data
      expect(response.body.name).toBe('Test User');
      expect(response.body.email).toBe('test@example.com');
      // Add more assertions to validate the user profile data
    });
  
    it('should return 401 for unauthenticated user', async () => {
      // Make a request to the profile endpoint without the user token
      await request(app)
        .get('/api/users/profile')
        .expect(401);
    });
  });