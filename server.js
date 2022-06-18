import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import { schema } from './src/schema/schema.js'

import { tickerProfileResolver } from './src/resolvers/api/polygonStocks/referenceDataEndpoints/tickerResolvers.js'

// The root provides a resolver function for each API endpoint
var root = {
  tickerProfile : tickerProfileResolver
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
console.log(
  `Running a GraphQL API server at http://localhost:${process.env.PORT}/graphql`,
)
