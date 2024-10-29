
import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express'
import { expressMiddleware } from '@apollo/server/express4'
import http from 'http'
import cors from 'cors'
import bodyParser from 'body-parser'

import { typeDefs, resolvers } from './src/schema'

const startApolloServer = async (typeDefs, resolvers) => {
  const app = express()

  const httpServer = http.createServer(app)

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  })

  await server.start()

  app.use(
    '/graphql',
    cors({ origin: 'http://localhost:3000' }), 
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token })
    })
  )

  

  // Modified server startup
  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve))

  console.log(`🚀 Server ready at http://localhost:4000/graphql`)
}

startApolloServer(typeDefs, resolvers)