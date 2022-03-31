const request = require('supertest');

const server = 'http://localhost:3001'

describe('Route integration', () => {
    describe('/schema', () => {
        describe('POST', () => {
            it('responds with 200 status and application/json content type', () => {
                return request(server)
                    .post('/schema')
                    .expect('Content-Type', /application\/json/)
                    .expect(200)
            })
        })
        describe('GET', () => {
          it('responds with 200 status and text/html content type', () => {
              return request(server)
                  .get('/')
                  .expect('Content-Type', /text\/html/)
                  .expect(200)
          })
      })
    })
})
