// import request from 'supertest';
// import { app } from '../server';

// describe('Workspace Controller', () => {
//     describe('GET /api/getAllWorkspaceOfUser', () => {
//         it('should return all workspaces of the user', async () => {
//             const response = await request(server)
//                 .get('/api/getAllWorkspaceOfUser')
//                 .set('Cookie', ['accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Zjg5NmM4ZDU1OTA3NzA0YTJjOWEyOCIsImlhdCI6MTcxNDEyODgzOH0.dMKwAItna8DePniwgrqypDZMN-KB-JcoAjiu_98_OUM']); // Set the authorization header with a valid JWT token

//             // To test with an invalid token, you can set an invalid token in the Cookie header
//             // For example:
//             // .set('Cookie', ['accessToken=invalidToken']);

//             expect(response.status).toBe(200);
//             expect(response.body.workspaces).toBeInstanceOf(Array);
//             // Add more assertions to validate the response data
//         });
//     });


//     // Add more test cases for other functions in the workspace controller
// });