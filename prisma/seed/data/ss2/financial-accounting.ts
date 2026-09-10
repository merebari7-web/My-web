import { SeedSubjectContent } from "../content-types";

export const ss2FinancialAccounting: SeedSubjectContent = {
  subjectSlug: "financial-accounting",
  classShortName: "SS2",
  stream: "COMMERCIAL",
  lessons: [
    {
      title: "The Accounting Equation and Double-Entry Principle",
      summary: "Understand the fundamental accounting equation and how double-entry bookkeeping works.",
      durationMins: 26,
      term: 1,
      topic: { title: "Accounting Equation", nerdcCode: "ACC-SS2-1", waecTopic: "Basic Accounting Concepts — WAEC Financial Accounting Syllabus", jambRelevance: "The accounting equation is foundational and appears in JAMB Accounting questions." },
      contentMd: `# The Accounting Equation and Double-Entry Principle

## The Accounting Equation
$$\\text{Assets} = \\text{Liabilities} + \\text{Capital (Owner's Equity)}$$

This equation must always balance — every transaction affects at least two accounts.

## Key Definitions
- **Assets**: things a business owns (cash, equipment, buildings, inventory).
- **Liabilities**: what a business owes to others (loans, unpaid bills).
- **Capital**: the owner's investment in the business.

## The Double-Entry Principle
Every transaction has two effects — a **debit** and a **credit** — of equal value. This keeps the accounting equation balanced.

**Rule:** Debit the account that receives value; credit the account that gives value.

## Worked Example
Mr. Adeyemi starts a business with ₦500,000 cash.

- Debit: Cash (Asset) increases by ₦500,000
- Credit: Capital increases by ₦500,000

Assets (₦500,000 cash) = Liabilities (₦0) + Capital (₦500,000) ✓ Balanced

## Another Example
The business buys goods worth ₦100,000 on credit from a supplier.

- Debit: Purchases/Inventory (Asset) increases by ₦100,000
- Credit: Accounts Payable/Creditors (Liability) increases by ₦100,000

## Nigerian Context
Small business owners across Nigeria — from Computer Village traders in Lagos to fabric sellers in Aba — use these same basic principles (even informally) to track what they own, owe, and have invested, which is essential when seeking loans from banks or microfinance institutions.

## Practice
1. State the accounting equation.
2. A business buys a delivery van for ₦2,000,000 cash. Show the effect on the accounting equation.
3. Explain the double-entry principle in your own words.

## Key Takeaways
- Assets = Liabilities + Capital must always balance.
- Every transaction has a debit and credit effect of equal value.
- These principles form the foundation for all financial accounting record-keeping.`,
    },
    {
      title: "The Trial Balance",
      summary: "Learn how to prepare a trial balance to check the arithmetical accuracy of accounting records.",
      durationMins: 26,
      term: 1,
      topic: { title: "Trial Balance", nerdcCode: "ACC-SS2-4", waecTopic: "Trial Balance — WAEC Financial Accounting Syllabus" },
      contentMd: `# The Trial Balance

## What is a Trial Balance?
A trial balance is a list of all ledger account balances, arranged in debit and credit columns, prepared to check that total debits equal total credits.

## Format of a Trial Balance

| Account | Debit (₦) | Credit (₦) |
|---|---|---|
| Cash | 200,000 | |
| Capital | | 500,000 |
| Purchases | 150,000 | |
| Sales | | 100,000 |
| Creditors | | 50,000 |
| Furniture | 300,000 | |
| **Total** | **650,000** | **650,000** |

## Why Prepare a Trial Balance?
1. To check the arithmetical accuracy of the ledger accounts.
2. To provide a summary from which financial statements (Trading Account, Profit and Loss Account, Balance Sheet) can be prepared.

## Limitations of a Trial Balance
A trial balance balancing does NOT guarantee there are no errors — some errors, like errors of omission (a transaction completely left out) or errors of commission (posting to the wrong account of the correct type), will not be revealed by a trial balance.

## Practice
1. Explain the purpose of a trial balance.
2. List two types of errors not revealed by a trial balance.
3. Given the debit total is ₦450,000 and the credit total is ₦430,000, what would you do next?

## Key Takeaways
- A trial balance checks whether total debits equal total credits.
- It doesn't guarantee accounting records are error-free, only that they are arithmetically consistent.`,
    },
    {
      title: "Trading, Profit and Loss Account",
      summary: "Learn how to prepare a Trading and Profit and Loss Account to determine gross and net profit.",
      durationMins: 28,
      term: 2,
      topic: { title: "Final Accounts", nerdcCode: "ACC-SS2-7", waecTopic: "Final Accounts of a Sole Trader — WAEC Financial Accounting Syllabus", jambRelevance: "Gross/net profit calculations are commonly tested in JAMB Accounting." },
      contentMd: `# Trading, Profit and Loss Account

## Purpose
The Trading Account calculates **Gross Profit**, while the Profit and Loss Account calculates **Net Profit** for a business over a period.

## Trading Account Format
$$\\text{Gross Profit} = \\text{Net Sales} - \\text{Cost of Goods Sold}$$

Cost of Goods Sold = Opening Stock + Purchases − Closing Stock

## Worked Example
Mrs. Ibe's provisions store has:
- Sales: ₦800,000
- Opening stock: ₦100,000
- Purchases: ₦500,000
- Closing stock: ₦150,000

**Cost of Goods Sold** = 100,000 + 500,000 − 150,000 = ₦450,000
**Gross Profit** = 800,000 − 450,000 = ₦350,000

## Profit and Loss Account
$$\\text{Net Profit} = \\text{Gross Profit} - \\text{Expenses} + \\text{Other Income}$$

If Mrs. Ibe's expenses (rent, wages, transport) total ₦120,000:
**Net Profit** = 350,000 − 120,000 = ₦230,000

## Nigerian Context
Small and medium enterprises (SMEs) in Nigeria, which make up a significant part of the economy, use these accounts to determine profitability and to prepare documentation required by banks (like GTBank or Access Bank) for business loan applications.

## Practice
1. Define gross profit and net profit.
2. A trader has sales of ₦1,200,000, opening stock ₦200,000, purchases ₦700,000, and closing stock ₦180,000. Find the cost of goods sold and gross profit.
3. If expenses are ₦300,000 for the trader above, find the net profit.

## Key Takeaways
- Gross Profit = Net Sales − Cost of Goods Sold.
- Net Profit = Gross Profit − Expenses (+ other income).
- These accounts help business owners evaluate performance over a trading period.`,
    },
  ],
  quizQuestions: [
    { text: "The accounting equation is:", optionA: "Assets = Liabilities - Capital", optionB: "Assets = Liabilities + Capital", optionC: "Capital = Assets + Liabilities", optionD: "Liabilities = Assets + Capital", correctOption: "B", explanation: "The correct accounting equation is Assets = Liabilities + Capital." },
    { text: "A trial balance is used to check:", optionA: "profitability", optionB: "arithmetical accuracy of ledger balances", optionC: "tax obligations", optionD: "employee salaries", correctOption: "B", explanation: "A trial balance checks that total debits equal total credits." },
    { text: "Gross Profit is calculated as:", optionA: "Sales - Expenses", optionB: "Sales - Cost of Goods Sold", optionC: "Assets - Liabilities", optionD: "Capital + Liabilities", correctOption: "B", explanation: "Gross Profit = Net Sales - Cost of Goods Sold." },
    { text: "In double-entry bookkeeping, every transaction affects:", optionA: "one account only", optionB: "at least two accounts", optionC: "no accounts", optionD: "three accounts always", correctOption: "B", explanation: "Every transaction has a debit and a credit effect on at least two accounts." },
    { text: "Net Profit is calculated as:", optionA: "Gross Profit + Expenses", optionB: "Gross Profit - Expenses", optionC: "Sales - Purchases", optionD: "Assets - Capital", correctOption: "B", explanation: "Net Profit = Gross Profit - Expenses (+ other income)." },
  ],
  examTitle: "SS2 Financial Accounting — First Term Examination",
  examQuestions: [
    { text: "Which of these is classified as an asset?", optionA: "Loan from bank", optionB: "Cash in hand", optionC: "Amount owed to suppliers", optionD: "Owner's capital", correctOption: "B", explanation: "Cash in hand is something the business owns, making it an asset.", board: "WAEC" },
    { text: "A debit entry in an account represents:", optionA: "value received", optionB: "value given only", optionC: "a liability decrease always", optionD: "an error", correctOption: "A", explanation: "A debit entry represents value received into an account.", board: "WAEC" },
    { text: "If total debits in a trial balance do not equal total credits, this indicates:", optionA: "the business made a loss", optionB: "there is likely an error in the accounts", optionC: "the business made a profit", optionD: "nothing is wrong", correctOption: "B", explanation: "An imbalance in the trial balance suggests an accounting error exists.", board: "WAEC" },
    { text: "Cost of Goods Sold is calculated as:", optionA: "Opening Stock + Purchases − Closing Stock", optionB: "Sales − Gross Profit", optionC: "Closing Stock − Opening Stock", optionD: "Purchases + Closing Stock", correctOption: "A", explanation: "COGS = Opening Stock + Purchases − Closing Stock.", board: "WAEC" },
    { text: "A trial balance that balances guarantees:", optionA: "no errors exist in the accounts", optionB: "arithmetical accuracy only, not complete absence of errors", optionC: "the business is profitable", optionD: "all liabilities are paid off", correctOption: "B", explanation: "A balancing trial balance only confirms arithmetical accuracy, not full error-freedom.", board: "WAEC" },
    { text: "An error where a transaction is completely omitted from the books is called an error of:", optionA: "commission", optionB: "omission", optionC: "principle", optionD: "original entry", correctOption: "B", explanation: "An error of omission occurs when a transaction is left out entirely.", board: "WAEC" },
    { text: "If Sales = ₦900,000 and Cost of Goods Sold = ₦600,000, Gross Profit is:", optionA: "₦1,500,000", optionB: "₦300,000", optionC: "₦600,000", optionD: "₦900,000", correctOption: "B", explanation: "Gross Profit = 900,000 - 600,000 = 300,000.", board: "JAMB" },
    { text: "If Gross Profit = ₦300,000 and Expenses = ₦120,000, Net Profit is:", optionA: "₦420,000", optionB: "₦180,000", optionC: "₦300,000", optionD: "₦120,000", correctOption: "B", explanation: "Net Profit = 300,000 - 120,000 = 180,000.", board: "JAMB" },
    { text: "Which financial statement shows a business's assets, liabilities and capital at a point in time?", optionA: "Trading Account", optionB: "Profit and Loss Account", optionC: "Balance Sheet", optionD: "Trial Balance", correctOption: "C", explanation: "The Balance Sheet shows the financial position (assets, liabilities, capital) at a specific date.", board: "WAEC" },
    { text: "A credit entry in the Capital account typically represents:", optionA: "a decrease in capital", optionB: "an increase in capital", optionC: "an expense", optionD: "a loss", correctOption: "B", explanation: "A credit entry in the Capital account usually reflects an increase, such as additional owner investment.", board: "NECO" },
  ],
};
