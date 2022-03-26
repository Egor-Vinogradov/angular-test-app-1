import {ITypeTransaction} from "./ITypeTransaction";

export class Income implements ITypeTransaction {

  private _name: string = 'income'
  private _typeName: string = 'Income'

  get name(): string {
    return this._name;
  }

  get typeName(): string {
    return this._typeName;
  }
}

export class Outcome implements ITypeTransaction {
  private _name: string = 'outcome'
  private _typeName: string = 'Outcome';

  get name(): string {
    return this._name;
  }

  get typeName(): string {
    return this._typeName;
  }
}

export class Loan implements ITypeTransaction {
  private _name: string = 'loan';
  private _typeName: string = 'Loans';

  get name(): string {
    return this._name;
  }

  get typeName(): string {
    return this._typeName;
  }
}

export class Investment implements ITypeTransaction {
  private _name: string = 'investment';
  private _typeName: string = 'Investments';

  get name(): string {
    return this._name;
  }

  get typeName(): string {
    return this._typeName;
  }
}
