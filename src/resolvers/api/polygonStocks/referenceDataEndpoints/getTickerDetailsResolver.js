import { referenceClient } from '@polygon.io/client-js'

const getTickerDetailsResolver = async ({ tickerSymbol }) => {
  const reference = referenceClient(process.env.API_KEY)
  try {
    const response = await reference
      .tickerDetails(tickerSymbol)
      .then((res) => {
        return res
      })
    return response.results
  } catch {
    console.log('!err: unable to get ticker details for: ' + tickerSymbol)
    return null
  }
}

export { getTickerDetailsResolver }
