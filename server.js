import express from 'express'

import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'

import { restClient } from '@polygon.io/client-js'
import { schema } from './src/schema/schema.js'

import { helloWorldResolver, tickerResolver } from './src/resolvers/helloWorldResolver.js'

const rest = restClient(process.env.API_KEY)

// The root provides a resolver function for each API endpoint
var root = {
  hello: helloWorldResolver,
  tickerProfile : tickerResolver
}

var app = express()
app.use(
  '/graphql',
  graphqlHTTP({
    schema: buildSchema(schema),
    rootValue: root,
    graphiql: true,
  }),
)
app.listen(process.env.PORT)
// console.log(process.env)
console.log(
  `Running a GraphQL API server at http://localhost:${process.env.PORT}/graphql`,
)
