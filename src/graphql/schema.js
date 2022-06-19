import { tickerProfileType } from '../types/tickerProfileType.js'
import { tickerDetailsType } from '../types/tickerDetailsType.js'
import { tickerBrandingType } from '../types/tickerTypes/tickerBrandingType.js'
import { tickerAddressType } from '../types/tickerTypes/tickerAddressType.js'

const schema = `
"""Polygon.io Ticker Api Gateway.
This API currently includes Stocks/Equities, Crypto, and Forex."""
type Query {
  """Query for any ticker symbols basic profile which is supported by Polygon.io."""
  tickerProfile(tickerSymbol: String!): [TickerProfile]!
  """Get a single ticker. This response will have detailed information about the ticker and the company behind it."""
  tickerDetails(tickerSymbol: String!): TickerDetails
}
${tickerProfileType}
${tickerDetailsType}
${tickerBrandingType}
${tickerAddressType}
`
export { schema }
