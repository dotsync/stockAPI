import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import { schema } from './src/graphql/schema.js'
import cors from 'cors'

import { getTickerProfileResolver } from './src/resolvers/api/polygonStocks/referenceDataEndpoints/getTickerProfileResolver.js'
import { getTickerDetailsResolver } from './src/resolvers/api/polygonStocks/referenceDataEndpoints/getTickerDetailsResolver.js'
import { getTickerNewsResolver } from './src/resolvers/api/polygonStocks/referenceDataEndpoints/getTickerNewsResolver.js'
import { getStockFinancialsResolver } from './src/resolvers/api/polygonStocks/referenceDataEndpoints/getStockFinancialsResolver.js'

const app = express()
const corsOptions = {
  'Access-Control-Allow-Origin': 'http://localhost',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

const root = {
  tickerProfile: getTickerProfileResolver,
  tickerDetails: getTickerDetailsResolver,
  tickerNews: getTickerNewsResolver,
  stockFinancials: getStockFinancialsResolver,
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
