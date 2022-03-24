import app from '../config/app'
import request from 'supertest'

describe('SignUp Routes', () => {
  test('Deve retornar uma conta com sucesso', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'ALan',
        email: 'freitas@gmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
