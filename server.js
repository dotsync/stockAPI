import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import { schema } from './src/schema/schema.js'
import cors from 'cors'

import { getTickerProfileResolver } from './src/resolvers/api/polygonStocks/referenceDataEndpoints/getTickerProfileResolver.js'
const app = express()
const corsOptions = {
  "Access-Control-Allow-Origin": 'http://localhost',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

// The root provides a resolver function for each API endpoint
const root = {
  tickerProfile : getTickerProfileResolver
}

app.use(
  '/graphql',
  graphqlHTTP({
    schema: buildSchema(schema),
    rootValue: root,
    graphiql: true,
  }),
)

app.listen(process.env.PORT, () => {
  console.log(
    `Running a GraphQL API server at http://localhost:${process.env.PORT}/graphql`,
  )
})
