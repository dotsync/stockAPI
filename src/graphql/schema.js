import { tickerProfileType } from '../types/tickerTypes/tickerProfileType.js'
import { tickerDetailsType } from '../types/tickerTypes/tickerDetailsType.js'
import { tickerNewsType } from '../types/tickerTypes/tickerNewsType.js'

const schema = `
"""Polygon.io Ticker Api Gateway.
This API currently includes Stocks/Equities, Crypto, and Forex."""
type Query {
  """Query for any ticker symbols basic profile"""
  tickerProfile(tickerSymbol: String!): [TickerProfile]!
  """Get a single ticker. This response will have detailed information about the ticker and the company behind it."""
  tickerDetails(tickerSymbol: String!): TickerDetails
  """Get the most recent news articles relating to a stock ticker symbol, including a summary of the article and a link to the original source."""
  tickerNews(tickerSymbol: String!): TickerNews
}
${tickerProfileType}
${tickerDetailsType}
${tickerNewsType}
`
export { schema }
