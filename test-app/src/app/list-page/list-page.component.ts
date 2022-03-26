import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {TransactionService} from "../shared/transaction.service";
import {IName, ITransaction} from "../shared/dto/ITransactions";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  public tab: number = 0
  private account: number = 0
  public detailsArr: [{
    last?: string,
    first?: string,
    amount?: string
  }] = [{}];

  constructor(private route: ActivatedRoute,
              private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tab = params['tab']
      this.getName(this.tab)
    })
  }

  private getName(id: number) {
    const transactions: ITransaction[] = this.transactionService.fetchTransactions().data
    let count: number = 0
    this.detailsArr = [{}]
    for (const tr in transactions) {
      if (transactions[tr].type === this.transactionService.getTypeName(Number(id) + 1, 1)) {
        this.detailsArr.push({
          last: transactions[tr].name.last,
          first: transactions[tr].name.first,
          amount: transactions[tr].amount
        })
        count++
      }
      this.account = count
    }
    this.detailsArr.splice(0, 1)
  }
}
