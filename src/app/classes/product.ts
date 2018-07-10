import {Link} from './link';

export class Product {
  public identifier: number;
  public links: [Link];
  constructor(
    public title: string,
    public details: string,
    public stock: number,
    public situation: string,
    public pucture: string,
    public seller: number,
    public creationDate: object,
    public lastChange: object,
  ) { }
}
