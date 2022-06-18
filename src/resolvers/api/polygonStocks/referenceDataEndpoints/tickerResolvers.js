import { referenceClient } from '@polygon.io/client-js'
import { GraphQLObjectType, GraphQLString } from 'graphql'
const reference = referenceClient(process.env.API_KEY)

/*
Query all ticker symbols which are supported by Polygon.io.
This API currently includes Stocks/Equities, Crypto, and Forex.
*/
const tickerProfileResolver = async ({ tickerSymbol }) => {
  try {
    const tickerProfile = await reference
      .tickers({ ticker: tickerSymbol, limit: 10 })
      .then((value) => {
        console.log('server status: ' + value.status)
        return value.results
      })
    return tickerProfile
  } catch {
    console.log('! unable to get ticker data for: ' + tickerSymbol)
    return []
  }
}

export { tickerProfileResolver }
