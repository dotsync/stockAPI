import { tickerType } from '../types/tickerType.js'

const schema = `
type Query {
  tickerProfile(tickerSymbol: String): [Ticker]
}
${tickerType}
`
export { schema }
