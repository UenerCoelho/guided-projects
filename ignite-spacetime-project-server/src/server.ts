/* eslint-disable prettier/prettier */
import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true, // todas URLs de front poderão acessar nosso DB, mas o ideal é colocar o endereços no qual as URLs acessarão.
})

app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🤞HTTP server running on http://localhost:3333')
  })
