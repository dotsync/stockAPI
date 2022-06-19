import { balanceSheetType } from "./financials/balanceSheetType.js"
import { cashFlowStatmentType } from "./financials/cashFlowStatmentType.js"
import { comprehensiveIncomeType } from "./financials/comprehensiveIncomeType.js"
import { incomeStatementType } from "./financials/incomeStatementType.js"


export const stockFinancialsType = `type StockFinancials {
    company_name: String
    cik: String
    start_date: String
    end_date: String
    fiscal_period: String
    fiscal_year: String
    source_filing_file_url: String
    source_filing_url: String
    financials: Financials
}
type Financials {
    balance_sheet: BalanceSheet
    cash_flow_statement: CashFlowStatment
    comprehensive_income: ComprehensiveIncome
    income_statement: IncomeStatement
}
${balanceSheetType}
${cashFlowStatmentType}
${comprehensiveIncomeType}
${incomeStatementType}
`