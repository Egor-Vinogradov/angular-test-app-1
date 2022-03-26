import {Component, Input, OnInit} from '@angular/core';
import {TransactionService} from "../../shared/transaction.service";
import {ITransaction} from "../../shared/dto/ITransactions";

@Component({
  selector: 'app-summary-page-details',
  templateUrl: './summary-page-details.component.html',
  styleUrls: ['./summary-page-details.component.css']
})
export class SummaryPageDetailsComponent implements OnInit {

  @Input() public typeNumber: number = 1
  public counter: number = 0
  public typeName: string = ''

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.setTypeName()
    this.setCount()
  }

  private setTypeName() {
    this.typeName = this.transactionService.getTypeName(this.typeNumber, 2)
  }

  private setCount() {
    const transactions: ITransaction[] = this.transactionService.fetchTransactions().data
    let count: number = 0
    for (const tr in transactions) {
      if (transactions[tr].type === this.transactionService.getTypeName(this.typeNumber, 1)) {
        count++
      }
      this.counter = count
    }
  }

}
