/* eslint-disable prettier/prettier */
import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import Multipart from '@fastify/multipart'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'node:path'

const app = fastify()

app.register(Multipart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads'
})

app.register(cors, {
  origin: true, // todas URLs de front poderão acessar nosso DB, mas o ideal é colocar o endereços no qual as URLs acessarão.
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log('🤞HTTP server running on http://localhost:3333')
    // Caso dê erro, abra o terminal GitBash e digite respectivamente os comandos "net stop winnat" e "net start winnat"
  })
