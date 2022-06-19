import { referenceClient } from '@polygon.io/client-js'

const getTickerProfileResolver = async ({ tickerSymbol }) => {
  const reference = referenceClient(process.env.API_KEY)
  try {
    const tickerProfile = await reference
      .tickers({ ticker: tickerSymbol })
      .then((value) => {
        // console.log('server status: ' + value.status)
        return value.results
      })
    return tickerProfile
  } catch {
    console.log('!err: unable to get ticker profile for: ' + tickerSymbol)
    return []
  }
}

export { getTickerProfileResolver }
