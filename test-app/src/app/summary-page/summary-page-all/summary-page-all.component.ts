import { Component, OnInit } from '@angular/core';
import {TransactionService} from "../../shared/transaction.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-summary-page-all',
  templateUrl: './summary-page-all.component.html',
  styleUrls: ['./summary-page-all.component.css']
})
export class SummaryPageAllComponent implements OnInit {

  public count: number = 0

  constructor(private transactionService: TransactionService,
              private router: Router) { }

  ngOnInit(): void {
    this.count = this.transactionService.fetchTransactions().total
  }

}
