export const cashFlowStatmentType = `type CashFlowStatment {
    exchange_gains_losses: ExchangeGainsLosses
    net_cash_flow: NetCashFlow
    net_cash_flow_from_financing_activities: NetCashFlowFromFinancingActivites
}
type ExchangeGainsLosses {
    label: String
    order: Int
    unit: String
    value: Float
    xpath: String
}
type NetCashFlow {
    label: String
    order: Int
    unit: String
    value: Float
    formula: String
}
type NetCashFlowFromFinancingActivites {
    label: String
    order: Int
    unit: String
    value: Float
    xpath: String
}`