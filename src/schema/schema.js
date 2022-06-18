import { tickerType } from '../types/tickerType.js'

const schema = `
type Query {
  hello: String
  tickerProfile(tickerSymbol: String): [Ticker]
}
${tickerType}
`
export { schema }
