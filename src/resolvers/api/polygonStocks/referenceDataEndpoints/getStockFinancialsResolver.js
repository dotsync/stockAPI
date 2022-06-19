import { referenceClient } from '@polygon.io/client-js'

const getStockFinancialsResolver = async ({ tickerSymbol }) => {
  const reference = referenceClient(process.env.API_KEY)
  try {
    const response = await reference
      .stockFinancials({ ticker: tickerSymbol })
      .then((res) => {
        return res.results[0]
      })
    return response
  } catch {
    console.log('!err: unable to get ticker details for: ' + tickerSymbol)
  }
}

export { getStockFinancialsResolver }
