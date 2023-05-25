/* eslint-disable prettier/prettier */
import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWP {
    user: {
      sub: string
      name: string
      avatarUrl: string
    }
  }
}
