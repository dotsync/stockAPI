import { tickerProfileType } from '../types/tickerProfileType.js'

const schema = `
type Query {
  tickerProfile(tickerSymbol: String!): [TickerProfile]!
}
${tickerProfileType}
`
export { schema }
