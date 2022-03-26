import {Injectable} from "@angular/core";
import data from './transactions.json'
import {Income, Investment, Loan, Outcome} from "./dto/TypesTransactions";
import {ITypeTransaction} from "./dto/ITypeTransaction";
import {IAllTransaction} from "./dto/ITransactions";

@Injectable({providedIn: 'root'})
export class TransactionService {

  private income: ITypeTransaction = new Income();
  private outcome: ITypeTransaction = new Outcome();
  private loan: ITypeTransaction = new Loan();
  private investment: ITypeTransaction = new Investment();

  public fetchTransactions(): IAllTransaction {
    return data
  }

  public getTypeName(id: number, typeCase: number): string {
    switch (id) {
      case 1:
        return typeCase == 1 ? this.income.name : this.income.typeName
      case 2:
        return typeCase == 1 ? this.investment.name : this.investment.typeName
      case 3:
        return typeCase == 1 ? this.outcome.name : this.outcome.typeName
      case 4:
        return typeCase == 1 ? this.loan.name : this.loan.typeName
      default:
        return ''
    }
  }

  public getType(id: number): ITypeTransaction {
    switch (id) {
      case 0:
        return this.income
      case 1:
        return this.investment
      case 2:
        return this.outcome
      case 3:
        return this.loan
      default:
        return this.income
    }
  }

}
