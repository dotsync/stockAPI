export const comprehensiveIncomeType = `type ComprehensiveIncome {
    comprehensive_income_loss: comprehensiveIncomeLoss
    comprehensive_income_loss_attributable_to_parent: comprehensiveIncomeLossAttributableToParent
    other_comprehensive_income_loss: otherComprehensiveIncomeLoss
}
type comprehensiveIncomeLoss {
    label: String
    order: Int
    unit: String
    value: Float
    formula: String
}
type comprehensiveIncomeLossAttributableToParent {
    label: String
    order: Int
    unit: String
    value: Float
    xpath: String
}
type otherComprehensiveIncomeLoss {
    label: String
    order: Int
    unit: String
    value: Float
    formula: String
}`
