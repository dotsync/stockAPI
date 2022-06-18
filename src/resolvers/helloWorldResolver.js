import { referenceClient } from '@polygon.io/client-js'
import { GraphQLObjectType, GraphQLString } from 'graphql'
const reference = referenceClient(process.env.API_KEY)

// reference.tickers().then(/* your success handler */);

const helloWorldResolver = () => {
  return 'Hello world!'
}

/*
Query all ticker symbols which are supported by Polygon.io.
This API currently includes Stocks/Equities, Crypto, and Forex.
*/
const tickerResolver = async ({ tickerSymbol }) => {
  try {
    const ticker = await reference
      .tickers({ ticker: tickerSymbol })
      .then((value) => {
        console.log('success')
        return value.results
      })
      return ticker
  } catch {
    console.log('unable to get ticker data for: ' + tickerSymbol)
    return []
  }
}

export { helloWorldResolver, tickerResolver }
