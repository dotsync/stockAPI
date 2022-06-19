export const balanceSheetType = `type BalanceSheet {
    assets: Assets
    equity: Equity
    liabilities: Liabilities
}
type Assets {
    label: String
    order: Int
    unit: String
    value: Float
    xpath: String
}
type Equity {
    label: String
    order: Int
    unit: String
    value: Float
    formula: String
}
type Liabilities {
    label: String
    order: Int
    unit: String
    value: Float
    xpath: String
}`
