import { referenceClient } from '@polygon.io/client-js'

const getTickerNewsResolver = async ({ tickerSymbol }) => {
  const reference = referenceClient(process.env.API_KEY)
  try {
    const response = await reference
      .tickerNews({ ticker: tickerSymbol })
      .then((res) => {
        return res
      })
      // console.log(response.results[0].id)
      // console.log(response)
    return response
  } catch {
    console.log('!err: unable to get ticker details for: ' + tickerSymbol)
  }
}

export { getTickerNewsResolver }
