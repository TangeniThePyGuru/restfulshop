import {Link} from './link';

export class Transaction {
  public identifier: number;
  public links: [Link];

  constructor(
    public quantity: number,
    public buyer: number,
    public product: number,
    public creationDate: object,
    public lastChange: object,
  ) { }
}
