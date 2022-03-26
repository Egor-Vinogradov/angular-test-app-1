import {Income, Investment, Loan, Outcome} from "./TypesTransactions";

export interface IName {
  first: string
  last: string
}

export interface ITransaction {
  type: Income | Outcome | Loan | Investment | string
  _id: string
  // amount?: number
  amount: string
  name: IName
  company?: string
  email?: string
  phone?: string
  address?: string
}

export interface IAllTransaction {
  total: number
  data: ITransaction[]
}
