export const tickerNewsType = `type TickerNews {
  count: Int
  results: [Article]
}
type Article {
  title: String
  amp_url: String
  article_url: String
  author: String
  description: String
  id: String
  image_url: String
  keywords: [String]
  published_utc: String
  publisher: Publisher
  tickers: [String]
}
type Publisher {
  favicon_url: String
  homepage_url: String
  logo_url: String
  name: String
}`
