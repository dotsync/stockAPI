export const incomeStatementType = `type IncomeStatement {
    basic_earnings_per_share: BasicEarningsPerShare
    cost_of_revenue: CostOfRevenue
    gross_profit: GrossProfit
    operating_expenses: OperatingExpenses
    revenues: Revenues
}
type BasicEarningsPerShare {
    label: String
    order: Int
    unit: String
    value: Float
    xpath: String
}
type CostOfRevenue {
    label: String
    order: Int
    unit: String
    value: Float
    xpath: String
}
type GrossProfit {
    label: String
    order: Int
    unit: String
    value: Float
    xpath: String
}
type OperatingExpenses {
    label: String
    order: Int
    unit: String
    value: Float
    formula: String
}
type Revenues {
    label: String
    order: Int
    unit: String
    value: Float
    xpath: String
}`