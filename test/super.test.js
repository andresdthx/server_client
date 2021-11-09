'use strict';
require('../src/config/config');
require('../src/db/connection');
const { app, server } = require('../src/server/server');

const supertest = require('supertest');
const api = supertest(app);

const createUser = jest.fn();
//prisma ORM

// test('GET /clients get clients', async () => {
//     await api
//         .get('/api/clients')
//         .expect(200)
//         .expect('Content-Type', /application\/json/)
//         // .expect(200)
// });

// test('POST /clients create client', async () => {
//     // createUser();
//     await api
//         .post('/api/clients')
//         .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1pZ28iLCJpYXQiOjE2MzU5NzM2NzgsImV4cCI6MTYzODU2NTY3OH0.zEKuSpxi-6gcnBRUcL1177DiOFAqKhBgKRFbiIcPJGE')
//         .send({
//             firstname: "Lalo",
//             lastname: "Landa",
//             dni: 1,
//             age: 61,
//             city: "Manizales",
//             typeDni: "CC",
//             file: "base64"
//         })
//         // .expect(200)
//         // .expect('Content-Type', /application\/json/)
//         .expect(createUser.mock.calls.length).toBe(1)
// });

// test('notes ares returned as json', async () => {
//     await api
//         .get('/')
//         .expect(200)
//         .expect('Content-Type', /application\/json/)
// });

afterAll(() => {
    server.close();
});