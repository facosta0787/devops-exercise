const request = require('supertest')
const app = require('../app');

test('root route test', async () => {
  const response = await request(app).get('/');
  expect(response.status).toEqual(200)
  expect(response.text).toEqual(JSON.stringify({
    data: {
      user: {
        firsname: 'felipe',
        lastname: 'acosta',
        email: 'me@felipeacosta.co',
        age: 31,
        address: 'St 42 7079 Laureles',
        phone: '+57 311 349 5655',
        country: 'COL',
        state: 'Antioquia',
        city: 'Medellin'
      }
    }
  }))
})