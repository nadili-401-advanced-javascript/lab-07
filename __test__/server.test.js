'use strict';

const { server } = require('../lib/server.js');
const supertester = require('../__mockes__/supertester.js');
// jest.mock()

const mockRequest = supertester(server);
// this is actually server.js > server
// (akin to server.start, we're doing server.server)

describe('web server', () => {
  it('should respond properly on request to /people', () => {
    mockRequest
      .get('/people')
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.count).toBe(4);
      })
      .catch(console.error);
  });

  // test('async/await: should respond properly on request to /people', async () => {
  //   try {
  //     let res = await mockRequest.get('/people');

  //     expect(res.status).toBe(200);
  //     expect(res.body.count).toBe(4);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // });

  it('should respond properly on post to /people', () => {
    mockRequest
      .post('/people')
      .send({ firstName: 'Test', lastName: 'Person' })
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.firstName).toBe('Test');
      })
      .catch(console.error);
  });
  it('should respond properly on put to /people/:id', () => {
    mockRequest
      .put('/people/1')
      .send({ firstName: 'Test', lastName: 'Person', birthday: '07/11/1979', team: 1, likes: 'dogs' })
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });

  it('should respond properly on put to /teams/:id', () => {
    mockRequest
      .put('/teams/1')
      .send({ name: 'Test', color: 'red' })
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });


  it('should respond properly on delete to /teams/:id',  async () => {
    mockRequest
      .delete('/teams/1')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });

  it('should respond properly on delete to /people/:id',  async () => {
    mockRequest
      .delete('/people/1')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });


  it('should respond properly on post to /teams', () => {
    mockRequest
      .post('/teams')
      .send({ firstName: 'Test', lastName: 'Person' })
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.firstName).toBe('Test');
      })
      .catch(console.error);
  });

 

  it('should respond properly on request to /teams', () => {
    mockRequest
      .get('/teams')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });
 


});
