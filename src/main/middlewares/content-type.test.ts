import app from '../config/app'
import request from 'supertest'

describe('Content Type Middleware', () => {
  test('Deve retornar o tipo de conteúdo padrão como json', async () => {
    app.get('/test_content_type', (req, res) => {
      res.send('')
    })
    await request(app)
      .get('/test_content_type')
      .expect('content-type', /json/)
  })

  test('Deve retornar o tipo de conteúdo xml quando forçado', async () => {
    app.get('/test_content_type_xml', (req, res) => {
      res.type('xml')
      res.send('')
    })
    await request(app)
      .get('/test_content_type_xml')
      .expect('content-type', /xml/)
  })
})
